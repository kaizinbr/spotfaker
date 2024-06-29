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

    

    return (
        <main
            className="relative flex min-h-screen flex-col items-center justify-center"
            ref={elementRef}
        >
            
        </main>
    );
}
