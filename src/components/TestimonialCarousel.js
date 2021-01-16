import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import avatar1 from '../images/avatars/avatar-1.png';
import avatar2 from '../images/avatars/avatar-2.png';
import avatar3 from '../images/avatars/avatar-3.png';
import avatar4 from '../images/avatars/avatar-4.png';
import avatar5 from '../images/avatars/avatar-5.png';


const TestimonialCarousel = () => {
    return (
        <Carousel showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}>
            <>
                <img src={avatar1} alt="" />
                <div className="myCarousel">
                    <h3>Client 1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusantium? Similique animi iure distinctio.</p>
                </div>
            </>
            <>
                <img src={avatar2} alt="" />
                <div className="myCarousel">
                    <h3>Client 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusantium? Similique animi iure distinctio.</p>
                </div>
            </>
            <>
                <img src={avatar3} alt="" />
                <div className="myCarousel">
                    <h3>Client 3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusantium? Similique animi iure distinctio.</p>
                </div>
            </>
            <>
                <img src={avatar4} alt="" />
                <div className="myCarousel">
                    <h3>Client 4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusantium? Similique animi iure distinctio.</p>
                </div>
            </>
            <>
                <img src={avatar5} alt="" />
                <div className="myCarousel">
                    <h3>Client 5</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, accusantium? Similique animi iure distinctio.</p>
                </div>
            </>
        </Carousel>
    )
}

export default TestimonialCarousel
