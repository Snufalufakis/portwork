import * as React from "react";
import { useState } from "react";
import "./index.css";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import oldPortfolio from "./../../assets/images/protofolio.png";
import generator from "./../../assets/images/generator.png";
import wds from "./../../assets/images/wds.png";
import pokewar from "./../../assets/images/pokewar.png";
import offload from "./../../assets/images/offload.png";
import portfolio from "./../../assets/images/portfolio3.0.png";
import Resume from "./../../assets/other/LinkedIn resume-1.png";
// material
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";
import Modal from "@mui/material/Modal";

const About = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,

    img: {
      width: "152%",
      height: "200%",
    },
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [letterClass] = useState("text-animate");
  return (
    <>
      <Grid className="text-zone" item xs={12} md={4}>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          />
        </h1>
        <Button onClick={handleOpen}>Resume</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={Resume} alt="resume" />
          </Box>
        </Modal>
        <p>
          {" "}
          My name is Michael Harris I'm 34 and I’m from the San Francisco Bay
          Area. I have been coding for 6 months
        </p>
        <p>
          Currently, I am studying at UC Berkeley Extension to gain more
          experience in the world of developing and designing websites.
        </p>
        <p>
          I love learning new things, writing code that works, solving problems
          with creative solutions and taking vacations. If you are interested in
          talking more about my resume please email me directly
        </p>
      </Grid>

      <Box
        className="box"
        xs={12}
        md={4}
        style={{ textAlign: "-webkit-center" }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="Pokemon card battle"
            height="14"
            image={pokewar}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pokemon War
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A friendly Pokemon battle thats involves two players battening it
              out with the original 151 pokemon
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://github.com/dnsnguy08/Pokemon-Battle"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            <Link
              href="https://dnsnguy08.github.io/Pokemon-Battle/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="image of a work day schedule"
            height="140"
            image={wds}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Work Day Scheduler
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Need a Work Day Scheduler look no further!
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://snufalufakis.github.io/Work-Schedule/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="image of a portfolio"
            height="140"
            image={oldPortfolio}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              First Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              my very first portfolio
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://snufalufakis.github.io/Homework-2/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="image or a password generator"
            height="140"
            image={generator}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Password Generator
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Generate a random password
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://snufalufakis.github.io/Homework3/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="offload website screenshot"
            height="140"
            image={offload}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              OFFload
            </Typography>
            <Typography variant="body2" color="text.secondary">
              An app that allowed users to post junk they are looking to get rid
              of. The intention is for other users to see the post and want the
              item and then go and retreive it from the poster
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://github.com/ayeh6/Offload"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            <Link
              href="https://yeh-offload.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: "240px", objectFit: "fill" }}
            component="img"
            alt="portfolio"
            height="14"
            image={portfolio}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Updated Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Currently a work in progress Portfolio, some elements where used
              from it for this.
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              href="https://github.com/Snufalufakis/Keep-Your-Eyes-Peeled"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="small">
                <FontAwesomeIcon icon={faGitAlt} />
              </Button>
            </Link>
            {/* <Link>
              <Button size="small">
                <FontAwesomeIcon icon={faHtml5} />
              </Button>
            </Link> */}
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default About;
