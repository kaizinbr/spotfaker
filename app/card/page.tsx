"use client";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useRef } from "react";
import CardBox from "@/components/card/MainCard";
import UpBtn from "@/components/Up";
import Link from "next/link";


export default function Home() {
    return (
        
        <>
            <main className="relative flex  flex-col items-center justify-center w-11/12 m-auto px-8 py-12">
                <h1 className="text-4xl font-bold text-center mb-8" id="topo">
                    Crie cards personalizados
                </h1>
                <CardBox />
                <div
                    className={`
                        flex w-full max-w-xl mt-8
                        m-auto p-4 border border-deluge-500 rounded-2xl
                        bg-neutral-800
                    `}
                >
                    <p
                        className="text-sm text-neutral-300 text-center"
                        id="topo"
                    >
                        Não possuímos relação com a empresa Spotify® e
                        qualquer uma de suas marcas. Todos os items e utilizados
                        aqui relacionados à marca Spotify® são públicos e estão
                        disponíveis em{" "}
                        <Link
                            href="https://newsroom.spotify.com/media-kit/logo-and-brand-assets/"
                            target="_blank"
                            className="underline"
                        >
                            Press Center 
                        </Link>{" "}
                        e{" "}
                        <Link
                            href="https://developer.spotify.com/documentation/design"
                            target="_blank"
                            className="underline"
                        >
                            Spotify for Developers
                        </Link>
                        . Este é um projeto pessoal e sem fins lucrativos.
                    </p>
                </div>
            </main>
            <UpBtn />
        </>
    );
}