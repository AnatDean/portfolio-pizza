import React from "react";
import { Title, Link, Text } from "../atoms";

const About = () => (
  <section>
    <Title>About Me</Title>
    <Text>
      Full Stack Developer at{" "}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.verse.co.uk/"
      >
        Verse
      </Link>
    </Text>
    <Text>
      I build projects using ReactJS frontend and backends using any or all of
      SQL, PHP, ExpressJS, Craft CMS
    </Text>
    <Text>
      On a standard day you'll find me collaborating in a cross functional team,
      attending standups and meetings, demoing work to clients and developing
      unit tested code.
    </Text>
    <Text>
      I am currently teaching myself TypeScript and am on a part time DevOps
      course with{" "}
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.techreturners.com/"
      >
        Tech Returners.
      </Link>
    </Text>
    <Text> Oh, and I do love a good refactor.</Text>
  </section>
);

export default About;
