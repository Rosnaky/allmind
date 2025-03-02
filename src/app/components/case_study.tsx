import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image"
import Podcast from "./podcast";
import Testimony from "./testimony";

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
                Explore how AMD Global Telemedicine revolutionized their software deployment process, cutting down release effort by 89% with Massdriver&apos;s cloud solutions. This case study is a must-read for those aiming to scale efficiently and enhance team productivity through innovative cloud technology. Download now for key insights.
            </div>
            <div className="flex flex-row text-md pt-4 pl-4 font-thin opacity-70">
                - Reduced software release effort by 89% with Massdriver&apos;s cloud solutions.
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
            <Podcast/>
            <Testimony/>

            <div className="flex mx-auto w-1/2 text-3xl text-white pt-16 text-center text-balanced">
            We&apos;re confident Massdriver will transform how your team operates. Are you ready to simplify?
            </div>

            <div className="flex flex-row justify-center gap-4">
                
                <div className="flex flex-row justify-center mt-16">
                    <button className="text-white bg-[var(--deep-sky-blue)] bg-gradient-to-r from-[rgba(0,123,255,0.5)] to-[var(--deep-sky-blue)] rounded-sm">
                        <a 
                            href="https://www.massdriver.cloud/demo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row mx-6 my-2 block h-full"
                        >
                            See a demo
                            <ArrowRightIcon className="pl-1 mt-0.5 h-5 w-5"/>
                        </a>
                    </button>
                </div>

                <div className="flex flex-row justify-center mt-16 border border-white rounded-sm">
                    <button className="text-white rounded-sm">
                        <a 
                            href="https://app.massdriver.cloud/register" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row mx-6 my-2 block h-full"
                        >
                            See a demo
                            <ArrowRightIcon className="pl-1 mt-0.5 h-5 w-5"/>
                        </a>
                    </button>
                </div>

                <div className="flex flex-row justify-center mt-16 border border-white rounded-sm">
                    <button className="text-white rounded-sm">
                        <a 
                            href="https://share.hsforms.com/1iSuR5rAqQ1O-XHRHeaXbDAd5gi0?__hstc=185991670.6d8d7ca7ce50445347ded0d62ee66db6.1729896147338.1734039318375.1734048514477.39&__hssc=185991670.1.1734048514477&__hsfp=1110032445" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row mx-6 my-2 block h-full"
                        >
                            Get our Newsletter
                            <ArrowRightIcon className="pl-1 mt-0.5 h-5 w-5"/>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CaseStudy;