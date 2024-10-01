import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <a
                    href="/portfolio/assets/resume_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-400 to-yellow-500 drop-shadow-md hover:stroke-white"
                >
                    View my Resume
                </a>
            </div>
        </div>
    );
}

export default Contact;
