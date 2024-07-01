"use client";

export default function DateControllers({
    date,
    setDate,
    showDay,
    setShowDay,
}: {
    date: string;
    setDate: any;
    showDay: boolean;
    setShowDay: any;
}) {
    return (
        <div className="flex flex-col gap-2 p-4 rounded-xl bg-neutral-700/60">
                        <label className="flex flex-col font-bold text-xl">
                            <span className="mb-2">Data</span>
                            <input
                                className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-neutral-800 focus:bg-neutral-700 rounded-lg transition duration-300"
                                value={date}
                                type="date"
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                        <div className="flex flex-row gap-3 font-bold text-base">
                            <span className="mb-2">Mostrar dia</span>
                            <div className="inline-flex items-center">
                                <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
                                    <input
                                        id="switch-component"
                                        type="checkbox"
                                        className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-gray-700 checked:bg-deluge-600 peer-checked:border-deluge-600 peer-checked:before:bg-deluge-600"
                                        onChange={() =>
                                            setShowDay(!showDay)
                                        }
                                        defaultChecked
                                    />
                                    <label
                                        htmlFor="switch-component"
                                        className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-gray-700 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
                                    >
                                        <div
                                            className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                                            data-ripple-dark="true"
                                        ></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}