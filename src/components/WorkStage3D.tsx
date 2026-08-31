"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface Project {
  id: string;
  title: string;
  image: string;
}

export default function WorkStage3D({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 12;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const meshes: THREE.Mesh[] = [];

    projects.forEach((proj, idx) => {
      textureLoader.load(proj.image, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const geometry = new THREE.PlaneGeometry(5.33, 3);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
        });
        const mesh = new THREE.Mesh(geometry, material);

        const xOffset = (idx - (projects.length - 1) / 2) * 5.8;
        mesh.position.set(xOffset, idx % 2 === 0 ? 0.3 : -0.3, -idx * 1.2);
        mesh.rotation.y = (idx - 1) * -0.12;
        scene.add(mesh);
        meshes.push(mesh);
      });
    });

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX = (x / container.clientWidth) * 2 - 1;
      mouseY = -(y / container.clientHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 1.5;
      camera.position.y = targetY * 1.5;
      camera.lookAt(0, 0, 0);

      meshes.forEach((mesh, idx) => {
        mesh.position.y += Math.sin(elapsedTime * 1.5 + idx) * 0.003;
        mesh.rotation.z = Math.sin(elapsedTime + idx) * 0.015;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [projects]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[450px] md:h-[600px] relative overflow-hidden pointer-events-none rounded-3xl"
    />
  );
}
