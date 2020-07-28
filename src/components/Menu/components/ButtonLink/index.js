import React from "react";

function ButtonLink() {
    //props => {className: "o que alguém passar", href: "/"}
    //console.log(props);
    return (
        <a href={props.href} className={props.className}>
            {/**Novo vídeo*/}
            {props.children}
        </a>
    );
}

export default ButtonLink;