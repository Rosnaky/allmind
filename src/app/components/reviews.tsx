import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const Reviews = () => {
    return (
        <div className="text-white w-full flex flex-col items-center justify-center py-12 font-[family-name:var(--font-satoshi)] font-medium bg-gradient-to-b from-[var(--dark-blue)] via-[var(--dark-blue-green)] to-[var(--dark-blue)]">
            <div className="text-4xl mx-12 font-light">
                Loved by DevOps and Software Engineers
            </div>
            <div className="w-2/3 pt-8 flex justify-center">
                <Image
                    src="/reviews.png"
                    alt="reviews"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className="flex flex-row gap-40 items-center mt-8">
                <div className="text-2xl font-light">
                    Featured In
                </div>
                <button className="text-white bg-[var(--deep-sky-blue)] bg-gradient-to-r from-[rgba(0,123,255,0.5)] to-[var(--deep-sky-blue)] rounded-sm border border--[var(--deep-sky-blue)]">
                    <a 
                        href="https://www.massdriver.cloud/news" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex flex-row mx-6 my-2 block h-full"
                    >
                        Read News
                        <ArrowRightIcon className="pl-1 mt-0.5 h-5 w-5"/>
                    </a>
                </button>
            </div>
            <div className="w-2/3 pt-8 flex justify-center">
                <Image
                    src="/featured.png"
                    alt="featured companies"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    );
}

export default Reviews;