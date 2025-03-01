import VideoEmbed from "./video_embed";
import Image from "next/image"

const SeeWhatsPossibleTile = () => {

    return (
        <div className="bg-white py-12 mx-8">
            <div className="text-black font-light text-3xl lg:text-4xl text-center">
                See What’s Possible with Massdriver’s IaC-Powered Platform

            </div>
            <div className="relative pb-[56.25%] my-8 mx-4">
                <VideoEmbed videoUrl="https://www.youtube.com/embed/yxAPMfGR0jE"/>
            </div>
            
            <div className="flex flex-row justify-center gap-20">
                <div className="flex flex-col gap-8 items-center">
                    <div className="font-thin opacity-40">
                        CLOUD CERTIFIED
                    </div>
                    <div className="flex flex-row gap-12">
                        <div className="w-10">
                            <Image
                                src="/gcp.png"
                                alt="gcp logo"
                                width={1000}
                                height={1000}
                                objectFit="contain"
                                />
                        </div>
                        <div className="w-10">
                            <Image
                                src="/aws.png"
                                alt="aws logo"
                                width={1000}
                                height={1000}
                                objectFit="contain"
                                />
                        </div>
                        <div className="w-30">
                            <Image
                                src="/foundershub.svg"
                                alt="founderhubs logo"
                                width={1000}
                                height={1000}
                                objectFit="contain"
                                />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 items-center">
                    <div className="font-thin opacity-40">
                        VC BACKED
                    </div>
                    <div className="flex flex-row gap-12">
                        <div className="w-10">
                            <Image
                                src="/ycomb.png"
                                alt="ycombinator logo"
                                width={1000}
                                height={1000}
                                objectFit="contain"
                                />
                        </div>
                        <div className="w-30">
                            <Image
                                src="/builders.png"
                                alt="builders logo"
                                width={1000}
                                height={1000}
                                objectFit="contain"
                                />
                        </div>
                        <div className="w-10">
                            <Image
                                src="/1984.png"
                                alt="1984 logo"
                                width={1000}
                                height={1000}
                                objectFit="contain"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeeWhatsPossibleTile;