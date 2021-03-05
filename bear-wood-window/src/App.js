import React from "react";

import Header from "./components/Header";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";

import pagoda from "./assets/Pagoda.JPG";
import kingst from "./assets/kingststation.JPG";
import joshgreen from "./assets/joshgreen.JPG";

import "./App.css";

const projects = [
  {
    img: joshgreen,
    title: "Josh Green Building",
    description: "Ay look I'm a building!",
    links: [
      { href: "https://github.com/jyates92/NoteTaker", title: "Progress" },
      { href: "https://givemesomenotes.herokuapp.com/", title: "Complete Work" },
    ],
  },
  {
    img: kingst,
    title: "King Street Station",
    description:
      "Hecka Homeless over here bud!",
    links: [
      { href: "https://github.com/jyates92/RandomNumberGen", title: "Progress" },
      { href: "https://jyates92.github.io/RandomNumberGen/", title: "Complete Work" },
    ],
  },
  {
    img: pagoda,
    title: "Pagoda",
    description:
      "Some sorta out doorsy place, how bout that.",
    links: [
      { href: "https://github.com/jyates92/Weather-App", title: "Progress" },
      { href: "https://jyates92.github.io/Weather-App/", title: "Complete Work" },
    ],
  },
];

const App = () => (
  <>
    <Header />
    <Bio />
    <Work projects={projects} />
    <Contact />
    <Footer />
  </>
);

export default App;
