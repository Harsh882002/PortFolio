import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Gallery = () =>{

const images = [
    'bg_porfolio.jpg',
    'my img1.png',
    'my_pic.JPG'
];

    return(
        <>
<Swiper 
modules={[ Autoplay, Pagination, Navigation]}
autoplay={{delay:3000, disableOnInteraction: false}}
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



        </>
    )
}