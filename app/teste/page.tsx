"use client";
import { useRef, useState, useCallback } from "react";
import axios from "axios";
import Image from "next/image";

export default function Home() {
    const elementRef = useRef(null);


    const [query, setQuery] = useState("");
    const [results, setResults] = useState<
        { id: string; images: [any]; name: string }[]
    >([]);

    function handleQuery(e: { target: { value: any } }) {
        const currentValue = e.target.value;
        setQuery(currentValue);
        if (currentValue == "") {
            console.log("empty");
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
        <main
            className="relative flex min-h-screen flex-col items-center justify-center"
            ref={elementRef}
        >
            <h1 className="text-xl"></h1>
            <label className="flex flex-col font-bold text-xl">
                <span className="mb-2">teste de busca de artista</span>
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={query}
                    type="text"
                    onChange={handleQuery}
                />
            </label>
            <div className="flex flex-col w-full">
                {results.map((artist) => (
                    <div key={artist.id} className="flex flex-row items-center">
                        <Image
                            className="w-10 h-10 rounded-full"
                            src={artist.images[0]?.url}
                            alt={artist.name}
                            width={40}
                            height={40}
                        />
                        <span className="ml-3">{artist.name}</span>
                    </div>
                ))}
            </div>
        </main>
    );
}
