/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Card({
    lyrics,
    title,
    artist,
    bgColor,
    coverUrl,
    logoUrl,
    textColor,
    background,
    gradient,
}: {
    lyrics: string;
    title: string;
    artist: string;
    bgColor: string;
    coverUrl: string;
    logoUrl: string;
    textColor: string;
    background: boolean;
    gradient: boolean;
}) {
    console.log(coverUrl);

    const newLyrics = lyrics.split("\n").map((str, i) => (
        <span key={i} className="w-full text-pretty">
            {str}
        </span>
    ));
    // console.log(newLyrics)

    return (
        <div
            className={` 
                bg-[#242424]
                transition-all duration-500 text-white
                
                flex flex-col justify-center items-center
                relative
                ${background ? "py-10 aspect-[9/16]" : "w-fit m-auto"}
            `}
            style={{
                backgroundImage: gradient && background
                    ? `linear-gradient(to bottom, ${bgColor}, #000000)` 
                    
                    : "none",
                backgroundColor: background ? `${bgColor}` : "transparent",
            }}
        >
            {/* <img src="/2.webp" alt="aa" className="w-[320px] max-w-none opacity-50 z-10 absolute top-0" /> */}

            <div
                className={`
                    bg-indigo-300
                    transition-all duration-500
                    w-60 z-20 relative opacity-
                    text-${textColor} py-[1.6rem] px-[1.2rem] rounded-xl text-black
                `}
                style={{ backgroundColor: bgColor }}
            >
                <div
                    className={`
                        header
                        flex flex-row gap-[0.6rem]
                        items-center
                    `}
                >
                    <picture
                        className={`
                            rounded-[0.3rem]
                            overflow-hidden h-[1.65rem] w-[1.65rem]
                            flex justify-center items-center
                        `}
                    >
                        {/* por algum motivo que vai alem das minhas humildes capacidades, se usar o image do next dá problema pra baixar a foto */}
                        <img
                            src={coverUrl}
                            alt="cover"
                            width={32}
                            height={32}
                            className={`
                                object-cover h-full w-full
                            `}
                            crossOrigin="anonymous"
                        />
                    </picture>
                    <div
                        className={`
                            flex flex-col
                            h-full justify-around
                        `}
                    >
                        <h2
                            className={`
                                font-bold text-[8px] mt-[2px]
                            `}
                        >
                            {title}
                        </h2>
                        <p
                            className={`
                                text-[7px]
                            `}
                        >
                            {artist}
                        </p>
                    </div>
                </div>
                <div
                    className={`
                        body
                        flex flex-col 
                        text-[11px] font-bold tracking-[-0.007em]
                        gap-3 text-pretty mt-[22px] overflow-hidden
                    `}
                >
                    {newLyrics}
                </div>
                <div
                    className={`
                        footer
                        flex flex-row justify-between
                        mt-[0.95rem]
                    `}
                >
                    <div>
                        <img src={logoUrl} alt="cover" width={50} height={24} />
                    </div>
                </div>
            </div>
            <div
                className={`
                    absolute bg-neutral-950/30
                    ${background ? "h-full w-full" : ""}
                `}
            ></div>
        </div>
    );
}
