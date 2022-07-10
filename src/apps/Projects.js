import AwesomeSlider from "react-awesome-slider";
import styles from "../../styles/apps/Projects.module.scss";
import React, { useState, useEffect } from "react";
import { ProjectSlide } from "../atoms/ProjectSlide";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });

    return () => {};
  }, []);
  return (
    <div>
      <AwesomeSlider fillParent bullets={false} organicArrows mobileTouch cssModule={[styles]} media={[]}>
        {projects.map(({ name, href, description, img }, i) => {
          return ProjectSlide(name, description, href, img, i);
        })}
      </AwesomeSlider>
    </div>
  );
};

export default Projects;
