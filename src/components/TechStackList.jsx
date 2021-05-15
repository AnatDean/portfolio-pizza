import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const stacks = {
  Languages: [
    "JavaScript | NodeJS | TypeScript",
    "S/CSS",
    "HTML",
    "SQL",
    "Ruby",
  ],
  "Front End": [
    "ReactJS",
    "Cypress",
    "React Testing Library",
    "Styled Components",
    "Flutter",
    "Figma",
  ],
  "Back End": [
    "PostgreSQL / MYSQL",
    "REST",
    "GraphQL",
    "Express JS",
    "MongoDB",
  ],
  "Dev Ops LEARNING": ["Kubernetes", "CICD", "Cloud Provisioning"],
  Other: [
    "Agile",
    "Mentoring",
    "Public Speaking",
    "OAuth",
    "Firebase",
    "Github | Version Control",
    "TDD | Jest | Mocha | Chai | Supertest | React Testing Library",
  ],
};

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  line-height: 200%;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: ${rem("30px")};
  @media (max-width: 640px) {
    font-size: ${rem("28px")};
    flex-flow: row wrap;
  }
`;

const ListItem = styled.li`
  @media (max-width: 640px) {
    margin-right: ${rem("16px")};
  }
`;

const TechList = ({ display }) => {
  const section = stacks[display];
  return (
    <List>
      {section.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </List>
  );
};

export default TechList;
