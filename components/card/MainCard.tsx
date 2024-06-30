/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useCallback } from "react";
import Card from "./card";
import { toPng } from "html-to-image";
import Uploader from "@/components/uploader";
import Demo from "./color/colorWheel";
import TextNLogo from "./color/textColor";
// import Carousel from "@/components/carousel/carousel";
import { FontSize, Borders } from "./settings";

import React from "react";
// import { EmblaOptionsType } from "embla-carousel-react";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";
import Search from "../time/Search";

export default function CardBox() {
    const [showCopy, setShowCopy] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [pXY, setPXY] = useState("px-3 py-4");
    const [fontWeight, setFontWeight] = useState("bold");
    const [border, setBorder] = useState("rounded-2xl");

    const [bgColor, setBgColor] = useState("#b28452");
    const [textColor, setTextColor] = useState("white");
    const [logoUrl, setLogoUrl] = useState(
        "/logos/Spotify_Full_Logo_RGB_White.png"
    );
    const [title, setTitle] = useState("Naked In Manhattan");
    const [coverUrl, setCoverUrl] = useState(
        "https://i.scdn.co/image/ab67616d0000b27396fa88fb1789be437d5cb4b6"
    );
    const [artist, setArtist] = useState("Chappell Roan");
    const [lyrics, setLyrics] = useState(
        "Touch me, baby (Touch me, touch me, touch me, touch me)\nTouch me, baby (Naked in Manhattan)\nTouch me, baby (Touch me, touch me, touch me, touch me)\nTouch me, baby (Naked in Manhattan)"
    );
    const [colors, setColors] = useState<string[]>([
        "#011313",
        "#fcf9e0",
        "#c8be9a",
        "#a67041",
    ]);
    const [background, setBackground] = useState(true);
    const [gradient, setGradient] = useState(true);

    function handleBgColorChange(e: { target: { value: any } }) {
        setBgColor(e.target.value);
    }

    function handleTitleChange(e: { target: { value: any } }) {
        setTitle(e.target.value);
    }

    function handleArtistChange(e: { target: { value: any } }) {
        setArtist(e.target.value);
    }

    function handleLyricsChange(e: { target: { value: any } }) {
        setLyrics(e.target.value);
    }

    const ref = useRef<HTMLDivElement>(null);

    const onButtonClick = useCallback(
        (options: any) => {
            if (ref.current === null) {
                return;
            }

            console.log(options);

            toPng(ref.current, options)
                .then((dataUrl) => {
                    const link = document.createElement("a");
                    link.download = `lyricard-${title}-${artist}.png`;
                    link.href = dataUrl;
                    link.click();
                })
                .catch((err) => {
                    console.log(err);
                });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },
        [ref]
    );

    return (
        <div
            className={`
                main-box                
                relative flex flex-col lg:flex-row items-center lg:items-start justify-between
                gap-4
                w-full min-h-full md:min-h-[600px]
                
                
            `}
        >
            <div className="min-w-[40%] lg:sticky lg:min-h-lvh top-0 flex flex-col items-center justify-center gap-8">
                <div ref={ref} className="w-80">
                    <Card
                        lyrics={lyrics}
                        title={title}
                        artist={artist}
                        bgColor={bgColor}
                        coverUrl={coverUrl}
                        logoUrl={logoUrl}
                        textColor={textColor}
                        background={background}
                        gradient={gradient}
                    />
                </div>
                <button
                    className={`
                        bg-deluge-600 text-neutral-100 px-8 py-2 rounded-full border border-deluge-600
                        transition duration-500
                        hover:bg-neutral-600 
                    `}
                    onClick={() => {
                        const options = {
                            canvasWidth: background ? 1080 : undefined,
                            canvasHeight: background ? 1920 : undefined,
                            cacheBust: true,
                            pixelRatio: 2,
                            quality: 1,
                        };
                        onButtonClick(options);
                    }}
                >
                    Baixar
                </button>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-4">
                    <Search
                        coverUrl={coverUrl}
                        setCoverUrl={setCoverUrl}
                        setColors={setColors}
                        type="album%2Ctrack%2Cartist"
                        setTitle={setTitle}
                        setArtist={setArtist}
                    />
                    <div className="flex flex-col p-4 rounded-xl bg-neutral-700/60">
                        <span className="mb-2 text-xl font-bold">
                            Cor do fundo
                        </span>
                        <div className="flex flex-row flex-wrap gap-8 mb-6 w-full justify-center">
                            {colors.map((color, i) => (
                                <button
                                    key={i}
                                    className="w-10 h-10 rounded-lg"
                                    style={{ backgroundColor: color }}
                                    onClick={() => setBgColor(color)}
                                />
                            ))}
                            <button
                                className="w-10 h-10 rounded-lg bg-[#262221]"
                                onClick={() => setBgColor("#262221")}
                            />
                            <button
                                className="w-10 h-10 rounded-lg bg-[#f4f4f4]"
                                onClick={() => setBgColor("#f4f4f4")}
                            />
                            <button
                                className="w-10 h-10 rounded-lg bg-[#A4B8D1]"
                                onClick={() => setBgColor("#A4B8D1")}
                            />
                        </div>

                        <div className="flex flex-row gap-3 mb-6 font-bold text-base">
                            <span className="mb-2">Formato grande</span>
                            <div className="inline-flex items-center">
                                <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                                    <input
                                        id="switch-bg"
                                        type="checkbox"
                                        className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-700 checked:bg-deluge-600 peer-checked:border-deluge-600 peer-checked:before:bg-deluge-600"
                                        onChange={() =>
                                            setBackground(!background)
                                        }
                                        defaultChecked
                                    />
                                    <label
                                        htmlFor="switch-bg"
                                        className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-gray-700 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                                    >
                                        <div
                                            className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                                            data-ripple-dark="true"
                                        ></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 mb-6 font-bold text-base">
                            <span className="mb-2">Degradê no fundo</span>
                            <div className="inline-flex items-center">
                                <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                                    <input
                                        id="switch-gradient"
                                        type="checkbox"
                                        className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-700 checked:bg-deluge-600 peer-checked:border-deluge-600 peer-checked:before:bg-deluge-600"
                                        onChange={() => setGradient(!gradient)}
                                        defaultChecked
                                        disabled={!background}
                                    />
                                    <label
                                        htmlFor="switch-gradient"
                                        className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-gray-700 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                                    >
                                        <div
                                            className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                                            data-ripple-dark="true"
                                        ></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <TextNLogo
                            setTextColor={setTextColor}
                            setLogoUrl={setLogoUrl}
                        />
                    </div>

                    <div
                        className={`
                            w-full
                            p-4   items-center justify-center
                            flex flex-col gap-8 m-auto
                            rounded-xl bg-neutral-700/60
                        `}
                        key={2}
                    >
                        <Uploader
                            setCoverUrl={setCoverUrl}
                            setColors={setColors}
                        />
                    </div>
                    <form
                        action=""
                        className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60"
                    >
                        <label className="flex flex-col text-base font-extrabold">
                            <span className="mb-2">Título:</span>
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={title}
                                onChange={handleTitleChange}
                            />
                        </label>
                        <label className="flex flex-col text-base font-extrabold">
                            Artista:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artist}
                                onChange={handleArtistChange}
                            />
                        </label>
                        <label className="flex flex-col text-base font-extrabold">
                            Letras:
                            <textarea
                                rows={6}
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={lyrics}
                                onChange={handleLyricsChange}
                            />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}
