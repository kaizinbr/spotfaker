"use client";
import { useRef, useState, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { extractColors } from "extract-colors";

export default function Search({
    coverUrl,
    setCoverUrl,
    setColors,
}: {
    coverUrl: string;
    setCoverUrl: any;
    setColors: any;
}) {
    const elementRef = useRef(null);

    const [query, setQuery] = useState("");
    const [results, setResults] = useState<
        { id: string; images: [any]; name: string }[]
    >([]);
    const [selected, setSelected] = useState<any>(null);

    function handleQuery(e: { target: { value: any } }) {
        setSelected(null);
        const currentValue = e.target.value;
        setQuery(currentValue);
        if (currentValue == "") {
            console.log("empty");
            setResults([]);
        } else {
            axios
                .post("/api/spot", {
                    search: currentValue,
                })
                .then((res) => {
                    console.log(res.data);
                    setResults(res.data.artists.items);
                    console.log(results);
                });
            // Certifique-se de continuar a cadeia de promessas ou de lidar com ela adequadamente aqui
        }
    }

    return (
        <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
            <h1 className="mb-2 text-xl font-bold">Buscar artista</h1>
            <label className="flex flex-col font-bold text-base">
                <span className="mb-2">Selecione o artista</span>
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={query}
                    type="text"
                    onChange={handleQuery}
                />
            </label>
            <div className="flex flex-col w-full">
                {results.map((artist) => (
                    <button
                        key={artist.id}
                        className="flex flex-row items-center p-2 rounded-lg hover:bg-neutral-600 bg-transparent transition-all duration-300"
                        onClick={() => {
                            setCoverUrl(artist.images[0]?.url);
                            extractColors(artist.images[0]?.url, {
                                crossOrigin: "anonymous",
                            })
                                .then((colors) => {
                                    console.log(colors);
                                    setColors(colors.map((c) => c.hex));
                                })
                                .catch(console.error);

                            setResults([]);
                            setQuery("");
                            setSelected(artist);
                        }}
                    >
                        <Image
                            className="w-10 h-10 rounded-full"
                            src={artist.images[0]?.url}
                            alt={artist.name}
                            width={40}
                            height={40}
                        />
                        <span className="ml-3">{artist.name}</span>
                    </button>
                ))}
                {selected && (
                    <div className="flex flex-row items-center p-2 rounded-lg bg-neutral-600 bg-transparent transition-all duration-300">
                        <Image
                            className="w-10 h-10 rounded-full"
                            src={selected.images[0]?.url}
                            alt={selected.name}
                            width={40}
                            height={40}
                        />
                        <span className="ml-3">{selected.name}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
