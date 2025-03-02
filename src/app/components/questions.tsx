import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image"

const Questions = () => {
    return (
        <div className="pb-12 bg-white">
            <div className="text-4xl font-[family-name:var(--font-satoshi)] pt-12 flex justify-center">
                Still have questions?
            </div>
            <div className="text-md opacity-90 font-light font-[family-name:var(--font-satoshi)] pt-6 flex justify-center">
                Check out our FAQs or ping us directly in our community Slack
            </div>

            <div className="flex flex-row items-center justify-center pt-6 gap-8">
                <button className="text-white bg-[var(--deep-sky-blue)] bg-gradient-to-r from-[rgba(0,123,255,0.5)] to-[var(--deep-sky-blue)] rounded-sm border border--[var(--deep-sky-blue)]">
                    <a 
                        href="https://www.massdriver.cloud/faq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row mx-6 my-2 block h-full"
                    >
                        View the FAQ
                        <ArrowRightIcon className="pl-1 mt-0.5 h-5 w-5"/>
                    </a>
                </button>
                <button className="flex flex-row items-center text-white rounded-sm border border--[var(--deep-sky-blue)]">
                    <Image
                        src="/slack.svg"
                        width={20}
                        height={20}
                        alt="slack logo"
                    />
                    <a 
                        href="https://join.slack.com/t/massdrivercommunity/shared_invite/zt-1sxag35w2-eYw7gatS1hwlH2y8MCmwXA" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row ml-2 mr-6 my-2 block h-full text-black"
                    >
                        Join us on Slack
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Questions;