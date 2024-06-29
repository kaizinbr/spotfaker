export default function TextNLogo({ setTextColor, setLogoUrl }: { setTextColor: any, setLogoUrl: any}) {
   

    
    return (
        <div
            className={`
                w-[348px] 
            `}
        >
            <div className="space-y-1 mb-4">
                <h2 className="text-xl font-semibold">Cor do texto</h2>
            </div>
            <div className="flex gap-4">
                <button className="h-8 w-8 rounded-lg bg-white border border-gray-300"
                    onClick={() => {
                        setTextColor("white")
                        setLogoUrl("/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png")
                    }}
                ></button>
                <button className="h-8 w-8 rounded-lg bg-black border border-gray-300"
                    onClick={() => {
                        setTextColor("black")
                        setLogoUrl("/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png")
                    }}
                ></button>
            </div>
        </div>
    );
}