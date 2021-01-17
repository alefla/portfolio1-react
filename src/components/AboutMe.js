import React from 'react';
import author from '../me.jpg';
const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author image"></img>
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                    <h1 className="about-heading">about me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia possimus animi laboriosam tempore.
                    <br />amet consectetur adipisicing elit. Quas mollitia possimus animi laboriosam tempore dolores voluptate porro sunt est.
                    voluptatev. <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas mollitia possimus animi laboriosam tempore dolores voluptate porro sunt est, culpa ratione deserunt rerum voluptatem qui ipsum quos! Reiciendis facere necessitatibus optio quam dolore pariatur maxime voluptatum asperiores, provident repudiandae quos!
                    </p>
                </div>
            </div>

        </div>
            
    )
}
export default AboutMe;