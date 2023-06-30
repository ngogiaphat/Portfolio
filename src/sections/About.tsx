import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useRef} from "react";
import {useInView, motion} from "framer-motion";
function About(){
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view:", isInView);
  }, [isInView]);
  return(
    <motion.div className="about" id="about" initial="hidden" whileInView="visible" viewport={{once: true}} transition={{duration: 0.6}} 
			variants={{visible: {opacity: 1, y: -50}, hidden: {opacity: 0, y: 0}}}
    >
      <div className="title">
        <h2>
					About Me
				</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Ngo Gia Phat, and I am passionate about creating digital content for the web and test the program before golive.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing, developing and content writer high-quality solutions that delight our clients and exceed their expectations at{" "}
            <Link href="https://rapidops.com" className="link" target="_blank">
              Rapidops.
            </Link>
          </p>
          <p className="about-grid-info-text"></p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link className="link" target="_blank" href="https://frontendvita.com">
              FrontendVita,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML5</li>
            <li className="about-grid-info-list-item">XSL</li>
            <li className="about-grid-info-list-item">XML</li>
            <li className="about-grid-info-list-item">YML</li>
            <li className="about-grid-info-list-item">YAML</li>
            <li className="about-grid-info-list-item">UML</li>
            <li className="about-grid-info-list-item">CSS3</li>
            <li className="about-grid-info-list-item">SCSS</li>
            <li className="about-grid-info-list-item">SASS</li>
            <li className="about-grid-info-list-item">Bootstrap</li>
            <li className="about-grid-info-list-item">JQuery</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">React.js</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Vue.js</li>
            <li className="about-grid-info-list-item">Three.js</li>
            <li className="about-grid-info-list-item">Svelte.js</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Express.js</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/kishan.jpeg" alt="profile" fill/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;