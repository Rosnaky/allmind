import { ArrowRightIcon, CircleStackIcon } from "@heroicons/react/16/solid";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image"

const CaseStudy = () => {
    return (
        <div className="text-white font-light py-12 bg-gradient-to-b from-[var(--dark-blue)] to-[var(--dark-blue-green)]">
            <div className="text-center text-3xl pb-8">How AMD Global Telemedicine Reduced Software Release Effort by 89%</div>
            
            <div className="bg-[var(--dark-blue-green)] rounded-sm mx-4 pl-8">
                <div className="text-xl pt-8">
                    Chip McIntosh
                </div>
                <div className="text-md">
                    Chief Innovation Officer
                </div>
                <div className="w-50 pt-4">
                    <Image                                    
                        src="/amd.png"
                        alt="amd logo"
                        width={1600}
                        height={900}
                        objectFit="contain"
                    />
                </div>
                <div className="text-md text-balance py-4 font-thin opacity-70">
                    Massdriver’s platform has revolutionized our approach to infrastructure, saving us 89% of the time spent managing infrastructure. Our operation could upscale by an order of magnitude, if not two, and we would not be in crisis mode to hire somebody to manage infrastructure.
                </div>
            </div>

            <div className="text-md pt-4 pl-4 font-thin opacity-70">
                Explore how AMD Global Telemedicine revolutionized their software deployment process, cutting down release effort by 89% with Massdriver's cloud solutions. This case study is a must-read for those aiming to scale efficiently and enhance team productivity through innovative cloud technology. Download now for key insights.
            </div>
            <div className="flex flex-row text-md pt-4 pl-4 font-thin opacity-70">
                - Reduced software release effort by 89% with Massdriver's cloud solutions.
            </div>
            <div className="flex flex-row text-md pt-4 pl-4 font-thin opacity-70">
                - Managed a 100x workload surge without increasing engineering staff.
            </div>
            <div className="flex flex-row text-md pt-4 pl-4 font-thin opacity-70">
                - Improved team collaboration and productivity ninefold.
            </div>

            <div className="flex flex-row mt-16 ml-4">
                <button className="text-white bg-[var(--deep-sky-blue)] bg-gradient-to-r from-[rgba(0,123,255,0.5)] to-[var(--deep-sky-blue)] rounded-sm">
                    <a 
                        href="https://www.massdriver.cloud/case-studies/how-amd-global-telemedicine-reduced-software-release-effort-by-89-with-massdriver" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row mx-6 my-2 block h-full"
                    >
                        View Case Study
                        <ArrowRightIcon className="pl-1 mt-0.5 h-5 w-5"/>
                    </a>
                </button>
            </div>

        </div>
    );
}

export default CaseStudy;