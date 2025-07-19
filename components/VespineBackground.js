import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const TechBackground = () => {
  const mountRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (isInitialized) return;
    
    let animationFrameId;
    let scene, camera, renderer;
    let particles, particlePositions;
    let raycaster, intersects;
    let connections = [];
    
    const clock = new THREE.Clock();
    const particleCount = 100;
    const maxDistance = 2.5;
    const maxConnections = 3;
    
    // Color palette
    const colors = {
      background: new THREE.Color(0x0a0e17),
      particles: new THREE.Color(0x4a88fd),
      connections: new THREE.Color(0x3366cc),
      highlight: new THREE.Color(0x00e5ff)
    };

    // Initialize the scene
    const init = () => {
      // Create scene
      scene = new THREE.Scene();
      scene.background = colors.background;
      
      // Create camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 8;
      
      // Create renderer
      renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      
      // Add renderer to DOM
      if (mountRef.current) {
        mountRef.current.appendChild(renderer.domElement);
        setIsInitialized(true);
      }
      
      // Raycaster for interaction
      raycaster = new THREE.Raycaster();
      raycaster.params.Points.threshold = 0.1;
      
      // Create particles
      createParticles();
      
      // Handle window resize
      window.addEventListener('resize', onWindowResize);
    };
    
    // Create the particle system
    const createParticles = () => {
      const geometry = new THREE.BufferGeometry();
      particlePositions = new Float32Array(particleCount * 3);
      
      // Create particles with random positions
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * 20 - 10;
        const y = Math.random() * 20 - 10;
        const z = Math.random() * 10 - 5;
        
        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;
      }
      
      geometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      
      // Create particle material
      const material = new THREE.PointsMaterial({
        color: colors.particles,
        size: 0.1,
        transparent: true,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
      });
      
      // Create particle system
      particles = new THREE.Points(geometry, material);
      scene.add(particles);
      
      // Create lines for connections
      const lineMaterial = new THREE.LineBasicMaterial({
        color: colors.connections,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
      });
      
      // Pre-create line objects for efficiency
      for (let i = 0; i < particleCount * maxConnections; i++) {
        const lineGeometry = new THREE.BufferGeometry();
        const line = new THREE.Line(lineGeometry, lineMaterial);
        line.visible = false;
        scene.add(line);
        connections.push(line);
      }
    };
    
    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    // Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();
      
      // Update particle positions
      const positions = particles.geometry.attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        // Gentle floating movement
        positions[i * 3 + 1] += Math.sin(time * 0.3 + i * 0.1) * 0.002;
        positions[i * 3] += Math.cos(time * 0.2 + i * 0.1) * 0.002;
        
        // Keep particles within bounds
        if (positions[i * 3 + 1] > 10) positions[i * 3 + 1] = -10;
        if (positions[i * 3 + 1] < -10) positions[i * 3 + 1] = 10;
        if (positions[i * 3] > 10) positions[i * 3] = -10;
        if (positions[i * 3] < -10) positions[i * 3] = 10;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Update connections
      updateConnections();
      
      // Slight camera movement
      camera.position.x = Math.sin(time * 0.1) * 0.5;
      camera.position.y = Math.cos(time * 0.1) * 0.3;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };
    
    // Update particle connections
    const updateConnections = () => {
      let connectionIndex = 0;
      const positions = particles.geometry.attributes.position.array;
      
      // Hide all connections first
      connections.forEach(line => {
        line.visible = false;
      });
      
      // Check distances between particles
      for (let i = 0; i < particleCount; i++) {
        const p1 = {
          x: positions[i * 3],
          y: positions[i * 3 + 1],
          z: positions[i * 3 + 2]
        };
        
        let connectionCount = 0;
        
        for (let j = i + 1; j < particleCount; j++) {
          if (connectionCount >= maxConnections) break;
          
          const p2 = {
            x: positions[j * 3],
            y: positions[j * 3 + 1],
            z: positions[j * 3 + 2]
          };
          
          // Calculate distance
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          // Connect if within range
          if (distance < maxDistance) {
            if (connectionIndex < connections.length) {
              const line = connections[connectionIndex];
              const linePositions = new Float32Array([
                p1.x, p1.y, p1.z,
                p2.x, p2.y, p2.z
              ]);
              
              line.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
              
              // Opacity based on distance
              const opacity = 1.0 - (distance / maxDistance);
              line.material.opacity = opacity * 0.5;
              line.visible = true;
              
              connectionIndex++;
              connectionCount++;
            }
          }
        }
      }
    };
    
    // Initialize and start animation
    init();
    animate();
    
    // Clean up on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onWindowResize);
      
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      if (scene) {
        scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
      
      if (renderer) renderer.dispose();
    };
  }, [isInitialized]);
  
  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900"
    />
  );
};

export default TechBackground;