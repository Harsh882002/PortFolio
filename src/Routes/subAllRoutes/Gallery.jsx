import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Gallery = () =>{

const images = [
    '/gallery/g1.jpg',
    '/gallery/g2.jpg',
    '/gallery/g3.jpg',
    '/gallery/g4.jpg',
    '/gallery/g5.jpg',
    '/gallery/g6.jpg',
    '/gallery/g7.jpg',
    '/gallery/g8.jpg',
    '/gallery/g9.jpg',
    '/gallery/g10.jpg'
];

    return(
        <>
<Swiper 
modules={[ Autoplay, Pagination, Navigation]}
autoplay={{delay:1000, disableOnInteraction: false}}
pagination={{clickable: true}}
navigation={true}
loop={true}
className="mySwiper"

>
{images.map((image,index) =>(
        <SwiperSlide key={index} >
<img src={image} alt={`Slide ${index}`} />
    </SwiperSlide>
))}
</Swiper>

<h2>DURING SESSION IMAGES </h2>


        </>
    )
}