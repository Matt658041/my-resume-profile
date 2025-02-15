import React from "react";
import Image from "next/image";
import html from "../public/html.png"
import css from "../public/css-image.png"
import js from "../public/js.png"
import node from "../public/node.png"
import react from "../public/React-icon.png"
import aws from "../public/aws image.png"
import git from "../public/git-png.png"

import {
  Box,
  Button,
  MobileStepper,
  Typography,
  Container,
  Paper,
} from "@mui/material";

const Skills = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Container >
        <div id="skills" className="w-full lg:h-screen p-2">
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
      </Container>
    </Box>
  );
};

export default Skills;
