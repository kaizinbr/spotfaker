/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useCallback } from "react";
import Card from "./card";
import { toPng } from "html-to-image";
import Uploader from "@/components/uploader";
import Demo from "../color/colorWheel";
import TextNLogo from "../color/textColor";
import Carousel from "@/components/carousel/carousel";
import { FontSize, Borders } from "../settings";

import React from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS: EmblaOptionsType = {};

export default function CardBox() {
    const [showCopy, setShowCopy] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [pXY, setPXY] = useState("px-3 py-4");
    const [fontWeight, setFontWeight] = useState("bold");
    const [border, setBorder] = useState("rounded-2xl");

    const [bgColor, setBgColor] = useState("#A4B8D1");
    const [textColor, setTextColor] = useState("black");
    const [logoUrl, setLogoUrl] = useState(
        "/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png"
    );
    const [title, setTitle] = useState("Fabulous");
    const [coverUrl, setCoverUrl] = useState("/chappell.jpeg");
    const [artist, setArtist] = useState("Taeyeon");
    const [lyrics, setLyrics] = useState("Hi my name is");

    const day = new Date().getDate();
    const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const year = new Date().getFullYear();
    const [date, setDate] = useState(`${year}-${month}-${day}`);

    const [minutos, setMinutos] = useState(1000);

    const [artista1, setArtista1] = useState("txt");
    const [artista2, setArtista2] = useState("txt");
    const [artista3, setArtista3] = useState("txt");
    const [artista4, setArtista4] = useState("txt");
    const [artista5, setArtista5] = useState("txt");

    const [musica1, setMusica1] = useState("txt");
    const [musica2, setMusica2] = useState("txt");
    const [musica3, setMusica3] = useState("txt");
    const [musica4, setMusica4] = useState("txt");
    const [musica5, setMusica5] = useState("txt");

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


    function handleArtista1Change(e: { target: { value: any } }) {
        setArtista1(e.target.value);
    }

    function handleArtista2Change(e: { target: { value: any } }) {
        setArtista2(e.target.value);
    }

    function handleArtista3Change(e: { target: { value: any } }) {
        setArtista3(e.target.value);
    }

    function handleArtista4Change(e: { target: { value: any } }) {
        setArtista4(e.target.value);
    }

    function handleArtista5Change(e: { target: { value: any } }) {
        setArtista5(e.target.value);
    }

    function handleMusica1Change(e: { target: { value: any } }) {
        setMusica1(e.target.value);
    }

    function handleMusica2Change(e: { target: { value: any } }) {
        setMusica2(e.target.value);
    }

    function handleMusica3Change(e: { target: { value: any } }) {
        setMusica3(e.target.value);
    }

    function handleMusica4Change(e: { target: { value: any } }) {
        setMusica4(e.target.value);
    }

    function handleMusica5Change(e: { target: { value: any } }) {
        setMusica5(e.target.value);
    }

    const ref = useRef<HTMLDivElement>(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { canvasWidth: 1080, canvasHeight: 1920, cacheBust: true, pixelRatio: 2, quality: 1 })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = `spotfaker.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    let slides = [
        <Demo key={1} setBgColor={setBgColor} />,
        <div
            className={`
                w-[348px] 
                px-4   
                flex flex-col gap-8
            `}
            key={2}
        >
            <Uploader setCoverUrl={setCoverUrl} />
        </div>,
        <div
            className={`
                w-[348px] 
                px-4   
                flex flex-col gap-8
            `}
            key={2}
        >
            <TextNLogo setTextColor={setTextColor} setLogoUrl={setLogoUrl} />
            <FontSize
                setFontSize={setFontSize}
                fontSize={fontSize}
                setPXY={setPXY}
                setFontWeight={setFontWeight}
            />
            <Borders border={border} setBorder={setBorder} />
        </div>,
        <form key={3} action="" className="flex flex-col gap-2 px-4 w-[348px] ">
            <label className="flex flex-col text-base font-extrabold">
                Título:
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
        </form>,
    ];

    return (
        <div
            className={`
                main-box                
                relative flex flex-col lg:flex-row items- lg:items-start justify-between
                gap-4
                w-full min-h-full md:min-h-[600px]
                
                
            `}
        >
            <div className="flex flex-col items-center gap-8 min-w-[40%]">
                <div ref={ref} className="w-80">
                    <Card
                        data={date}
                        artista1={artista1}
                        artista2={artista2}
                        artista3={artista3}
                        artista4={artista4}
                        artista5={artista5}
                        musica1={musica1}
                        musica2={musica2}
                        musica3={musica3}
                        musica4={musica4}
                        musica5={musica5}
                        coverUrl={coverUrl}
                        minutos={minutos}
                    />
                </div>
                <button
                    className={`
                        bg-deluge-600 text-neutral-100 px-8 py-2 rounded-full border border-deluge-600
                        transition duration-500
                        hover:bg-neutral-600 
                    `}
                    onClick={onButtonClick}
                >
                    Baixar
                </button>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-4">
                    <div
                        className={`
                            w-[348px] 
                            px-4   
                            flex flex-col gap-8 m-auto
                        `}
                        key={2}
                    >
                        <Uploader setCoverUrl={setCoverUrl} />
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                        <label className="flex flex-col font-bold text-xl">
                            <span className="mb-2">Data</span>
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={date}
                                type="date"
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                    </div>
                    
                    <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                        <label className="flex flex-col font-bold text-xl">
                            <span className="mb-2">Minutos</span>
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={minutos}
                                type="number"
                                onChange={(e) => setMinutos(e.target.valueAsNumber)}
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                    <span className="mb-2 text-xl font-bold">Artistas favoritos</span>
                        <label className="flex flex-col text-base font-bold">
                            Artista 1:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista1}
                                onChange={handleArtista1Change}
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 2:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista2}
                                onChange={handleArtista2Change}
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 3:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista3}
                                onChange={handleArtista3Change}
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 4:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista4}
                                onChange={handleArtista4Change}
                            />
                        </label>

                        <label className="flex flex-col text-base font-bold">
                            Artista 5:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista5}
                                onChange={handleArtista5Change}
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                    <span className="mb-2 text-xl font-bold">Músicas favoritas</span>

                        <label className="flex flex-col text-base font-bold">
                            Música 1:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica1}
                                onChange={handleMusica1Change}
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Música 2:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica2}
                                onChange={handleMusica2Change}
                            />
                        </label>

                        <label className="flex flex-col text-base font-bold">
                            Música 3:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica3}
                                onChange={handleMusica3Change}
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Música 4:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica4}
                                onChange={handleMusica4Change}
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Música 5:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica5}
                                onChange={handleMusica5Change}
                            />
                        </label>
                    </div>
                </div>
            </div>


            {/* usar caso continue dando erro na hora de baixar */}
            {/* {showCopy && (
                <div
                    className={`
                    absolute z-50
                    top-0 left-0
                    w-screen h-screen
                    flex flex-col items-center justify-center
                    bg-black bg-opacity-50
                `}
                >
                    <button
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            setShowCopy(false);
                        }}
                    >
                        Copiar
                    </button>
                    <div ref={ref}>
                    <div
            className={` 
                bg-indigo-300 rounded-2xl px-3 py-4
                transition-all duration-500
                w-80 
                text-${textColor}
            `}
            style={{ backgroundColor: bgColor }}
        >
            <div
                className={`
                    header
                    flex flex-row gap-3
                    mb-5
                `}
            >
                <picture
                    className={` 
                        rounded-md 
                        overflow-hidden h-8 w-8
                    `}
                >
                    <img
                        src={coverUrl}
                        alt="cover"
                        width={32}
                        height={32}
                        className={`
                            
                        `}
                        crossOrigin="anonymous"
                    />
                </picture>
                <div
                    className={`
                        flex flex-col
                    `}
                >
                    <h2
                        className={`
                            font-black text-[13px]
                        `}
                    >
                        {title}
                    </h2>
                    <p
                        className={`
                            text-[10px]
                        `}
                    >
                        {artist}
                    </p>
                </div>
            </div>
            <div
                className={`
                    body
                    flex flex-col gap-2
                    text-sm font-bold
                `}
            >
                {lyrics.split("\n").map((str, i) => <p key={i}>{str}</p>)}
            </div>
            <div
                className={`
                    footer
                    flex flex-row justify-between
                    mt-5
                `}
            >
                <div>
                    <img src={logoUrl} alt="cover" width={70} height={24} />
                </div>
            </div>
        </div>
                    </div>
                    <button
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                        onClick={onButtonClick}
                    >
                        baixar
                    </button>
                </div>
            )} */}
            {/* <SimpleSlider /> */}
        </div>
    );
}
