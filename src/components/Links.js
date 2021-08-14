import React from "react";


function Links(props){
    return (
        <div id= "Links">
            <h3>Links</h3>
        <a href = {props.GitLink}>https://github.com/liza</a>
        <a href = {props.linkedin}>https://www.linkedin.com/in/liza/</a>
            </div>
    )
}

export default Links;
