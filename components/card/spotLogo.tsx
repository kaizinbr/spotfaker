import Image from "next/image";

export default function SpotifyLogo({ logoUrl }: { logoUrl: string }) {
    return (
        <div
            className={`
                rounded-md 
                overflow-hidden h-8 w-8
            `}
        >
            <Image
                src={logoUrl}
                alt="cover"
                width={70}
                height={24}
                className={`
                    
                `}
                crossOrigin="anonymous"
            />
        </div>
    );
}

