import React from "react";




export default function GetInTouch() {

    return (
        <>
            <section id="three" className="wrapper style1 fade-up inner">
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
        </>

    );
}