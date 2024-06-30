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
                <button className="h-8 w-8 rounded-lg bg-white "
                    onClick={() => {
                        setTextColor("white")
                        setLogoUrl("/logos/Spotify_Full_Logo_RGB_White.png")
                    }}
                ></button>
                <button className="h-8 w-8 rounded-lg bg-black "
                    onClick={() => {
                        setTextColor("black")
                        setLogoUrl("/logos/Spotify_Full_Logo_RGB_Black.png")
                    }}
                ></button>
            </div>
        </div>
    );
}