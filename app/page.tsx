"use client";
// import CardBox from "@/components/time/MainCard";
import UpBtn from "@/components/Up";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

    return (
        <>
        
            <main
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-3 items-center justify-center w-11/12 m-auto px-4 py-12"
                
            >
                <Link
                    href="/timemachine"
                    className={`
                            flex flex-col items-center justify-center w-full h-96 rounded-xl 
                            bg-cover bg-[url('/spotfaker.png')] bg-top bg-no-repeat
                            relative
                        `}
                >
                    <div className="flex flex-col items-start justify-end px-4 py-6 w-full h-full bg-gradient-to-b from-transparent from-10% to-neutral-950 to-90% bg-opacity-50 rounded-xl">
                        <h1 className="text-4xl font-bold text-seashell-50">Time Machine</h1>
                        <p className="text-base text-seashell-300">Esconda quem não deveria aparecer na sua máquina do tempo</p>
                    </div>
                </Link>
                <Link
                    href="/card"
                    className={`
                            flex flex-col items-center justify-center w-full h-96 rounded-xl 
                            bg-cover bg-[url('/card.webp')] bg-center bg-no-repeat
                            relative
                        `}
                >
                    <div className="flex flex-col items-start justify-end px-4 py-6 w-full h-full bg-gradient-to-b from-transparent from-10% to-neutral-950 to-90% bg-opacity-50 rounded-xl">
                        <h1 className="text-4xl font-bold text-seashell-50">Cards de letras</h1>
                        <p className="text-base text-seashell-300">Crie cards de letras personalizando tudo</p>
                    </div>
                </Link>
                
                
            </main>
            <UpBtn />
        </>
    );
}
