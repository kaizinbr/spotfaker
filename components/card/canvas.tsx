import { useEffect, useRef } from "react";

export default function Canvas ({ coverUrl }: { coverUrl: string }) {
    const myCanvas = useRef<HTMLCanvasElement>(null);

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = myCanvas.current;
        const context = canvas!.getContext("2d");
        const image = new Image();
        image.src =
            coverUrl || "/txt.jpg";
        image.setAttribute('crossorigin', 'anonymous');
        image.onload = () => {
            context!.drawImage(image, 0, 0);
        };
    }, []);

    const setUrl = (url: string) => {
        const canvas = myCanvas.current;
        const context = canvas!.getContext("2d");
        const image = new Image();
        image.src = url;
        image.onload = () => {
            context!.drawImage(image, 0, 0);
        };
    }

    


    return <canvas ref={myCanvas} width={400} height={400} />;
};