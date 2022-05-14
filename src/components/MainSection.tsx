import React from "react";
// import image1 from 'src/images/pic01.jpg'

// src\images\

// interface Props {
//     image1: string;

// }

export default function MainSection() {
    return (
        <>
            <div id="wrapper">


                <section id="intro" className="wrapper style1 fullscreen fade-up">
                    <div className="inner">
                        <h1>Hi! This is Michael</h1>
                        <p>I am a Junior Software Developer. I'm open for work.</p>
                        <ul className="actions">
                            <li><a href="#one" className="button scrolly">Learn more</a></li>
                        </ul>
                    </div>
                </section>


                <section id="one" className="wrapper style2 spotlights">
                    <section>
                        <a href="#" className="image"><img src={process.env.PUBLIC_URL + '/images/pic01.jpg'} alt="" data-position="center center" /></a>
                        <div className="content">
                            <div className="inner">
                                <h2>Sed ipsum dolor</h2>
                                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                                <ul className="actions">
                                    <li><a href="generic.html" className="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a href="#" className="image"><img src="images/pic02.jpg" alt="" data-position="top center" /></a>
                        <div className="content">
                            <div className="inner">
                                <h2>Feugiat consequat</h2>
                                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                                <ul className="actions">
                                    <li><a href="generic.html" className="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a href="#" className="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a>
                        <div className="content">
                            <div className="inner">
                                <h2>Resume</h2>
                                <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                                <ul className="actions">
                                    <li><a href="generic.html" className="button">Learn more</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>


                <section id="two" className="wrapper style3 fade-up">
                    <div className="inner">
                        <h2>What we do</h2>
                        <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
                        <div className="features">
                            <section>
                                <span className="icon solid major fa-code"></span>
                                <h3>Lorem ipsum amet</h3>
                                <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                            </section>
                            <section>
                                <span className="icon solid major fa-lock"></span>
                                <h3>Aliquam sed nullam</h3>
                                <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                            </section>
                            <section>
                                <span className="icon solid major fa-cog"></span>
                                <h3>Sed erat ullam corper</h3>
                                <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                            </section>
                            <section>
                                <span className="icon solid major fa-desktop"></span>
                                <h3>Veroeros quis lorem</h3>
                                <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                            </section>
                            <section>
                                <span className="icon solid major fa-link"></span>
                                <h3>Urna quis bibendum</h3>
                                <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                            </section>
                            <section>
                                <span className="icon major fa-gem"></span>
                                <h3>Aliquam urna dapibus</h3>
                                <p>Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.</p>
                            </section>
                        </div>
                        <ul className="actions">
                            <li><a href="generic.html" className="button">Learn more</a></li>
                        </ul>
                    </div>
                </section>


                <section id="three" className="wrapper style1 fade-up">
                    <div className="inner">
                        <h2>Get in touch</h2>
                        <p>Hey! You made it this far, may as well connect and learn from each other. (There will be a whole lot more learning from my end but I do look forward to the day that I can pass it along to others.)</p>
                        <div className="split style1">
                            <section>
                                <form method="post" action="#">
                                    <div className="fields">
                                        <div className="field half">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" />
                                        </div>
                                        <div className="field half">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" id="email" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" id="message" ></textarea>
                                        </div>
                                    </div>
                                    <ul className="actions">
                                        <li><a href="mailto:mrwolf.lmriii@gmail.com?subject=Let's Connect!" className="button submit">Send Message</a></li>
                                    </ul>
                                </form>
                            </section>
                            <section>
                                <ul className="contact">
                                    <li>
                                        <h3>Address</h3>
                                        <span>Central Phoenix<br />
                                            Phoenix, AZ 85008<br />
                                            USA</span>
                                    </li>
                                    <li>
                                        <h3>Email</h3>
                                        <a href="#">mrwolf.lmriii@gmail.com</a>
                                    </li>
                                    <li>
                                        <h3>Phone</h3>
                                        <span>(206) 235-7087</span>
                                    </li>
                                    <li>
                                        <h3>Social</h3>
                                        <ul className="icons">
                                            {/* <li><a href="#" target="_blank" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li> */}
                                            {/* <li><a href="#" target="_blank" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li> */}
                                            <li><a href="https://github.com/lmriii" target="_blank" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                                            <li><a href="https://www.instagram.com/mrwolf.lmriii/" target="_blank" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                            <li><a href="https://www.linkedin.com/in/michael-rivera-6030a7168/" target="_blank" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}