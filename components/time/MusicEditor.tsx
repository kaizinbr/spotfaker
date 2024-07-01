"use client";

export default function MusicEditor({
    musica1,
    handleMusica1Change,
    musica2,
    handleMusica2Change,
    musica3,
    handleMusica3Change,
    musica4,
    handleMusica4Change,
    musica5,
    handleMusica5Change,
}: {
    musica1: string;
    handleMusica1Change: any;
    musica2: string;
    handleMusica2Change: any;
    musica3: string;
    handleMusica3Change: any;
    musica4: string;
    handleMusica4Change: any;
    musica5: string;
    handleMusica5Change: any;
}) {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
            <span className="mb-2 text-xl font-bold">Músicas favoritas</span>

            <label className="flex flex-col text-base font-bold">
                Música 1:
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={musica1}
                    onChange={handleMusica1Change}
                    placeholder="Música 1"
                />
            </label>
            <label className="flex flex-col text-base font-bold">
                Música 2:
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={musica2}
                    onChange={handleMusica2Change}
                    placeholder="Música 2"
                />
            </label>

            <label className="flex flex-col text-base font-bold">
                Música 3:
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={musica3}
                    onChange={handleMusica3Change}
                    placeholder="Música 3"
                />
            </label>
            <label className="flex flex-col text-base font-bold">
                Música 4:
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={musica4}
                    onChange={handleMusica4Change}
                    placeholder="Música 4"
                />
            </label>
            <label className="flex flex-col text-base font-bold">
                Música 5:
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={musica5}
                    onChange={handleMusica5Change}
                    placeholder="Música 5"
                />
            </label>
        </div>
    );
}
