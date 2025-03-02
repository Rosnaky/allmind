import Image from "next/image"

const Testimony = () => {

    return (
        <div className="flex flex-col bg-[var(--lighter-blue-green)] text-white mt-16 pt-16 mx-8">
            <div className="flex justify-center text-center text-3xl">
                We know the cloud
            </div>

            <div className="bg-white text-black mx-20 rounded-md p-8 pt-4 mt-4">
                <div className="text-lg text-semibold text-balance">
                &quot;We are partnering with innovative companies like Massdriver to help founders achieve more. As a part of Microsoft for Startups Founders Hub, startups can now receive access to Massdriver&apos;s productivity tools, designed to streamline cloud management and reduce infrastructure development time.&quot;
                </div>

                <div className="pt-4 flex flex-row items-center">
                    <div className="text-sm text-bold pr-2">
                        Kirk Safford
                    </div>
                    <div className="text-xs text-bold">
                        Director, Microsoft for Startups
                    </div>
                </div>
            </div>
            <Image
                className="ml-32"
                src="triangle.svg"
                alt="triangle image"
                width={40}
                height={40}
            />
            <div className="border-t-2 border-dotted border-gray-400 my-12 w-full"/>
            <div className="opacity-70 font-[family-name:var(--font-satoshi)] text-center text-balanced flex mx-auto text-xl w-2/3">
                Built by a team of world-class cloud certified experts. Massdriver has passed rigorous CIS benchmarks for your favorite cloud&apos;s partnership network.
            </div>

            <div className="flex flex-row gap-12 mx-auto my-8 items-center">
                <div className="w-25">
                    <Image
                        src="/aws.png"
                        alt="aws logo"
                        width={1000}
                        height={1000}
                        objectFit="contain"
                        />
                </div>
                <div className="w-50">
                    <Image
                        className="invert"
                        src="/foundershub.svg"
                        alt="founderhubs logo"
                        width={1000}
                        height={1000}
                        objectFit="contain"
                        />
                </div>
                <div className="w-25">
                    <Image
                        src="/gcp.png"
                        alt="gcp logo"
                        width={1000}
                        height={1000}
                        objectFit="contain"
                        />
                </div>
            </div>
        </div>
    );

}

export default Testimony