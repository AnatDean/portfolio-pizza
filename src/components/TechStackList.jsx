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
    "React | Next JS",
    "MobX",
    "SCSS",
    "Styled Components",
    "Formik | Yup",
    "Figma",
  ],
  "Back End": [
    "PostgreSQL | MYSQL",
    "REST",
    "GraphQL",
    "Express JS",
    "MongoDB",
  ],
  "Dev Ops (currently learning)": ["Kubernetes", "CICD", "Cloud Provisioning"],
  Testing: [
    "TDD",
    "Jest",
    "Mocha",
    "Chai",
    "Supertest",
    "React Testing Library",
    "Cypress",
  ],
  Other: [
    "Agile",
    "Mentoring",
    "Public Speaking",
    "OAuth",
    "Firebase",
    "Github | Version Control",
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
  cursor: default;
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
