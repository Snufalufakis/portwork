import { Link } from "@mui/material";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
const Home = () => {
  const [letterClass] = useState("text-animate");
  const nameArray = ["L", "e", "t", "'s"];
  const jobArray = ["d", "e", "v", "e", "l", "o", "p", "!"];

  return (
    <>
      <Grid container xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Grid className="">
            <h2 color="#fbfbf8">Michael Harris</h2>
            <h1>
              <span className={`${letterClass} _12`}>Hi,</span>
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2 color="#fbfbf8">Full Stack Developer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Home;
