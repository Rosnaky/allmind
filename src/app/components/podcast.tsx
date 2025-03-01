import Image from "next/image";

const Podcast = () => {

    return (
        <div className="flex flex-col bg-white text-black items-center mt-20 mx-12 rounded-md font-[family-name:var(--font-satoshi)]">
            <div className="pt-6 font-bold text-3xl">
                PLATFORM ENGINEERING
            </div>
            <div className="pt-1 font-bold text-md" style={{ letterSpacing: "0.4em" }}>
                PODCAST
            </div>

            <div className="flex text-center w-2/3 pt-4">
            This podcast caters to professionals and enthusiasts passionate about the intricacies of platform architecture, cloud operations, and scaling DevOps practices.
            </div>
            <div className="pt-8 font-semibold text-sm">
                LISTEN TO THE PODCAST
            </div>

            <div className="flex flex-row mt-4 mb-8 justify-center gap-6">
                <Image
                    src="/youtube.png"
                    alt="youtube logo"
                    width="40"
                    height="40"
                />
                <Image
                    src="/iheart.jpg"
                    alt="iheart logo"
                    width="40"
                    height="40"
                />
                <Image
                    src="/spotify.svg"
                    alt="spotify logo"
                    width="40"
                    height="40"
                />
                <Image
                    src="/applepodcast.svg"
                    alt="apple podcast logo"
                    width="40"
                    height="40"
                />
                <Image
                    src="/amazonmusic.webp"
                    alt="amazon music logo"
                    width="40"
                    height="40"
                />
                <Image
                    src="/pocketcasts.png"
                    alt="pocket casts logo"
                    width="40"
                    height="40"
                />
                <Image
                    src="/listennotes.png"
                    alt="listen notes logo"
                    width="40"
                    height="40"
                />
                <Image
                    src="/audible.jpg"
                    alt="audible logo"
                    width="40"
                    height="40"
                />
            </div>
        </div>
    );
}

export default Podcast;