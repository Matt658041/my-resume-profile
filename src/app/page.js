import Image from "next/image";
import About from "../../components/About";
import { Grid } from "@mui/material/Grid2";
import { Box, Container, Typography, Paper } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container  sx={{ marginTop: 5, marginBottom: 1 }}>
      
            <About />
       
      </Container>
    </>
  );
}
