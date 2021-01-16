import React from 'react'
import TestimonialCarousel from './TestimonialCarousel';

const Testimonial = () => {
    return (
        <div className="testimonials">
            <h1>my happy clients</h1>
            <div className="container">
                <div className="testimonial-content">
                <TestimonialCarousel />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
