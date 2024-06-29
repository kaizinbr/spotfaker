import Image from "next/image";

export default function Cover({ coverUrl }: { coverUrl: string }) {
    return (
        <picture
            className={` 
                        rounded-md 
                        overflow-hidden h-8 w-8
                    `}
        >
            <Image
                src={coverUrl}
                alt="cover"
                width={32}
                height={32}
                className={`
                            
                        `}
                crossOrigin="anonymous"
            />
        </picture>
    );
}
