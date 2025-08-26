import { useEffect, useRef } from 'react';
import './skills.css';

import nodejsIcon from './assets/nodejs 3.svg';
import htmlIcon from './assets/html 3.svg';
import cssIcon from './assets/css (3).svg';
import javascriptIcon from './assets/javascript 3.svg';
import reactIcon from './assets/react 2.svg';
import viteIcon from './assets/vite 3.svg';
import dartIcon from './assets/dart 3.svg';
import flutterIcon from './assets/flutter 3.svg';
import gitIcon from './assets/git 3.svg';
import githubIcon from './assets/github 3.svg';

const SkillsTech = () => {
    const scrollContainerRef = useRef(null);

useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollSpeed = 1;

    const scroll = () => {
    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
    } else {
        scrollContainer.scrollLeft += scrollSpeed;
    }
    animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
    cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
    animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

return () => {
        cancelAnimationFrame(animationId);
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
}, []);

const techItems = [
    { name: 'Node.js', icon: nodejsIcon },
    { name: 'HTML5', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'Javascript', icon: javascriptIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Vite', icon: viteIcon },
    { name: 'Dart', icon: dartIcon },
    { name: 'Flutter', icon: flutterIcon },
    { name: 'Git', icon: gitIcon },
    { name: 'Github', icon: githubIcon },
];

const duplicatedItems = [...techItems, ...techItems];

return (
    <>
    <section className='skills-section'>
    <div className="skill-tech-container">
        <h2 className="skill-tech-title">My Programming Experience</h2>
        <div className="skill-tech-scroll" ref={scrollContainerRef}>
            <div className="skill-tech-inner">
                {duplicatedItems.map((item, index) => (
                <div key={index} className="tech-item">
                    <img src={item.icon} alt={item.name} className='tech-icon' />
                    <span span className="tech-name">{item.name}</span>
                </div>
            ))}
            </div>
        </div>
    </div>
    </section>
    </>
);
};

export default SkillsTech;