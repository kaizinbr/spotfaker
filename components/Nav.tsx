"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    const pathname = usePathname();

    useEffect(() => {
        console.log("Pathname:", pathname);
    }, [pathname]);

    return (
        <header className="w-full overflow-hidden overflow-x-scroll no-scrollbar"
      
        >
            <nav className="flex flex-row gap-3 h-16 px-2 items-center transition-all duration-300 text-xs w-[112vw]">
                <Link
                    href="https://open.spotify.com/user/gvzymrsocexv6sfgx7uvxc9rj?si=5995f57655374d10"
                    target="_blank"
                >
                    <Image
                        className="w-10 h-10 rounded-full"
                        src="https://i.scdn.co/image/ab6775700000ee8569c00cf76879b3bf33e4d6a3"
                        alt="Foto de perfil de Kaizin no spotify"
                        width={40}
                        height={40}
                    />
                </Link>
                <Link
                    href="/"
                    className={`
                            h-10 rounded-full px-6 text-center flex items-center transition-all duration-300
                            ${
                                pathname === "/"
                                    ? "bg-deluge-600"
                                    : "bg-neutral-700"
                            }
                        `}
                >
                    Home
                </Link>
                <Link
                    href="/timemachine"
                    className={`
                            h-10 rounded-full px-6 text-center flex items-center transition-all duration-300
                            ${
                                pathname === "/timemachine"
                                    ? "bg-deluge-600"
                                    : "bg-neutral-700"
                            }
                        `}
                >
                    Máquina do Tempo
                </Link>
                <Link
                    href="/card"
                    className={`
                            h-10 rounded-full px-6 text-center flex items-center transition-all duration-300
                            ${
                                pathname === "/card"
                                    ? "bg-deluge-600"
                                    : "bg-neutral-700"
                            }
                        `}
                >
                    Cards de letra
                </Link>
            </nav>
        </header>
    );
}
