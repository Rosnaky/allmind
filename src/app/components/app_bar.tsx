import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const AppBar = () => {
    return (
        <header className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0 w-full z-50">
            <Image
                src="/massdriver.svg"
                alt="massdriver logo"
                width={200}
                height={200}
            />
            <nav>
                <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-600">Features</a></li>
                <li><a href="#" className="hover:text-blue-600">Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600">Docs</a></li>
                <li><a href="#" className="hover:text-blue-600">Templates</a></li>
                <li><a href="#" className="hover:text-blue-600">Community</a></li>
                </ul>
            </nav>
            <div>

                <button className="text-black">
                    <a 
                        href="https://app.massdriver.cloud/login" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row mx-6 my-2 block h-full"
                    >
                        Sign in
                    </a>
                </button>
                <button className="text-white bg-[var(--deep-sky-blue)] bg-gradient-to-r from-[rgba(0,123,255,0.5)] to-[var(--deep-sky-blue)] rounded-sm border border--[var(--deep-sky-blue)]">
                    <a 
                        href="https://app.massdriver.cloud/register" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row mx-6 my-2 block h-full"
                    >
                        Try Free
                        <ArrowRightIcon className="pl-1 mt-0.5 h-5 w-5"/>
                    </a>
                </button>
            </div>
        </header>
    );
}

export default AppBar;