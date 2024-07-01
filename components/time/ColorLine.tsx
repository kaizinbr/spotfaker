"use client";

export default function ColorLine({
    colors,
    setLineColor,
}: {
    colors: string[];
    setLineColor: any;
}) {
    return (
        <div className="flex flex-col p-4 rounded-xl bg-neutral-700/60">
            <span className="mb-2 text-xl font-bold">Cor da linha</span>
            <div className="flex flex-row flex-wrap gap-8 w-full justify-center">
                {colors.map((color, i) => (
                    <button
                        key={i}
                        className="w-10 h-10 rounded-lg"
                        style={{ backgroundColor: color }}
                        onClick={() => setLineColor(color)}
                    />
                ))}
            </div>
        </div>
    );
}
