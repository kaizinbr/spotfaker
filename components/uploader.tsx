"use client";

import { useState, useCallback, useMemo, ChangeEvent } from "react";
import toast from "react-hot-toast";
import LoadingDots from "./loading-dots";
import { PutBlobResult } from "@vercel/blob";
import { extractColors } from "extract-colors";

export default function Uploader({ setCoverUrl, setColors }: { setCoverUrl: any, setColors: any}) {
    const [data, setData] = useState<{
        image: string | null;
    }>({
        image: null,
    });
    const [file, setFile] = useState<File | null>(null);
    

    const [dragActive, setDragActive] = useState(false);

    const onChangePicture = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const file =
                event.currentTarget.files && event.currentTarget.files[0];
            if (file) {
                if (file.size / 1024 / 1024 > 50) {
                    toast.error("File size too big (max 50MB)");
                } else {
                    setFile(file);
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        setData((prev) => ({
                            ...prev,
                            image: e.target?.result as string,
                        }));
                    };
                    reader.readAsDataURL(file);
                }
            }
        },
        [setData]
    );

    const [saving, setSaving] = useState(false);

    const saveDisabled = useMemo(() => {
        return !data.image || saving;
    }, [data.image, saving]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            fetch("/api/upload", {
                method: "POST",
                headers: {
                    "content-type": file?.type || "application/octet-stream",
                },
                body: file,
            }).then(async (res) => {
                if (res.status === 200) {
                    const { url } = (await res.json()) as PutBlobResult;
                    setCoverUrl(url);
                    extractColors(url, { crossOrigin: "anonymous" })
                        .then((colors) => {
                            console.log(colors);
                            setColors(colors.map((c) => c.hex));
                        })
                        .catch(console.error);
                } else {
                    const error = await res.text();
                    toast.error(error);
                }
                setSaving(false);
            });
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <form className="grid gap-6 w-[316px] " onSubmit={onSubmit}>
            <div>
                <div className="space-y-1 mb-4">
                    <h2 className="text-xl font-semibold">Capa</h2>
                    <p className="text-sm text-seashell-400">
                        Formatos: .png, .jpg
                    </p>
                </div>
                <label
                    htmlFor="image-upload"
                    className="group relative mt-2 flex h-44 cursor-pointer flex-col items-center justify-center rounded-lg  border-seashell-200 bg-seashell-500  transition-all hover:bg-gray-50"
                >
                    <div
                        className="absolute z-[5] h-full w-full rounded-md"
                        onDragOver={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setDragActive(true);
                        }}
                        onDragEnter={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setDragActive(true);
                        }}
                        onDragLeave={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setDragActive(false);
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setDragActive(false);

                            const file =
                                e.dataTransfer.files && e.dataTransfer.files[0];
                            if (file) {
                                if (file.size / 1024 / 1024 > 50) {
                                    toast.error("File size too big (max 50MB)");
                                } else {
                                    setFile(file);
                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                        setData((prev) => ({
                                            ...prev,
                                            image: e.target?.result as string,
                                        }));
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }
                        }}
                    />
                    <div
                        className={`${
                            dragActive ? "border-2 border-black" : ""
                        } absolute z-[3] flex h-full w-full flex-col items-center justify-center rounded-md px-10 transition-all ${
                            data.image
                                ? "bg-seashell-500/80 opacity-0 hover:opacity-100 hover:backdrop-blur-md"
                                : "bg-seashell-800 opacity-100 hover:bg-gray-700"
                        }`}
                    >
                        <svg
                            className={`${
                                dragActive ? "scale-110" : "scale-100"
                            } h-7 w-7 text-seashell-300 transition-all duration-75 group-hover:scale-110 group-active:scale-95`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                            <path d="M12 12v9"></path>
                            <path d="m16 16-4-4-4 4"></path>
                        </svg>
                        <p className="mt-2 text-center text-sm text-seashell-300">
                            Arraste um arquivo ou clique aqui
                        </p>
                        <span className="sr-only">Photo upload</span>
                    </div>
                    {data.image && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={data.image}
                            alt="Preview"
                            className="h-full w-full rounded-md object-top object-cover"
                        />
                    )}
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                        id="image-upload"
                        name="image"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={onChangePicture}
                    />
                </div>
            </div>

            <button
                disabled={saveDisabled}
                className={`${
                    saveDisabled
                        ? "cursor-not-allowed border-seashell-300 bg-seashell-400 text-seashell-700"
                        : "border-deluge-600 bg-deluge-600 text-seashell-50 hover:bg-seashell-500 Z"
                } flex h-10 w-full items-center justify-center rounded-full border text-sm transition-all duration-500 focus:outline-none`}
            >
                {saving ? (
                    <LoadingDots color="#808080" />
                ) : (
                    <p className="text-sm">Enviar</p>
                )}
            </button>
        </form>
    );
}
