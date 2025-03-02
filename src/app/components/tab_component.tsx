"use client";

import { useEffect, useState } from "react";
import Image from "next/image"

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("code");
    
    const [title, setTitle] = useState("");
    const [descriptionTop, setDescriptionTop] = useState("");
    const [descriptionBottom, setDescriptionBottom] = useState("");
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        if (activeTab === "code") {
            setTitle("Ops Teams Write IaC");
            setDescriptionTop("DevOps and Platform teams use the infrastructure-as-code tools they know, such as Terraform / OpenTofu, Helm, or CloudFormation, and package them into use-case-specific modules with your policy tooling built in.");
            setDescriptionBottom("Your IaC is no longer just config, its a functional software asset. Policy and cost tools are embedded, cutting down maintenance for Ops teams.");
            setImage("/code.webp");
        } else if (activeTab === "publish") {
            setTitle("Ops Teams Publish Modules");
            setDescriptionTop("Bundled modules are published in the Massdriver Service Catalog, where developers can easily discover supported cloud services and applications with your organization's compliance, security, and guardrails in place.");
            setDescriptionBottom("A central repository for provisioning, policy, and cost controls of your cloud resources.");
            setImage("/publish.webp");
        } else if (activeTab === "diagram") {
            setTitle("Devs Diagram to Provision");
            setDescriptionTop("Developers diagram what they want and your IaC modules are used to provision. Developers don't have to copy Helm Charts or Terraform Modules. They don't have brittle IaC pipelines. Instead, Massdriver uses your modules to provision and builds ephemeral CI/CD pipelines behind the scenes based on the tooling in your modules.");
            setDescriptionBottom("Say goodbye to 100's of brittle IaC pipelines.");
            setImage("/diagram.webp");
        }
    }, [activeTab]);

    return (
        <div className="flex justify-center mx-4 pb-12">
            <div className="flex flex-col w-full items-center border border-gray-500/25">
                <div className="flex gap-20 text-white p-2">
                    <button
                        className={`flex text-center p-2 ${activeTab === "code" ? "opacity-100" : "opacity-40"}`}
                        onClick={() => setActiveTab("code")}
                    >
                        1. Code
                    </button>
                    <button
                        className={`flex text-center p-2 ${activeTab === "publish" ? "opacity-100" : "opacity-40"}`}
                        onClick={() => setActiveTab("publish")}
                    >
                        2. Publish
                    </button>
                    <button
                        className={`flex text-center p-2 ${activeTab === "diagram" ? "opacity-100" : "opacity-40"}`}
                        onClick={() => setActiveTab("diagram")}
                    >
                        3. Diagram
                    </button>
                </div>
                <div className="flex flex-row p-4 items-center justify-center m-4">
                    <div className="flex flex-col text-white w-2/5 text-left mr-8">
                        <div className="text-2xl font-normal w-full">
                            {title}
                        </div>
                        <div className="text-md font-light pt-4 text-balance">
                            {descriptionTop}
                        </div>
                        <div className="text-md font-md pt-4 text-balance">
                            {descriptionBottom}
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-3/5">
                        {
                            image ? <Image
                            
                                src={image}
                                alt="display image"
                                width={1600}
                                height={900}
                                objectFit="contain"
                            /> : null
                        }
                        <div className="text-white bg-[var(--dark-blue)] rounded-full px-2 mt-1 font-light text-sm">
                            {
                                activeTab === "code" ? 1 :
                                    activeTab === "publish" ? 2 :
                                        3 
                            }/3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabComponent;
