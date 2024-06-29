import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import {
    PrevButton,
    NextButton,
    usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import imageByIndex from "./imageByIndex";

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel();

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">Slide 1</div>
                <div className="embla__slide">Slide 2</div>
                <div className="embla__slide">Slide 3</div>
            </div>
        </div>
    );
}

type PropType = {
    slides: JSX.Element[];
    options?: EmblaOptionsType;
};

const EmblaCarousel2: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((s: any, i: any) => {
                            return (
                                <div key={i} className="w-[348px] ">
                                    {s}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="embla__buttons">
                <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                />
                <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                />
            </div>
        </>
    );
};

export default EmblaCarousel2;

// /* eslint-disable @next/next/no-img-element */
// import { useState } from "react";
// import {
//     BsFillArrowRightCircleFill,
//     BsFillArrowLeftCircleFill,
// } from "react-icons/bs";

// export default function Carousel({ slides }: { slides: any[] | string[] }) {
//     let [current, setCurrent] = useState(0);

//     let previousSlide = () => {
//         if (current === 0) setCurrent(slides.length - 1);
//         else setCurrent(current - 1);
//     };

//     let nextSlide = () => {
//         if (current === slides.length - 1) setCurrent(0);
//         else setCurrent(current + 1);
//     };

//     return (
//         <div className="overflow-hidden relative w-[800px]">
//             <div
//                 className={`
//                     flex transition ease-out duration-40
//                     z-10
//                 `}
//                 style={{
//                     transform: `translateX(-${current * 100}%)`,
//                 }}
//             >
//                 {slides.map((s: any, i: any) => {
//                     return <div key={i} className="w-[800px] mx-8">{s}</div>;
//                 })}
//             </div>

//             <div className="absolute z-0 top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
//                 <button onClick={previousSlide}>
//                     <BsFillArrowLeftCircleFill />
//                 </button>
//                 <button onClick={nextSlide}>
//                     <BsFillArrowRightCircleFill />
//                 </button>
//             </div>
//         </div>
//     );
// }
