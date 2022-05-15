import React from "react";
import { Link } from 'react-router-dom';



export default function WhoIs() {
    return (
        <>
            <section className="wrapper style1 ">
                
                <img src="images/memememe.gif" alt="Michael" data-position="25% 25%" width="437" />
                <div className="content">
                    <div className="inner">
                        <h2>Resume</h2>
                        <p>I've been leading a very productive life. Living with the motto "the only way to move (get promoted) from this position is to own it and do it like no one else has done it before."</p>
                        <ul className="actions">
                            <li><Link to='/assets/Michael_Rivera.pdf' target="_blank" rel="noreferrer" download className="button">Download PDF</Link>       </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}