import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import Nav from "@/components/Nav";

export const metadata = {
    title: "Spotfaker - Kaizin",
    description: "esconda quem não deveria aparecer na sua máquina do tempo",
};

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br" className="scroll-smooth">
            <body
                className={`
                bg-neutral-900 text-seashell-50
                scroll-smooth
                
            `}
            >
                <Nav />
                {children}
                <footer className="w-full flex justify-center items-center py-6 ">
                    <Link
                        href="https://kaizin.com.br"
                        target="_blank"
                        className="text-sm underline m-auto"
                    >
                        Feito por Kaizin
                    </Link>
                </footer>
            </body>
        </html>
    );
}
