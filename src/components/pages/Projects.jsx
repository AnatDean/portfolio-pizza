import React from "react";
import { rem } from "polished";
import { Title, SubTitle, Text } from "../atoms";

const Projects = () => (
  <section>
    <Title>Recent Projects</Title>
    <SubTitle fontSize={rem("35px")}>
      Resorts World Birmingham: Booking System
    </SubTitle>
    <Text>
      Stack: React, MobX, React Hooks, SCSS, Formik, Yup, GraphQL, Jest,
      CraftCMS , PHP,
    </Text>
    <Text>
      Rebuilt a complex client booking system front end with intuitive and fast
      UI. Involved building a CraftCMS data layer to allow the client to
      customise it to their needs and integration with the booking API which
      required a PHP proxy server as a relay between the API and frontend.
    </Text>
    <SubTitle fontSize={rem("35px")}>Curriculum Application:</SubTitle>
    <Text>
      Stack: React Hooks, React Testing Library, Jest, GraphQL, Firebase, OAuth,
      Styled Components, Github Apps
    </Text>
    <Text>
      Fully authenticated site to interact with existing curriculum resources
      and display them to students based on their current position on their
      course.
    </Text>
  </section>
);

export default Projects;
