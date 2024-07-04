import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function UpBtn() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight - (window.innerHeight / 2);
            const targetElement = document.getElementById("topo");

            if (targetElement && scrollPosition >= windowHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
                <Link href={"#topo"}
                    className={`
                            fixed right-4 bg-deluge-500 text-white p-4 rounded-full
                            transition-all duration-300 ease-in-out z-40
                            ${showButton ? " bottom-4" : " -bottom-24"}
                        `}
                >
                    <ArrowUp size={24} />
                </Link>
        </>
    );
}
