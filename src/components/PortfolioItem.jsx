import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
        <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-3 border-stone-900 dark:border-darkoutline rounded-md overflow-hidden"
        >
            <img
                src={imgUrl}
                alt="portfolio" 
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-darkproject mb-2 md:mb-3 font-semibold">
                    {title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-red-500">
                    {stack.map((item, index) => (
                        <span 
                            key={index} 
                            className="inline-block px-2 py-1 font-semibold border-3 border-stone-900 dark:border-darkoutline rounded-md"
                        >
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    );
}

export default PortfolioItem;
