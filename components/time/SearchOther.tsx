"use client";
import { useRef, useState, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { extractColors } from "extract-colors";

export default function SearchOther({
    coverUrl,
    setCoverUrl,
    setColors,
    type,
    setTitle,
    setArtistas,
    artistas,
    musicas,
    setMusicas
}: {
    coverUrl: string;
    setCoverUrl: any;
    setColors: any;
    type: string;
    setTitle?: any;
    setArtistas?: any;
    artistas?: any;
    musicas?: any;
    setMusicas?: any;
}) {
    const elementRef = useRef(null);

    const [query, setQuery] = useState("");
    const [artistResults, setArtistResults] = useState<
        { id: string; images: [any]; name: string }[]
    >([]);
    const [tracksResults, setTracksResults] = useState<
        {
            id: string;
            album: { images: [any] };
            artists: [{ name: string }];
            name: string;
        }[]
    >([]);
    const [albunsResults, setAlbunsResults] = useState<
        { id: string; images: [any]; name: string }[]
    >([]);
    const [selected, setSelected] = useState<
        { id: string; image: string; name: string; type: string }[]
    >([]);

    function handleQuery(e: { target: { value: any } }) {
        setSelected([]);
        const currentValue = e.target.value;
        setQuery(currentValue);
        if (currentValue == "") {
            console.log("empty");
            setArtistResults([]);
        } else if (type === "artist") {
            axios
                .post("/api/spot/artist", {
                    search: currentValue,
                    type: "artist",
                })
                .then((response) => {
                    setArtistResults(response.data.artists.items);
                })
                .catch((error) => {
                    console.log(error);
                });
                     
        } else if (type === "track") {
            axios
                .post("/api/spot/track", {
                    search: currentValue,
                    type: "track",
                })
                .then((response) => {
                    setTracksResults(response.data.tracks.items);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className="flex flex-col ">
            <h1 className="mb-2 text-lg font-medium">Pesquise do Spotify</h1>
            <label className="flex flex-col font-bold text-base">
                {/* <span className="mb-2">Selecione o artista</span> */}
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={query}
                    type="text"
                    onChange={handleQuery}
                    placeholder="Digite o nome do artista, álbum ou música"
                />
            </label>
            <div className="flex flex-col w-full text-left">
                {tracksResults.length > 0 && (
                    <div className="flex flex-col w-full mb-6">
                        <h3 className="text-lg font-bold">Músicas</h3>
                        {tracksResults.map((track) => (
                            <button
                                key={track.id}
                                className="flex flex-row items-center p-2 rounded-lg hover:bg-neutral-600 bg-transparent transition-all duration-300"
                                onClick={() => {
                                    if (musicas.length < 5 && !musicas.some((a: any) => a.id === track.id)) {
                                        setMusicas((prevMusicas: any) => [...prevMusicas, {
                                                id: track.id,
                                                image: track.album.images[0]?.url,
                                                name: track.name,
                                                type: "track",
                                        }])
                                    }
                                    setQuery("");
                                    setTracksResults([]);
                                }}
                            >
                                <Image
                                    className="w-10 h-10 rounded-md"
                                    src={track.album.images[0]?.url}
                                    alt={track.name}
                                    width={40}
                                    height={40}
                                />
                                <p className="ml-3 text-left">{track.name}</p>
                            </button>
                        ))}
                    </div>
                )}
                {artistResults.length > 0 && (
                    <div className="flex flex-col w-full">
                        <h3 className="text-lg font-bold">Artistas</h3>
                        {artistResults.map((artist) => (
                            <button
                                key={artist.id}
                                className="flex flex-row items-center p-2 rounded-lg hover:bg-neutral-600 bg-transparent transition-all duration-300"
                                onClick={() => {
                                    if (artistas.length < 5 && !artistas.some((a: any) => a.id === artist.id)) {
                                        setArtistas((prevArtistas: any) => [...prevArtistas, {
                                                id: artist.id,
                                                image: artist.images[0]?.url,
                                                name: artist.name,
                                                type: "artist",
                                        }])
                                    }
                                    setQuery("");
                                    setArtistResults([]);
                                }}
                            >
                                <Image
                                    className="w-10 h-10 rounded-full"
                                    src={artist.images[0]?.url}
                                    alt={artist.name}
                                    width={40}
                                    height={40}
                                />
                                <p className="ml-3 text-left">{artist.name}</p>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
