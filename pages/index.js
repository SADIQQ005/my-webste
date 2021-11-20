import { Box } from "@chakra-ui/react";
import About from "../layouts/About";
import Contact from "../layouts/Contact";
import Portfolio from "../layouts/Portfolio";
import Welcome from "../layouts/Welcome";

export default function Home() {
  return (
    <>
      <Box>
        <Welcome />
        <About />
        <Portfolio />
        <Contact />
      </Box>
    </>
  );
}
