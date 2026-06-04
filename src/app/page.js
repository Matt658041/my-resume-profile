"use client";

import React, { useState } from "react";
import Image from "next/image";
import nyImage from "../../public/github-profile.jpg";
import html from "../../public/html.png";
import css from "../../public/css-image.png";
import js from "../../public/typescript_original_logo_icon_146317.webp";
import node from "../../public/node.png";
import react from "../../public/React-icon.png";
import aws from "../../public/aws image.png";
import git from "../../public/git-png.png";
import MedscanMapDash from "../../components/MedscanMapDash.jsx";
import MedscanAppModal from "../../components/MedscanAppModal";
import MlabApp from "../../components/MlabApp";
import MedscanDashModal from "../../components/MedscanDashModal";
import SolarU from "../../components/SolarU";
import MedscanMap from "../../public/Medscan Map screen shot.png";
import Mlab from "../../public/mlab screen shot.png";
import MedscanTestHistoryImage from "../../public/Medscan test history screen shot.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Navbar from "../../components/Navbar";
import SolarUphones from "../../public/Slide2.jpeg";
import MedscanMobileImage from "../../public/Slide1.jpeg";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % steps.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + steps.length) % steps.length,
    );
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const steps = [
    {
      label: "Medscan: Mobile App",
      role: "Lead Front-End Developer",
      tech: "React Native · Expo Go · AWS Amplify · React Native Maps · Formik",
      description:
        "iOS & Android app enabling point-of-care specimen collection and diagnostic test analysis for schistosomiasis. Deployed across 7 countries with 4,000+ tests conducted.",
      image: MedscanMobileImage,
      modal: MedscanAppModal,
    },
    {
      label: "Medscan: Map Dashboard",
      role: "Lead Front-End Developer",
      tech: "React · React Leaflet · Material UI · AWS Amplify",
      description:
        "Dynamic map tracking disease prevalence in Kenyan schools with search, filters, editable pop-ups, and carousels for real-time visualization of study results.",
      image: MedscanMap,
      modal: MedscanMapDash,
    },
    {
      label: "Medscan: Web Dashboard",
      role: "Lead Front-End Developer",
      tech: "React · Material UI · JavaScript · AWS Amplify",
      description:
        "Interactive web dashboard for administrators, project managers, and sponsors with full resource and staff audit histories to improve data accessibility.",
      image: MedscanTestHistoryImage,
      modal: MedscanDashModal,
    },
    {
      label: "Solar U",
      role: "Lead Front-End Developer",
      tech: "React Native · AppleHealthKit · Google Health · AWS Amplify · Expo Go",
      description:
        "Mobile app using NASA's API to retrieve Solar Insolation data and correlate it with health metrics (heart rate, blood pressure) to measure user mood and wellbeing.",
      image: SolarUphones,
      modal: SolarU,
    },
    {
      label: "mLab+",
      role: "Lead Front-End Developer",
      tech: "React Native · Formik · Axios · Vercel SWR · Expo Go · AWS Amplify",
      description:
        "Collaborated with Columbia University on a mobile health app for HIV/Syphilis tracking with photo capture, cloud-based test analysis, and participant enrollment.",
      image: Mlab,
      modal: MlabApp,
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="w-full flex flex-col items-center justify-center pt-16 pb-12 px-4 border-b border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase text-emerald-600 mb-3">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Matthew Boisse
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl text-gray-600 font-medium">
            Web &amp; Mobile Application Developer
          </h2>
          <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto">
            Seasoned developer with the Mobile Health for Global Health (MHGH)
            research group at Vanderbilt University. Specializing in
            cutting-edge solutions that aid in the control and elimination of
            infectious diseases in low-resource settings.
          </p>
        </div>
      </section>

      {/* ── About ── */}
      <div id="about" className="w-full py-16 px-4 border-b border-gray-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm tracking-widest uppercase text-emerald-600">
              About
            </p>
            <h2 className="mt-2 mb-4 text-3xl font-bold text-gray-900">
              Who I Am
            </h2>
            <p className="text-gray-600 leading-relaxed">
              I&apos;m a full-stack developer at the Mobile Health for Global
              Health (MHGH) research group at Vanderbilt University, where I
              lead front-end development on applications directly used by
              healthcare workers and public health officials across seven
              countries.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              My work spans mobile apps built in React Native, interactive web
              dashboards in React, and cloud infrastructure on AWS. I completed
              Vanderbilt&apos;s Full Stack Web Development Bootcamp in 2022 and
              have since earned an AWS Cloud Practitioner badge and CITI Program
              certification for Human Research.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I bring strong skills in pattern recognition, data analysis, and
              problem-solving, and thrive in Agile, interdisciplinary teams
              building software with real-world impact.
            </p>
          </div>
          <div className="md:pt-[4.5rem]">
            <div className="w-full rounded-xl overflow-hidden shadow-xl hover:scale-105 ease-in duration-300">
              <Image
                className="w-full h-auto block"
                src={nyImage}
                alt="GitHub Profile"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Skills ── */}
      {/* ── Projects ── */}
      <div id="projects" className="w-full px-4 py-16 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-emerald-600">
            Projects
          </p>
          <h2 className="mt-2 mb-8 text-3xl font-bold text-gray-900">
            My Work
          </h2>

          {modalOpen ? (
            React.createElement(steps[activeStep].modal, {
              modalOpen: modalOpen,
              setModalOpen: setModalOpen,
            })
          ) : (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Image frame — fixed height, consistent across all slides */}
              <div
                className="relative w-full h-72 sm:h-96 cursor-pointer group bg-gray-100"
                onClick={() => handleImageClick(steps[activeStep].image)}
              >
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].label}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 896px"
                />
                {/* Persistent hint badge — fades out on hover when overlay takes over */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                  Expand
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    Click to expand
                  </span>
                </div>
              </div>

              {/* Card footer: label, description, navigation */}
              <div className="px-6 py-5">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {steps[activeStep].label}
                    </h3>
                    <p className="text-xs font-medium text-emerald-600 mt-0.5">
                      {steps[activeStep].role}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {steps[activeStep].tech}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {steps[activeStep].description}
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap pt-1">
                    {activeStep + 1} / {steps.length}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-gray-200 text-gray-600 px-5 py-2 rounded-lg hover:bg-gray-300 disabled:opacity-40 transition-colors text-sm font-medium"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    ← Back
                  </button>

                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeStep
                            ? "bg-emerald-600 w-6"
                            : "bg-gray-300 w-2"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700 disabled:opacity-40 transition-colors text-sm font-medium"
                    onClick={handleNext}
                    disabled={activeStep === steps.length - 1}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Skills ── */}
      <div id="skills" className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-emerald-600">
            Skills
          </p>
          <h2 className="mt-2 mb-8 text-3xl font-bold text-gray-900">
            What I Can Do
          </h2>

          {/* Icon grid for primary technologies */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-10">
            {[
              { src: html, label: "HTML" },
              { src: css, label: "CSS" },
              { src: js, label: "TypeScript" },
              { src: node, label: "Node.js" },
              { src: react, label: "React" },
              { src: react, label: "React Native" },
              { src: aws, label: "AWS" },
              { src: git, label: "Git" },
            ].map(({ src, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-2 p-4 bg-white shadow-md rounded-xl hover:scale-105 ease-in duration-300"
              >
                <Image src={src} width={48} height={48} alt={label} />
                <h3 className="text-sm font-medium text-center text-gray-900">
                  {label}
                </h3>
              </div>
            ))}
          </div>

          {/* Full skill list grouped by category */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                category: "Frameworks & Libraries",
                items:
                  "React, Vite, React Native, React Native Paper, Material UI, Tailwind CSS, Next.js, Mongoose",
              },
              {
                category: "Languages",
                items: "TypeScript, JavaScript, HTML, CSS, SQL",
              },
              {
                category: "Backend & Databases",
                items: "Node.js, MongoDB, MySQL, RESTful APIs, Next.js",
              },
              {
                category: "Deployment & Cloud",
                items: "AWS Amplify, AWS EC2, Expo Go, Vercel, Heroku",
              },
              {
                category: "Tools & Platforms",
                items: "Git, GitHub, GitLab, Docker, REDCap, DHIS2",
              },
              {
                category: "Testing",
                items: "Vitest",
              },
            ].map(({ category, items }) => (
              <div key={category} className="bg-white rounded-xl shadow-md p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-2">
                  {category}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Education ── */}
      <div id="education" className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-widest uppercase text-emerald-600">
            Education
          </p>
          <h2 className="mt-2 mb-8 text-3xl font-bold text-gray-900">
            Background
          </h2>
          <div className="flex flex-col gap-4">
            {[
              {
                degree: "Full Stack Web Development Certificate",
                school: "Vanderbilt University",
                location: "Nashville, TN",
                year: "2022",
              },
              {
                degree: "Bachelor of Science in Communications",
                school: "Missouri State University",
                location: "Springfield, MO",
                year: "2000",
              },
            ].map(({ degree, school, location, year }) => (
              <div
                key={degree}
                className="bg-white rounded-xl shadow-md p-5 flex items-start justify-between gap-4"
              >
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {degree}
                  </h3>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {school} &mdash; {location}
                  </p>
                </div>
                <span className="text-sm text-emerald-600 font-medium whitespace-nowrap">
                  {year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact ── */}
      <div id="contact" className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm tracking-widest uppercase text-emerald-600">
            Contact
          </p>
          <h2 className="mt-2 mb-2 text-3xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-gray-500 mb-10">
            Feel free to reach out via any of the links below.
          </p>
          <div className="flex gap-6 items-center justify-center">
            <Link
              href="https://www.linkedin.com/in/matthew-boisse-b3a296224/"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="rounded-full bg-white shadow-md p-5 cursor-pointer group-hover:scale-110 group-hover:text-emerald-600 transition-all ease-in duration-300">
                <FaLinkedinIn size={22} />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-emerald-600 transition-colors">
                LinkedIn
              </span>
            </Link>
            <Link
              href="https://github.com/Matt658041"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="rounded-full bg-white shadow-md p-5 cursor-pointer group-hover:scale-110 group-hover:text-emerald-600 transition-all ease-in duration-300">
                <FaGithub size={22} />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-emerald-600 transition-colors">
                GitHub
              </span>
            </Link>
            <Link
              href="mailto:matthewboisse@gmail.com"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="rounded-full bg-white shadow-md p-5 cursor-pointer group-hover:scale-110 group-hover:text-emerald-600 transition-all ease-in duration-300">
                <AiOutlineMail size={22} />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-emerald-600 transition-colors">
                Email
              </span>
            </Link>
          </div>
          <div className="flex justify-center mt-14">
            <Link href="/">
              <div className="rounded-full bg-white shadow-md p-4 cursor-pointer hover:scale-110 transition-all ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-emerald-600"
                  size={24}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
