import React from "react";

import api from "../../assets/icons/api.svg";
import backend from "../../assets/icons/backend.svg";
import algo from "../../assets/icons/algo.svg";
import computer from "../../assets/icons/computer.svg";
import repair from "../../assets/icons/repair.svg";
import puzzle from "../../assets/icons/puzzle.svg";

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about: [
      "I can build beautiful and scalable components using",
      <strong> HTML, CSS and React.js </strong>,
    ],
  },
  {
    icon: repair,
    title: "Backend  Development",
    about: ["handle database, server, using",
    <strong> Express and Mongodb </strong>,]
  },
  {
    icon: api,
    title: "API Development",
    about: [
      "I can develop robust REST API using",
      <strong key={1}> Expressjs</strong>,
    ],
  },
  {
    icon: algo,
    title: "Competitive Coder",
    about: "consistent problem solver in HackerRank and other platforms",
  },
];

export default skills;
