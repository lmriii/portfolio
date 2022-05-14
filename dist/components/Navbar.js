import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import {Navlink} from 'react-router-dom'
export default function Navbar() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, null),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#intro" }, "Welcome")),
            React.createElement("li", null,
                React.createElement("a", { href: "#one" }, "Who we are")),
            React.createElement("li", null,
                React.createElement("a", { href: "#two" }, "What we do")),
            React.createElement("li", null,
                React.createElement("a", { href: "#three" }, "Get in touch")))));
}
;
