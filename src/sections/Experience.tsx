import Link from "next/link";
import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";
function Experience(){
	const [selected, setSelected] = useState(0);
	useEffect(() => {
		const transformSelected = () => {
			const underline = document.querySelector<HTMLElement>(".underline");
			underline!.style.top = `${selected * 2.5}rem`;
		};
		transformSelected();
	}, [selected]);
	const experiences = [
		{
			name: "Industrial University of Ho Chi Minh City",
			role: "Student",
			url: "https://www.iuh.edu.vn",
			start: "August 2019",
			end: "Present",
			shortDescription: [
				"I'm currently a student at IUH, my majoring is Information Technology.", "Until the present, i have not graduated yet", 
				"And now, I'm learn, reasearch and practice at an Lab at school.", 
			],
		},
		{
			name: "Programming Lab - H3.2 Lab", 
			role: "Core member",
			url: "processing",
			start: "August 2019",
			end: "Present",
			shortDescription: [
				"I'm learn, reasearch and practice at an Lab at school.",
				"My current major roles in Lab projects include:", 
					"Survey users, write development and user manuals and advertise and test the product before it goes live.", 
					"While the product has been put into use, defects must still be checked and reported with a clear and precise description of the flaws for the development team to understand in order to resolve them.",
					"In most Lab projects, I have used various MERN stack technologies, including Figma, Postman, Notion.", "Supporting new students in basic programming.",
					"I've also managed a small team that includes, UI/UX Developers, Testing and Content Creator.",
			],
		},
    {
      name: "IUHCoder",
      role: "Tester, Content Creator",
      url: "https://www.ojiuhcoder.com",
      start: "October 2022",
      end: "Present",
      shortDescription: [
				"My current major roles in projects include:", 
					"Survey users, write development and user manuals and advertise and test the product before it goes live.", 
					"While the product has been put into use, defects must still be checked and reported with a clear and precise description of the flaws for the development team to understand in order to resolve them.",
					"Throughout in this project, I've utilized various MERN stack technologies, including Figma, Postman, Notion.", 
					"I've also managed a small team that includes, UI/UX Developers, Testing and Content Creator.",
			],
    },
  ];
	return(
		<motion.div className="experience" id="experience" initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 0.6}} variants={{visible: {opacity: 1, y: -50}, hidden: {opacity: 0, y: 0}}}>
      <div className="title">
        <h2>
					Where I&apos;ve Worked
				</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((experiences, index) => {
            return(
              <li className={`exp-slider-item ${index === selected && "exp-slider-item-selected"}`} onClick={() => setSelected(index)} key={experiences.name}>
                <span>
									{experiences.name}
								</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>
								{experiences[selected].role}
							</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map((description, index) => (
								<li key={index} className="exp-details-list-item">
									{description}
								</li>)
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
	);
};
export default Experience;