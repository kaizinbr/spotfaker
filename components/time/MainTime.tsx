/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useCallback } from "react";
import TimeMachineCard from "./TimeMachine";
import { toPng
 } from "html-to-image";
import Uploader from "@/components/uploader";

import React from "react";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";
import Search from "./Search";

export default function CardBox() {
    const [coverUrl, setCoverUrl] = useState("/default.jpeg");

    const day = new Date().getDate();
    const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    const year = new Date().getFullYear();
    const [date, setDate] = useState(`${year}-${month}-${day}`);

    const [minutos, setMinutos] = useState(1000);

    const [artista1, setArtista1] = useState("");
    const [artista2, setArtista2] = useState("");
    const [artista3, setArtista3] = useState("");
    const [artista4, setArtista4] = useState("");
    const [artista5, setArtista5] = useState("");

    const [musica1, setMusica1] = useState("");
    const [musica2, setMusica2] = useState("");
    const [musica3, setMusica3] = useState("");
    const [musica4, setMusica4] = useState("");
    const [musica5, setMusica5] = useState("");
    const [showDay, setShowDay] = useState(true);

    const [colors, setColors] = useState<string[]>([
        "#011313",
        "#fcf9e0",
        "#c8be9a",
        "#a67041",
    ]);
    const [lineColor, setLineColor] = useState<string>("#011313");

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

        toPng(ref.current, {
            canvasWidth: 1080,
            canvasHeight: 1920,
            cacheBust: true,
            pixelRatio: 2,
            quality: 1,
            style: { backdropFilter: "blur(64px)" },
        })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = `spotfaker-${date}.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    return (
        <div
            className={`
                main-box                
                relative flex flex-col lg:flex-row items- lg:items-start justify-between
                gap-4
                w-full min-h-full md:min-h-[600px]
                
                
            `}
        >
            <div className="min-w-[40%] lg:sticky lg:min-h-lvh top-0 flex flex-col items-center justify-center gap-8">
                {/* <div className=" overflow-visible"> */}
                    <div ref={ref} className="w-80" id="canva">
                        <TimeMachineCard
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
                            color={lineColor}
                            hideDay={showDay}
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
                {/* </div> */}
            </div>

            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-4">
                    <Search
                        coverUrl={coverUrl}
                        setCoverUrl={setCoverUrl}
                        setColors={setColors}
                        type="artist"
                    />
                    <div className="flex flex-col p-4 rounded-xl bg-neutral-700/60">
                        <span className="mb-2 text-xl font-bold">
                            Cor da linha
                        </span>
                        <div className="flex flex-row flex-wrap gap-8 w-full justify-center">
                            {colors.map((color, i) => (
                                <button
                                    key={i}
                                    className="w-10 h-10 rounded-lg"
                                    style={{ backgroundColor: color }}
                                    onClick={() => setLineColor(color)}
                                />
                            ))}
                        </div>
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
                        <div className="flex flex-row gap-3 font-bold text-base">
                            <span className="mb-2">Mostrar dia</span>
                            <div className="inline-flex items-center">
                                <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                                    <input
                                        id="switch-component"
                                        type="checkbox"
                                        className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-700 checked:bg-deluge-600 peer-checked:border-deluge-600 peer-checked:before:bg-deluge-600"
                                        onChange={() =>
                                            setShowDay(!showDay)
                                        }
                                        defaultChecked
                                    />
                                    <label
                                        htmlFor="switch-component"
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
                    </div>

                    <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                        <label className="flex flex-col font-bold text-xl">
                            <span className="mb-2">Minutos</span>
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={minutos}
                                type="number"
                                onChange={(e) =>
                                    setMinutos(e.target.valueAsNumber)
                                }
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                        <span className="mb-2 text-xl font-bold">
                            Artistas favoritos
                        </span>
                        <label className="flex flex-col text-base font-bold">
                            Artista 1:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista1}
                                onChange={handleArtista1Change}
                                placeholder="Artista 1"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 2:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista2}
                                onChange={handleArtista2Change}
                                placeholder="Artista 2"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 3:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista3}
                                onChange={handleArtista3Change}
                                placeholder="Artista 3"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 4:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista4}
                                onChange={handleArtista4Change}
                                placeholder="Artista 4"
                            />
                        </label>

                        <label className="flex flex-col text-base font-bold">
                            Artista 5:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista5}
                                onChange={handleArtista5Change}
                                placeholder="Artista 5"
                            />
                        </label>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                        <span className="mb-2 text-xl font-bold">
                            Músicas favoritas
                        </span>

                        <label className="flex flex-col text-base font-bold">
                            Música 1:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica1}
                                onChange={handleMusica1Change}
                                placeholder="Artista 1"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Música 2:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica2}
                                onChange={handleMusica2Change}
                                placeholder="Música 2"
                            />
                        </label>

                        <label className="flex flex-col text-base font-bold">
                            Música 3:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica3}
                                onChange={handleMusica3Change}
                                placeholder="Música 3"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Música 4:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica4}
                                onChange={handleMusica4Change}
                                placeholder="Música 4"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Música 5:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={musica5}
                                onChange={handleMusica5Change}
                                placeholder="Música 5"
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}