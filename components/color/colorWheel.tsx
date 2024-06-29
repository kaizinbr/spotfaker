import React, { useState } from "react";
import Sketch from "@uiw/react-color-sketch";

function Demo({ setBgColor }: { setBgColor: any }) {
    const [hex, setHex] = useState("#fff");
    const [disableAlpha, setDisableAlpha] = useState(true);
    return (
        <div
            className={`
                    w-[348px]  
                    px-4          
                `}
        >
            <div className="space-y-1 mb-4">
                <h2 className="text-xl font-semibold">Cor de fundo</h2>
                <p className="text-sm text-gray-500">Formatos: .png, .jpg</p>
            </div>
            <Sketch
                style={{
                    borderRadius: 6,
                    border: "1px rgb(209 213 219) solid",
                    boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                    width: 320,
                }}
                color={hex}
                disableAlpha={disableAlpha}
                onChange={(color) => {
                    setHex(color.hex);
                    console.log(color.hex);
                    setBgColor(color.hex);
                }}
            />
            {/* <button onClick={() => setDisableAlpha(!disableAlpha)}>
                disableAlpha={disableAlpha.toString()}
            </button> */}
        </div>
    );
}

export default Demo;
