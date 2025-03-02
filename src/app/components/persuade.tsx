"use client"

import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Persuade = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className={`text-center p-4 text-white bg-gradient-to-r to-[var(--dark-sky-blue)] from-[var(--deep-sky-blue)] rounded-sm cursor-pointer transition-all duration-300 ease-in-out ${isExpanded ? "h-auto py-6" : "h-12"}`}
            onClick={() => setIsExpanded(true)}
        >
            {isExpanded ? 
            
            (
            <div className="flex flex-row justify-between ml-6">
                <div className="flex flex-col items-start">
                    <div className="text-lg">
                        Cut the red tape.
                    </div>
                    <div className="text-sm">
                    Download the Massdriver pitch deck to convince them it&apos;s time for true developer self-service.
                    </div>
                </div>
                <ArrowDownTrayIcon width={50} height={50} className="mr-4"/>
            </div>
            )
            
            : "Need help persuading your manager?"}
        </div>
    );
};

export default Persuade;
