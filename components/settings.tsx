export function FontSize({
    setFontSize,
    fontSize,
    setPXY,
    setFontWeight,
}: {
    setFontSize: any;
    fontSize: number;
    setPXY: any;
    setFontWeight: any;
}) {
    return (
        <div>
            <div className="space-y-1 mb-4">
                <h2 className="text-xl font-semibold">Tamanho da fonte</h2>
            </div>
            <div className="flex gap-4">
                <button
                    className={`
                    py-2 px-4 rounded-full bg-transparent border border-gray-300
                    transition-all duration-500
                    hover:bg-seashell-700 hover:border-deluge-600
                    ${fontSize === 16 ? "bg-deluge-700 border-deluge-300" : ""}
                `}
                    style={{
                        backgroundColor: `${fontSize === 16 ? "#865CA7" : ""}`,
                    }}
                    onClick={() => {
                        console.log(fontSize);
                        setFontSize(16);
                        setPXY("px-3 py-4");
                        setFontWeight("bold");
                    }}
                >
                    Pequeno
                </button>
                <button
                    className={`
                    py-2 px-4 rounded-full bg-transparent border border-gray-300
                    transition-all duration-500
                    hover:bg-seashell-700 hover:border-deluge-600
                    ${fontSize === 24 ? "bg-deluge-700" : ""}
                `}
                    style={{
                        backgroundColor: `${fontSize === 24 ? "#865CA7" : ""}`,
                    }}
                    onClick={() => {
                        console.log(fontSize);
                        setFontSize(24);
                        setPXY("px-5 py-6");
                        setFontWeight("extrabold");
                    }}
                >
                    Grande
                </button>
            </div>
        </div>
    );
}

export function Borders({
    border,
    setBorder,
}: {
    border: string;
    setBorder: any;
}) {
    return (
        <div>
            <div className="space-y-1 mb-4">
                <h2 className="text-xl font-semibold">Bordas</h2>
            </div>
            <div className="flex gap-4">
                <button
                    className={`
                    py-2 px-4 rounded-full bg-transparent border border-gray-300
                    transition-all duration-500
                    hover:bg-seashell-700 hover:border-deluge-600
                    ${
                        border === "rounded-2xl"
                            ? "bg-deluge-700 border-deluge-300"
                            : ""
                    }
                `}
                    style={{
                        backgroundColor: `${
                            border === "rounded-2xl" ? "#865CA7" : ""
                        }`,
                    }}
                    onClick={() => {
                        setBorder("rounded-2xl");
                    }}
                >
                    Arredondadas
                </button>
                <button
                    className={`
                    py-2 px-4 rounded-full bg-transparent border border-gray-300
                    transition-all duration-500
                    hover:bg-seashell-700 hover:border-deluge-600
                    ${
                        border === "rounded-none"
                            ? "bg-deluge-700 border-deluge-300"
                            : ""
                    }
                `}
                    style={{
                        backgroundColor: `${
                            border === "rounded-none" ? "#865CA7" : ""
                        }`,
                    }}
                    onClick={() => {
                        setBorder("rounded-none");
                    }}
                >
                    Retas
                </button>
            </div>
        </div>
    );
}

export function TextNLogo({
    setTextColor,
    setLogoUrl,
}: {
    setTextColor: any;
    setLogoUrl: any;
}) {
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
                <button
                    className="h-8 w-8 rounded-lg bg-white border border-gray-300"
                    onClick={() => {
                        setTextColor("white");
                        setLogoUrl(
                            "/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_White.png"
                        );
                    }}
                ></button>
                <button
                    className="h-8 w-8 rounded-lg bg-black border border-gray-300"
                    onClick={() => {
                        setTextColor("black");
                        setLogoUrl(
                            "/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png"
                        );
                    }}
                ></button>
            </div>
        </div>
    );
}
