import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";
import Image from "next/image";
import { AlignJustify, X } from "lucide-react";

interface itemProps {
    id: string;
    image: string;
    name: string;
    type: string;
    artist?: string;
}

export const Item = ({
    item,
    setData,
    data,
    type
}: {
    item: itemProps;
    setData?: any;
    data?: any;
    type: string;
}) => {
    const controls = useDragControls();
    const y = useMotionValue(0);
      const boxShadow = useRaisedShadow(y);

    return (
        <Reorder.Item value={item} id={item.id} style={{ boxShadow, y }}>
            <div className="flex flex-row items-center justify-between p-2 pr-4 cursor-grab rounded-lg w-full bg-neutral-600 transition-all duration-300">
                <div className="flex flex-row  items-center">
                    <Image
                        className={`
                                w-10 h-10 rounded-full
                                ${type === "track" ? "rounded-md" : "rounded-full"}
                            `}
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                    /><div className="flex flex-col items-start justify-center">
                        
                        <p className="ml-3 text-left line-clamp-1 break-all">{item.name}</p>
                        {item.artist && (
                            <p className="ml-3 text-left text-xs text-neutral-300 line-clamp-1 break-all">
                                {item.artist}
                            </p>
                        )}

                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <AlignJustify
                        className="ml-auto"
                        size={24}
                        color="#ffffff"
                    />
                    <X
                        className="ml-4 cursor-pointer"
                        size={24}
                        color="#ffffff"
                        onClick={() => {
                            if (setData) {
                                setData((prevdata: any) =>
                                    prevdata.filter(
                                        (a: any) => a.id !== item.id
                                    )
                                );
                            }
                        }}
                    />
                </div>
            </div>
        </Reorder.Item>
    );
};
