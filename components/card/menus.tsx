// import { useEffect, useRef } from "react";

// export default function App() {
//     const swiperRef = useRef<any>(null);

//     useEffect(() => {
//         // Register Swiper web component
//         register();

//         if (swiperRef.current === null) {
//             return;
//         }

//         // Object with parameters
//         const params = {
//             slidesPerView: 3,
//             breakpoints: {
//                 768: {
//                     slidesPerView: 1,
//                 },
//             },
//             navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//             },
//         };

//         // Assign it to swiper element
//         Object.assign(swiperRef.current, params);

//         // initialize swiper
//         swiperRef.current.initialize();
//     }, []);

//     return (
//         <div>
//             <swiper-container ref={swiperRef} slides-per-view={1}>
//                 <swiper-slide>
//                     <div className="w-[900px] h-48 bg-amber-200"></div>
//                 </swiper-slide>
//                 <swiper-slide>Slide 2</swiper-slide>
//                 <swiper-slide>Slide 3</swiper-slide>
//             </swiper-container>
//             <button onClick={() => swiperRef.current?.swiper.slidePrev()}>
//                 Previous
//             </button>
//             <button onClick={() => swiperRef.current?.swiper.slideNext()}>
//                 Next
//             </button>
//         </div>
//     );
// }
