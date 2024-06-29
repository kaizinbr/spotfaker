/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Card({
    data,
    artista1,
    artista2,
    artista3,
    artista4,
    artista5,
    musica1,
    musica2,
    musica3,
    musica4,
    musica5,
    coverUrl,
    minutos,
    color,
    hideDay
}: {
    data: any;
    artista1: string;
    artista2: string;
    artista3: string;
    artista4: string;
    artista5: string;
    musica1: string;
    musica2: string;
    musica3: string;
    musica4: string;
    musica5: string;
    coverUrl: string;
    minutos: number;
    color: string;
    hideDay?: boolean;
}) {

    const mes = new Date(data).toLocaleString("pt-br", { month: "long" });
    const dia = new Date(data).getUTCDate();
    const ano = new Date(data).getFullYear();
    const newMinutos = minutos.toLocaleString();
    // console.log(newMinutos, minutos);
    const showDia = hideDay ? " " + dia : "";

    return (
        <div
            className={` 
                bg-[#242424]
                transition-all duration-500 text-white
                aspect-[9/16]
            `}
        >
            {/* <img src="/1.webp" alt="aa" className="w-[320px] max-w-none opacit z-10 absolute top-0" /> */}
            <div
                className={`
                    header
                    flex flex-row gap-3
                    mb-[15px] z-20 relative
                `}
            >
                <div
                    id="blurred"
                    className="h-[7px] absolute -bottom-1 left-0 right-0 "
                    style={{ backgroundColor: `${color}` }}
                >
                </div>
                <picture
                    className={` 
                        overflow-hidden h-[182px] w-full
                        flex justify-start items-center
                    `}
                >
                    {/* por algum motivo que vai alem das minhas humildes capacidades, se usar o image do next dá problema pra baixar a foto */}
                    <img
                        src={coverUrl}
                        alt="cover"
                        width={312}
                        height={32}
                        className={`
                            object-top object-cover h-full w-full
                        `}
                        crossOrigin="anonymous"
                    />
                </picture>
            </div>
            <div
                className={`
                    body
                    flex flex-row gap-2
                    justify-between
                    px-6 z-20 relative
                `}
            >
                <img
                    src="/spotifypremium.png"
                    alt="cover"
                    className="h-[17px]"
                />
                <p className="font-normal text-[9px] mt-[2px]">
                    {mes}{showDia}, {ano}
                </p>
            </div>
            <div
                className={`
                    footer
                    flex flex-row justify-between
                    mt-[23px] px-6 z-20 relative
                `}
            >
                <div>
                    <h2 className="font-bold text-[28px] tracking-tighter leading-[30px]">
                        Minha Máquina do <br /> Tempo de {mes}
                    </h2>
                </div>
            </div>
            <div
                className={`
                    footer
                    grid grid-cols-2
                    mt-3 px-6 z-20 relative
                `}
            >
                <p className="font-bold text-sm leading-8 col-start-1">
                    Artistas favoritos
                </p>
                <p className="font-bold text-sm leading-8 col-start-2">
                    Músicas favoritas
                </p>
                <ul className="w-full pr-3 col-start-1">
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        1 {artista1}
                    </li>
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        2 {artista2}
                    </li>
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        3 {artista3}
                    </li>
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        4 {artista4}
                    </li>
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        5 {artista5}
                    </li>
                </ul>
                <ul className="w-full pr-2 col-start-2">
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        1 {musica1}
                    </li>
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        2 {musica2}
                    </li>
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        3 {musica3}
                    </li>
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        4 {musica4}
                    </li>
                    <li className="text-sm leading-[1.16rem] tracking-[-0.035em] line-clamp-1 break-all">
                        5 {musica5}
                    </li>
                </ul>
            </div>

            <div
                className={`
                    
                    flex flex-col 
                    mt-[22px] px-6 z-20 relative
                `}
            >
                <div>
                    <p className="font-bold text-[15px] tracking-[-0.07em] ">
                        Tempo ouvindo
                    </p>
                </div>
                <h2 className="font-bold text-2xl tracking-tight leading-[30px] text-[#77FBA9]">
                    {newMinutos} minutos
                </h2>
            </div>
        </div>
    );
}

{
    /* <div
                className={` 
                bg-indigo-300 rounded-2xl px-3 py-4
                transition-all duration-500
                w-80 
                ${className}
            `}
                style={{ backgroundColor: "#" + bgColor }}
            >
                <div
                    className={`
                    header
                    flex flex-row gap-3
                    mb-5
                `}
                >
                    <div>
                        <Image
                            src="/txt.jpg"
                            alt="cover"
                            width={32}
                            height={32}
                            className={`
                            rounded-md
                        `}
                        />
                    </div>
                    <div
                        className={`
                        flex flex-col
                    `}
                    >
                        <h2
                            className={`
                            font-black text-[13px]
                        `}
                        >
                            ANTIFRAGILE
                        </h2>
                        <p
                            className={`
                            text-[10px]
                        `}
                        >
                            LE SSERAFIM
                        </p>
                    </div>
                </div>
                <div
                    className={`
                    body
                    flex flex-col gap-2
                    text-sm font-bold
                `}
                >
                    <p>Caralho! Que pau ignorante</p>
                    <p>Parece muito mais um vidro de desodorante</p>
                    <p>Eu to chocada! Que pica exuberante</p>
                    <p>Parece muito mais uma tromba de elefante</p>
                    <p>Vem me arrombar gostoso</p>
                </div>
                <div
                    className={`
                    footer
                    flex flex-row justify-between
                    mt-5
                `}
                >
                    
                    <div>
                        <Image
                            src="/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png"
                            alt="cover"
                            width={70}
                            height={24}
                        />
                    </div>
                </div>
            </div> */
}
