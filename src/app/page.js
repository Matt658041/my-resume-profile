"use client";

import React, { useState } from "react";
import Image from "next/image";
import nyImage from "../../public/github-profile.jpg";
import html from "../../public/html.png";
import css from "../../public/css-image.png";
import js from "../../public/js.png";
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
import MobileImage from "../../public/Medscan test history screen shot.png";
import MedscanTest from "../../public/Medscan Map screen shot.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Navbar from "../../components/Navbar";
import SolarUHomepage from "../../public/IMG_749489934D7D-1.jpeg";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % steps.length);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + steps.length) % steps.length
    );
  };

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const steps = [
    {
      label: "Medscan Map",
      component: (
        <div className="relative inline-block" onClick={handleImageClick}>
          <Image src={MedscanMap} alt="Medscan Map" width={400} height={400} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded text-center pointer-events-none">
            Click to expand
          </div>
        </div>
      ),
      modal: MedscanMapDash,
    },
    {
      label: "Solar U",
      component: (
        <div className="relative inline-block" onClick={handleImageClick}>
          <Image src={SolarUHomepage} alt="Solar U" width={400} height={400} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded text-center pointer-events-none">
            Click to expand
          </div>
        </div>
      ),
      modal: SolarU,
    },
    {
      label: "Medscan Mobile App",
      component: (
        <div className="relative inline-block" onClick={handleImageClick}>
          <Image
            src={MobileImage}
            alt="Medscan Mobile App"
            width={400}
            height={400}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded text-center pointer-events-none">
            Click to expand
          </div>
        </div>
      ),
      modal: MedscanAppModal,
    },
    {
      label: "Mlab App",
      component: (
        <div className="relative inline-block" onClick={handleImageClick}>
          <Image src={Mlab} alt="Mlab App" width={400} height={400} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded text-center pointer-events-none">
            Click to expand
          </div>
        </div>
      ),
      modal: MlabApp,
    },
    {
      label: "Medscan Dash",
      component: (
        <div className="relative inline-block" onClick={handleImageClick}>
          <Image
            src={MedscanTest}
            alt="Medscan Dash"
            width={600}
            height={600}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded text-center pointer-events-none">
            Click to expand
          </div>
        </div>
      ),
      modal: MedscanDashModal,
    },
  ];

  return (
    <>
      <Navbar />
      <div id="about" className="w-full py-5 flex items-center">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xl tracking-widest uppercase text-[#12113a]">
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-white">
              My journey into software development was driven by a desire to
              create better, more functional websites than what I was
              encountering. This passion motivated me to complete a Full Stack
              Web Development Bootcamp at Vanderbilt University, where I built a
              strong foundation in modern web technologies. From there, I
              pursued self-guided learning, consistently pushing myself to
              master new skills and technologies. This commitment to growth
              quickly led to securing an entry-level developer position, which I
              rapidly outgrew by consistently exceeding expectations. In my
              current role as a developer for the Mobile Health for Global
              Health (MHGH) research group at Vanderbilt University, I have led
              the frontend development of several impactful projects, including
              Medscan and mLab+. Medscan is a web dashboard and mobile health
              application that supports large-scale epidemiology studies in
              Kenya, while mLab+, developed in collaboration with Columbia
              University, is a mobile application facilitating HIV and Syphilis
              testing. My software is directly used by research participants and
              public health officials, ensuring that these projects have
              real-world impact and consequences. My responsibilities included
              building interactive, user-friendly interfaces, optimizing data
              visualization, and ensuring seamless integration with backend
              services. These projects required close collaboration with
              interdisciplinary teams, rapid learning of new technologies, and
              the application of best practices in Agile development.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full h-auto m-auto rounded-xl p-4 shadow-xl hover:scale-105 ease-in duration-300 flex justify-center items-center">
              <Image
                className="rounded-xl"
                src={nyImage}
                alt="GitHub Profile"
                width={440}
                height={380}
              />
            </div>
          </div>
        </div>
      </div>
      <div id="skills" className="w-full lg:h-screen p-2 pt-0 ">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#01010e]">
            Skills
          </p>
          <h2 className="py-4">What I Can Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={html} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={css} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={js} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={node} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Node</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={react} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={react} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React Native</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={aws} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>AWS</h3>
                </div>
              </div>
            </div>

            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={git} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Git</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="w-full">
        <div className="max-w-7xl mx-auto">
          <p className="text-xl tracking-widest uppercase text-[#01010e]">
            Projects
          </p>
          <h2 className="text-4xl py-4"></h2>
          <div className="flex flex-col items-center mb-4">
            <div className="mb-4 cursor-pointer">
              {!modalOpen && steps[activeStep].component}
              {modalOpen &&
                React.createElement(steps[activeStep].modal, {
                  modalOpen: modalOpen,
                  setModalOpen: setModalOpen,
                })}
            </div>
            <div className="flex justify-between w-full max-w-md">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
                onClick={() => {
                  handleBack();
                  setModalOpen(true);
                }}
                disabled={activeStep === 0}
              >
                Back
              </button>
              <div className="flex space-x-2">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === activeStep ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
                onClick={() => {
                  handleNext();
                  setModalOpen(true);
                }}
                disabled={activeStep === steps.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
       <div id="contact" className="max-w-7xl mx-auto">
          <p className="text-xl tracking-widest uppercase mt-10 text-[#01010e]">
            Contact
          </p>
      <div className="flex gap-x-5 items-center justify-between py-4 max-w-[330px] m-auto ">
        <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <Link href="https://www.linkedin.com/in/matthew-boisse-b3a296224/">
            <FaLinkedinIn
              
              href="www.linkedin.com/in/matthew-boisse-b3a296224"
            />
          </Link>
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <Link href="https://github.com/Matt658041">
            <FaGithub />
          </Link>
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <Link href="mailto:matthewboisse@gmail.com">
            <AiOutlineMail />
          </Link>
        </div>
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <Link href="mailto:matthewboisse@gmail.com">
            <BsFillPersonLinesFill />
          </Link>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp
              className="m-auto text-[#213571]"
              size={30}
            />
          </div>
        </Link>
        </div>
        </div>
    </>
  );
}
