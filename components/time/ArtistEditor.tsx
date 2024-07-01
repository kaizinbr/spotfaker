"use client";

export default function ArtistEditor(
    {
        artista1,
        handleArtista1Change,
        artista2,
        handleArtista2Change,
        artista3,
        handleArtista3Change,
        artista4,
        handleArtista4Change,
        artista5,
        handleArtista5Change,
    }: {
        artista1: string;
        handleArtista1Change: any;
        artista2: string;
        handleArtista2Change: any;
        artista3: string;
        handleArtista3Change: any;
        artista4: string;
        handleArtista4Change: any;
        artista5: string;
        handleArtista5Change: any;
    }
) {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                        <span className="mb-2 text-xl font-bold">
                            Artistas favoritos
                        </span>
                        <label className="flex flex-col text-base font-bold">
                            Artista 1:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista1}
                                onChange={handleArtista1Change}
                                placeholder="Artista 1"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 2:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista2}
                                onChange={handleArtista2Change}
                                placeholder="Artista 2"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 3:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista3}
                                onChange={handleArtista3Change}
                                placeholder="Artista 3"
                            />
                        </label>
                        <label className="flex flex-col text-base font-bold">
                            Artista 4:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista4}
                                onChange={handleArtista4Change}
                                placeholder="Artista 4"
                            />
                        </label>

                        <label className="flex flex-col text-base font-bold">
                            Artista 5:
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={artista5}
                                onChange={handleArtista5Change}
                                placeholder="Artista 5"
                            />
                        </label>
                    </div>
    );
}