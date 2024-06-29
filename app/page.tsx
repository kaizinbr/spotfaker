"use client";
import CardBox from "@/components/card/card-box";
import UpBtn from "@/components/Up";

export default function Home() {

    return (
        <>
            <main
                className="relative flex  flex-col items-center justify-center w-11/12 m-auto px-8 py-12"
                
            >
                <CardBox />
            </main>
            <UpBtn />
        </>
    );
}
