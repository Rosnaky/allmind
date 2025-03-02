import { ArrowRightIcon } from "@heroicons/react/16/solid";


const InfrastructureTile = () => {

    return (
        <div className="text-white font-light py-12 bg-gradient-to-b from-[var(--dark-blue)] to-[var(--dark-blue-green)]">
            <div className="text-center text-3xl">Infrastructure at the Speed of Thought</div>
            <div className="text-center text-xl pt-4 mx-24">Enable developer self-service without risking compliance, security, cost, or reliability.</div>
            <div className="flex flex-row p-4 items-center justify-center m-4">
            
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-col text-white w-2/5 text-left mr-8">
                        <div className="text-2xl font-normal w-full">
                            Cloud Service Catalog
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                        Your DevOps teams have a lot on their plate, don&apos;t lose another great teammate to burnout.
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                        Enable developers to self-serve cloud infrastructure from approved IaC templates in a central catalog.
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                        Developers drag, connect, and deploy. No more last minute Jira tickets to the DevOps team.
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-3/5">
                        <video
                            preload="auto"
                            controls
                            >
                            <source src="/cloudservice.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                <div className="flex flex-row mt-20">
                    <div className="flex flex-col items-center w-3/5">
                        <video
                            preload="auto"
                            controls
                            >
                            <source src="/cloudservice.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="flex flex-col text-white w-2/5 text-left m-8">
                        <div className="text-2xl font-normal w-full">
                            Cost & Health Insights
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                        Get a clear view of your cloud&apos;s health and costs right where your developers manage their infrastructure.
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                        With real-time insights, you can make proactive adjustments, ensuring systems are efficient and cost-effective.
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                        Never get caught with a surprise cloud bill again.
                        </div>
                    </div>
                    
                </div>

                <div className="flex flex-row mt-20">
                    <div className="flex flex-col text-white w-2/5 text-left mr-8">
                        <div className="text-2xl font-normal w-full">
                            Inventory & Audit Records
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                            Get instant visibility into every asset, streamline your workflows, and keep your projects moving forward efficiently.
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                            Say goodbye to the chaos of scattered resources and hello to seamless, organized control.
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                            No more hunting for assets or piecing together the puzzle of your cloud infrastructure.
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-3/5">
                        <video
                            preload="auto"
                            controls
                            >
                            <source src="/cloudservice.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>

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
        </div>
    );

}

export default InfrastructureTile;