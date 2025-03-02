import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-[var(--white-smoke-60)] text-black my-12">
            <div className="flex flex-row justify-between items-start mx-12">
                <div className="flex flex-col gap-4">
                    <Image
                        src="/massdriver.svg"
                        alt="massdriver logo"
                        width={200}
                        height={200}
                    />
                    <button className="bg-white text-[var(--deep-sky-blue)] rounded-sm border border--[var(--deep-sky-blue)]">
                        <a 
                            href="https://www.massdriver.cloud/demo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mx-6 my-2 block h-full"
                        >
                            System Operational
                        </a>
                    </button>
                    <div className="flex flex-row justify-between">
                        <Image
                            src="/slack1.svg"
                            alt="slack logo"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/youtube1.svg"
                            alt="slack logo"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/x.svg"
                            alt="slack logo"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/linkedin.svg"
                            alt="slack logo"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/github.svg"
                            alt="slack logo"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-black text-bold">
                        Marketplace
                    </div>
                    <div className="opacity-70 text-light gap-2">
                        <div>AWS</div>
                        <div>Azure</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-black text-bold">
                        Templates
                    </div>
                    <div className="opacity-70 text-light gap-2">
                        <div>AWS</div>
                        <div>GCP</div>
                        <div>Azure</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-black text-bold">
                        Solutions
                    </div>
                    <div className="opacity-70 text-light gap-2">
                        <div>Developer Self Service</div>
                        <div>OpenTofu for Enterprise</div>
                        <div>Platform Engineering Accelerator</div>
                        <div>Cost Management</div>
                    </div>
                    <div className="text-black text-bold mt-6">
                        Comparisons
                    </div>
                    <div className="opacity-70 text-light gap-2">
                        <div>Developer Self Service</div>
                        <div>OpenTofu for Enterprise</div>
                        <div>Platform Engineering Accelerator</div>
                        <div>Cost Management</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-black text-bold">
                        Company
                    </div>
                    <div className="opacity-70 text-light gap-2">
                        <div>About Us</div>
                        <div>Jobs</div>
                        <div>News</div>
                        <div>Contact us</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-black text-bold">
                        Resources
                    </div>
                    <div className="opacity-70 text-light gap-2">
                        <div>Pricing</div>
                        <div>Blog</div>
                        <div>Docs</div>
                        <div>Webinars</div>
                        <div>Pitch Deck</div>
                        <div>FAQ</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
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
                    <div className="flex flex-row justify-between">
                        <div className="w-20">
                            <Image
                                src="/aws.png"
                                alt="aws logo"
                                width={1000}
                                height={1000}
                                objectFit="contain"
                                />
                        </div>
                        <div className="w-20">
                            <Image
                                src="/gcp.png"
                                alt="gcp logo"
                                width={1000}
                                height={1000}
                                objectFit="contain"
                                />
                        </div>
                    </div>
                    <div className="w-20">
                        <Image
                            src="/salesforce.svg"
                            alt="salesforce logo"
                            width={1000}
                            height={1000}
                            objectFit="contain"
                            />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;