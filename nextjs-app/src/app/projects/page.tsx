
'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Projects = () => {
  useEffect(() => {
    const THREE = require('three');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('bg-canvas'),
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.IcosahedronGeometry(10, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x6366f1, wireframe: true });
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);

    camera.position.z = 30;

    const particles = new THREE.Group();
    scene.add(particles);

    for (let i = 0; i < 200; i++) {
      const geometry = new THREE.SphereGeometry(0.1, 8, 8);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const particle = new THREE.Mesh(geometry, material);

      const x = Math.random() * 400 - 200;
      const y = Math.random() * 400 - 200;
      const z = Math.random() * 400 - 200;
      particle.position.set(x, y, z);

      particles.add(particle);
    }

    function animate() {
      requestAnimationFrame(animate);
      icosahedron.rotation.x += 0.005;
      icosahedron.rotation.y += 0.005;
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0005;
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Laryson Loyyd - Projects</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
      </Head>
      <body className="text-gray-300 font-sans">
        <canvas id="bg-canvas"></canvas>
        <div className="container mx-auto p-8 content">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-2">My Projects</h1>
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              Back to Home
            </Link>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-6">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                Hilander.AI
              </h2>
              <p className="mb-4">
                This is a document managment web app with it’s main feature is a
                ai document manager which diretly uploades docs from whatsapp,
                telegram etc and segrigates them on the bases of there
                importance and subject and also gives feature like to do list +
                other notion like feature- Main feature is a ai document manager
                which diretly uploades docs from whatsapp, telegram etc and
                segrigates them on the bases of there impor tance and subject-
                Technologies used: Typescript, Javasript, React, Hugging face,
                supabase- Tried to integrate ai with document segmentation.
              </p>
              <a
                href="https://hilander.netlify.app/"
                className="text-blue-400 hover:text-blue-300"
              >
                View Project
              </a>
            </div>
            <div className="glass-effect p-6">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                Face AI
              </h2>
              <p className="mb-4">
                An attendence app which recognise the person as a related or
                stranger and on the bases of it alarm the system to do the
                needful is- Technologies used: Python with OpenCV lib- Key
                feature is the face recognition which gives high correct output
                with alarm system.
              </p>
              <a
                href="https://github.com/ayushrai1235/Face-Attendence"
                className="text-blue-400 hover:text-blue-300"
              >
                View Project
              </a>
            </div>
            <div className="glass-effect p-6">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                Portfolio Website
              </h2>
              <p className="mb-4">
                Designed and developed a responsive portfolio website showcasing
                my skills and projects.
              </p>
              <a
                href="https://larysonloyyd.vercel.app/"
                className="text-blue-400 hover:text-blue-300"
              >
                View Project
              </a>
            </div>
          </main>
        </div>
      </body>
    </>
  );
};

export default Projects;
