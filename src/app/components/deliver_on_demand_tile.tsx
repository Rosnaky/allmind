import { ArrowRightIcon } from "@heroicons/react/16/solid";
import VideoEmbed from "./video_embed";

const DeliverOnDemandTile = () => {

    return (
        <div className="bg-white py-12 mx-8">
            <div className="text-black font-light text-3xl lg:text-4xl text-center">
                Deliver On-Demand, Self-Service of Standardized Infrastructure
            </div>
            <div className="relative pb-[56.25%] my-8 mx-4">
                <VideoEmbed videoUrl="https://www.youtube.com/embed/Zd2SSE-iT3g"/>
            </div>
            
            <div className="flex flex-row justify-center">
                <button className="text-white bg-[var(--deep-sky-blue)] bg-gradient-to-r from-[rgba(0,123,255,0.5)] to-[var(--deep-sky-blue)] rounded-sm border border--[var(--deep-sky-blue)]">
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
            
        </div>
    );
}

export default DeliverOnDemandTile;