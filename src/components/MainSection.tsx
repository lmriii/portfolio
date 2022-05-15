import React from "react";
import { Link } from 'react-router-dom';
// import '../assets/js/main'
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
                        <p>I am a Junior Software Developer.</p>
                        <p>I started modifying simple HTML sites a handful of years ago. Between those experiences and further studies I became pretty decent at it. </p>
                        <ul className="actions">
                            <li><a href="#one" className="button scrolly">Projects</a></li>
                            <li><a href="#two" className="button scrolly">I'm a real person</a></li>
                            <li><a href="#three" className="button scrolly">Let's connect!</a></li>
                        </ul>
                    </div>
                </section>


                <section id="one" className="wrapper style2 spotlights">
                    <section>
                        <a href="https://photo-site-reactjs.netlify.app/" target="_blank" rel="noreferrer" className="image d-none d-md-block"><img src={process.env.PUBLIC_URL + '/images/cksite.png'} alt="Photographer's Site"  data-position="center center" style={{width:437 }} /></a>
                        <div className="content">
                            <div className="inner">
                                <h2>Photographer's Portfolio in React</h2>
                                <h4>Project that helped me graduate with honors</h4>
                                <p>Inspired by my wife's passion for photography I decided to tackle and create a portfolio site for photographers.</p>
                                <ul className="actions">
                                    <li><a href="https://photo-site-reactjs.netlify.app/" target="_blank" rel="noreferrer" className="button">Visit Site</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a href="http://www.midtownprimary.com/" target="_blank" rel="noreferrer" className="image d-none d-md-block"><img src='/images/schoolsite3.png' alt="Photographer's Site"  data-position="center center" style={{width:437 }} /></a>
                        <div className="content">
                            <div className="inner">
                                <h2>Photographer's Portfolio in React</h2>
                                <h4>Project that helped me graduate with honors</h4>
                                <p>Inspired by my wife's passion for photography I decided to tackle and create a portfolio site for photographers.</p>
                                <ul className="actions">
                                    <li><a href="http://www.midtownprimary.com/" target="_blank" rel="noreferrer" className="button">Visit Site</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <a href="http://www.midtownprimary.com/" target="_blank" rel="noreferrer" className="image d-none d-md-block"><img src='/images/schoolsite3.png' alt="Photographer's Site"  data-position="center center" style={{width:437 }} /></a>
                        <div className="content">
                            <div className="inner">
                                <h2>School Website</h2>
                                <p>Site for school made with  Wordpress/Elementor. Learned many things with this. It is amazing the amount of things required by governments and grant people.</p>
                                <ul className="actions">
                                    <li><a href="http://www.midtownprimary.com/" target="_blank" rel="noreferrer" className="button">Visit Site</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section id="two">
                        <span className="image d-none d-md-block"><img src="images/embeme.jpg" alt="" data-position="top center" width="437" /></span>
                        <div className="content">
                            <div className="inner">
                                <h2>What you won't find in my resume</h2>
                                <p>I found myself working at a small k-4 charter school where I would handle their IT needs. There I started introducing the use of technology to the school. When I started working there the ratio was 2-3 students per computer and these were rarely used. Now we are a 1:1 school and even the most anti-technology teacher uses them on a daily basis. I’ve worked the summer camps, getting the kids exposed to coding with code.org and CodeSpark. With the kids successes here I’ve been able to introduce a time where I can work with the kids on a weekly basis during the school year. To me this is not just a great way to introduce technology into these kids lives but it’s also a way to give them options for a better future considering 20% of them experience homelessness.</p>
                                <p>With these experiences at work and playing with my daughter for the past 3 years (since she was 4) I started to look into a career change more and more. Last May I started my self-taught journey in earnest but I was missing the community and accountability partners. Started researching bootcamps and ended up enrolling in a Nucamp's bootcamp. I was kind of crazy and risky considering I had a full-time job, a 6 year old and an 7 month pregnant wife.</p>
                                {/* <ul className="actions">
                                    <li><a href="generic.html" className="button">Learn more</a></li>
                                </ul> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <span className="image d-none d-md-block"><img src="images/memememe.gif" alt="Michael" data-position="25% 25%" width="437" /></span>
                        <div className="content">
                            <div className="inner">
                                <h2>Resume</h2>
                                <p>I've been leading a very productive life. Living with the motto stating that "only way to move (get promoted) from this position is to own it and do it like no one else has done it before."</p>
                                <ul className="actions">
                                    <li><Link to='/assets/Michael_Rivera.pdf' target="_blank" rel="noreferrer" download className="button">Download PDF</Link>       </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>


                {/* <section id="two" className="wrapper style3 fade-up">
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
                </section> */}


                <section id="three" className="wrapper style1 fade-up">
                    <div className="inner">
                        <h2>Get in touch</h2>
                        <p>Hey! You made it this far, may as well connect and learn from each other. (There will be a lot more learning from my end but I do look forward to the day that I can pass it along to others.)</p>
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
                                        <a href="mailto:mrwolf.lmriii@gmail.com?subject=Let's Connect!">mrwolf.lmriii@gmail.com</a>
                                    </li>
                                    <li>
                                        <h3>Phone</h3>
                                        <span>(206) 235-7087</span>
                                    </li>
                                    <li>
                                        <h3>Social</h3>
                                        <ul className="icons">
                                            {/* <li><a href="#" target="_blank" rel="noreferrer" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li> */}
                                            {/* <li><a href="#" target="_blank" rel="noreferrer" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li> */}
                                            <li><a href="https://github.com/lmriii" target="_blank" rel="noreferrer" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                                            <li><a href="https://www.instagram.com/mrwolf.lmriii/" target="_blank" rel="noreferrer" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                            <li><a href="https://www.linkedin.com/in/michael-rivera-6030a7168/" target="_blank" rel="noreferrer" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
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