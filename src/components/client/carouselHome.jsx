'use client';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const tabSliders = [
        { src: "https://images.kikocosmetics.com/mediaObject/2024/collections/days-in-bloom/HP-App/Collection_DaysInBloom_HPDesktop/webp-resolutions/res-1920x600/Collection_DaysInBloom_HPDesktop.webp" },
        { src: "https://images.kikocosmetics.com/mediaObject/2024/Promo/promo-starry-eye-look/Promo_StarryEyeLook_HPDesktop/webp-resolutions/res-1920x600/Promo_StarryEyeLook_HPDesktop.webp" },
        { src: "https://images.kikocosmetics.com/mediaObject/2024/Promo/promo-institutional-beauty-festival/Promo_Institutional_HPDesktop/webp-resolutions/res-1920x600/Promo_Institutional_HPDesktop.webp" },
    ]

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {tabSliders.map((tab, i) => <Carousel.Item key={i}>
                <img src={tab.src} />
            </Carousel.Item>)
            }

        </Carousel>
    );
}
export default ControlledCarousel; 