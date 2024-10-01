import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-darktitle mb-1 md:mb-3 font-bold dark:text-shadow-glow">
                Matthew Smith
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium dark:text-darklabel">Software Engineer & Web Developer</p>
            <p className="text-med max-w-xl mb-6 font-bold">
                I'm a Computer Science graduate from UMBC. I have strengthened skills, particularly with languages like Python, Java, JS, and C++. During my studies, I took important classes such as Data Structures, Algorithms, and other key courses. I have developed projects related to OOP, memory allocation, data structures, algorithms, machine learning, and web-based applications. I'm passionate about coding and eager to start my career in software development!
            </p>
        </div>
    );
}

export default Intro;
