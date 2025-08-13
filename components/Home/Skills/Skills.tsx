'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import { FaJava, FaAws } from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiSpringboot, SiFlutter,
  SiPython, SiC, SiCplusplus, SiDart, SiExpress, SiSequelize, SiFlask,
  SiHtml5, SiCss3, SiBootstrap, SiJsonwebtokens, SiAxios, SiJest, SiSocketdotio,
  SiMongodb, SiPostgresql, SiFirebase, SiGooglecloud, SiTerraform, SiPacker,
  SiDocker, SiGithubactions, SiLinux, SiOpenai, SiReactrouter
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const Tilt = dynamic(() => import('react-parallax-tilt'), { ssr: false });

const skills = [
  { id: 'javascript', name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
  { id: 'typescript', name: 'TypeScript', icon: <SiTypescript /> },
  { id: 'react', name: 'React', icon: <SiReact /> },
  { id: 'react-router', name: 'React Router', icon: <SiReactrouter /> },
  { id: 'node', name: 'Node.js', icon: <SiNodedotjs /> },
  { id: 'express', name: 'Express.js', icon: <SiExpress /> },
  { id: 'springboot', name: 'Spring Boot', icon: <SiSpringboot /> },
  { id: 'java', name: 'Java', icon: <FaJava /> },
  { id: 'python', name: 'Python', icon: <SiPython /> },
  { id: 'c', name: 'C', icon: <SiC /> },
  { id: 'cplusplus', name: 'C++', icon: <SiCplusplus /> },
  { id: 'dart', name: 'Dart', icon: <SiDart /> },
  { id: 'flutter', name: 'Flutter', icon: <SiFlutter /> },
  { id: 'sequelize', name: 'Sequelize ORM', icon: <SiSequelize /> },
  { id: 'flask', name: 'Flask', icon: <SiFlask /> },
];

const tools = [
  { id: 'html5', name: 'HTML5', icon: <SiHtml5 /> },
  { id: 'css3', name: 'CSS3', icon: <SiCss3 /> },
  { id: 'bootstrap', name: 'Bootstrap', icon: <SiBootstrap /> },
  { id: 'rest', name: 'REST / API Design', icon: <SiOpenai /> }, // swap if you prefer OpenAPI icon
  { id: 'jwt', name: 'JWT / RBAC', icon: <SiJsonwebtokens /> },
  { id: 'axios', name: 'Axios', icon: <SiAxios /> },
  { id: 'websockets', name: 'WebSockets', icon: <SiSocketdotio /> },
  { id: 'jest', name: 'Jest', icon: <SiJest /> },
  { id: 'mongodb', name: 'MongoDB Atlas', icon: <SiMongodb /> },
  { id: 'postgres', name: 'PostgreSQL', icon: <SiPostgresql /> },
  { id: 'firebase', name: 'Firebase', icon: <SiFirebase /> },
  { id: 'sql', name: 'SQL', icon: <TbSql /> },
  { id: 'aws', name: 'AWS', icon: <FaAws /> },
  { id: 'gcp', name: 'GCP', icon: <SiGooglecloud /> },
  { id: 'terraform', name: 'Terraform', icon: <SiTerraform /> },
  { id: 'packer', name: 'Packer', icon: <SiPacker /> },
  { id: 'docker', name: 'Docker', icon: <SiDocker /> },
  { id: 'gha', name: 'GitHub Actions', icon: <SiGithubactions /> },
  { id: 'linux', name: 'Linux / Shell', icon: <SiLinux /> },
  { id: 'openai', name: 'OpenAI API', icon: <SiOpenai /> },
];

function Tile({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="h-40 w-full rounded-3xl bg-white/5 backdrop-blur-sm
                    flex flex-col items-center justify-center text-center
                    shadow-lg transition-transform duration-200">
      <div className="mb-4 text-4xl sm:text-5xl text-gray-300">{icon}</div>
      <p className="px-2 text-cyan-300 text-sm font-medium leading-snug">{label}</p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="mx-auto w-[90%] max-w-7xl">
        <h1 className="text-white text-center text-2xl md:text-4xl xl:text-5xl font-bold">
          My Professional <span className="text-cyan-300">Skills</span>
        </h1>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {skills.map(s => (
            <Tilt
              key={s.id}
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              scale={1.06}
              transitionSpeed={400}
              glareEnable
              glareMaxOpacity={0.12}
              glareColor="#22d3ee"
              glareBorderRadius="24px"
              gyroscope
              className="will-change-transform"
            >
              <Tile icon={s.icon} label={s.name} />
            </Tilt>
          ))}
        </div>

        <h2 className="mt-20 text-white text-center text-2xl md:text-4xl xl:text-5xl font-bold">
          Tools I <span className="text-cyan-300">Use</span>
        </h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {tools.map(t => (
            <Tilt
              key={t.id}
              tiltMaxAngleX={30}
              tiltMaxAngleY={30}
              scale={1.06}
              transitionSpeed={400}
              glareEnable
              glareMaxOpacity={0.12}
              glareColor="#22d3ee"
              glareBorderRadius="24px"
              gyroscope
              className="will-change-transform"
            >
              <Tile icon={t.icon} label={t.name} />
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
