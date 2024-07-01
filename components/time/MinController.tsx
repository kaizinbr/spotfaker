"use client";

export default function MinController({
    minutos,
    setMinutos,
}: {
    minutos: number;
    setMinutos: any;
}) {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
            <label className="flex flex-col font-bold text-xl">
                <span className="mb-2">Minutos</span>
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                    value={minutos}
                    type="number"
                    onChange={(e) => setMinutos(e.target.valueAsNumber)}
                />
            </label>
        </div>
    );
}
