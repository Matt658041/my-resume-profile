import Image from "next/image";
import About from "../../components/About";
import Skills from "../../components/Skills";
import {Grid2} from "@mui/material";
import { Box, Container, Typography, Paper } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container sx={{ marginTop: 5, marginBottom: 1 }}>
        <Grid2
          container
          spacing={1} // Reduced spacing
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }} // Centering components
        >
          <About />
          <Skills />
        </Grid2>
      </Container>
    </>
  );
}
