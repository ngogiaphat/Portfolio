import React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FiGithub, FiExternalLink} from "react-icons/fi";
function Projects(){
  const projectsData = [
    {
      image: "",
      projectName: "IUHCoder",
      projectLink: "https://www.ojiuhcoder.com",
      projectDescription: "IUHCoder is an automatic code grading system developed using open-source DMOJ. The product-oriented group will provid a solution for teachers to organize testing and assessment of student's programming ability and share knowledge among student to create a bridge between high school students and the Industrial University of Ho Chi Minh City",
      projectTech: [
				"Git",
        "Figma",
				"Github",
				"DJango",
				"JavaScript",
				"WSL",
				"MongoDB",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];
  return(
    <div className="projects" id="work">
      <motion.div className="title" initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 0.6}} variants={{visible: {opacity: 1, y: -50}, hidden: {opacity: 0, y: 0}}}>
        <h2>
					Some Things I’ve Built
				</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({image, projectDescription, projectLink, projectExternalLinks, projectName, projectTech}) => {
            return(
              <motion.div className="project" key={projectName} initial="hidden" whileInView="visible" 
								viewport={{once: true}} transition={{duration: 0.6}} variants={{visible: {opacity: 1, y: -50},  hidden: {opacity: 0, y: 0}}}
							>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100}/>
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">
										Featured Project
									</p>
                  <h3 className="project-info-title">
										{projectName}</h3>
                  <div className="project-info-description">
                    <p>
											{projectDescription}
										</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link href={projectExternalLinks.github} className="project-info-links-item-link">
                        <FiGithub/>
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link href={projectExternalLinks.externalLink} className="project-info-links-item-link">
                        <FiExternalLink/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
};
export default Projects;