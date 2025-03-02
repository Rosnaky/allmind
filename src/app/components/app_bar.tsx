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
                className="h-auto"
            />
            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-blue-600">Features</a></li>
                    <li><a href="#" className="hover:text-blue-600">Solutions</a></li>
                    <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                    <li><a href="#" className="hover:text-blue-600">Docs</a></li>
                    <li><a href="#" className="hover:text-blue-600">Templates</a></li>
                    <li><a href="#" className="hover:text-blue-600">Community</a></li>
                </ul>
            </nav>
            <div className="flex items-center space-x-4">
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

            <div className="md:hidden flex items-center">
                <button className="text-black" aria-label="Menu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default AppBar;
