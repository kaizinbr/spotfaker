"use client";
import Image from "next/image";
import Link from "next/link";
import ExpandingArrow from "@/components/expanding-arrow";
import Uploader from "@/components/uploader";
import { Toaster } from "@/components/toaster";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useRef } from "react";
import CardBox from "@/components/card/card-box";
import Carousel from "@/components/carousel/carousel";

export default function Home() {
    const elementRef = useRef(null);
    // var node = document.getElementById("my-node");

    const htmlToImageConvert = () => {
        toPng(elementRef.current!, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "my-image-name.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];

    return (
        <main
            className="relative flex  flex-col items-center justify-center w-11/12 m-auto px-8 py-12"
            ref={elementRef}
        >
            <CardBox />
        </main>
    );
}
