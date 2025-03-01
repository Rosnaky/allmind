import { ArrowRightIcon } from "@heroicons/react/16/solid";

const TitleTile = () => {
    return (
        <div className="items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-host-grotesk)]">
            <main className="flex flex-col gap-8 items-center">
                <div id="title-tile" className="flex flex-col items-center text-center text-balance">
                    {// TODO: Add bg image
                    }
                    <h1 className="text-5xl pt-12 text-[var(--dark-gray)] ">DevOps Without the Red Tape</h1>
                    <div className="text-2xl pt-8 font-[family-name:var(--font-satoshi)] font-light">
                    <h2>At Massdriver, we believe in prevention, not permission.</h2>
                    {// TODO: add ops hover thing
                        }
                    <h2 className="pt-8">Our platform lets "ops" teams encode their expertise and your organization’s non-negotiables into preapproved self-service infrastructure powered by the IaC tools you already know. Massdriver—Fast by default. Safe by design.</h2>
                    <h2 className="pt-8">Massdriver—Fast by default. Safe by design.</h2>
                    </div>
                </div>
                <div className="flex flex-row gap-6">
                    <button className="bg-white text-[var(--deep-sky-blue)] rounded-sm border border--[var(--deep-sky-blue)]">
                        <a 
                            href="https://www.massdriver.cloud/demo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mx-6 my-2 block h-full"
                        >
                            See a demo
                        </a>
                    </button>
                    <button className="text-white bg-[var(--deep-sky-blue)] bg-gradient-to-r from-[rgba(0,123,255,0.5)] to-[var(--deep-sky-blue)] rounded-sm border border--[var(--deep-sky-blue)]">
                        <a 
                            href="https://app.massdriver.cloud/register" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row mx-6 my-2 block h-full"
                        >
                            Start free trial
                            <ArrowRightIcon className="pl-1 mt-0.5 h-5 w-5"/>
                        </a>
                    </button>
                </div>
            </main>
        </div>
    );
}

export default TitleTile;