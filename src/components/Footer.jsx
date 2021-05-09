import React from 'react';
import {AiFillGithub} from "react-icons/ai"

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div>
                <h2>Made by Calvyn, Juneau, Michelle and Nathan</h2>
                <p>With data gathered from<a href=" https://covid19.mathdro.id/api" target="blank"> https://covid19.mathdro.id/api</a> and <a href="https://api.opencovid.ca" target="blank">https://api.opencovid.ca</a></p>
                <a href="https://github.com/calvynsiong/TO-Hacks-hackathon/tree/Statistics" target="blank"><AiFillGithub></AiFillGithub> Github Repo</a>
            </div>
            </footer>
            </>
    )
}

export default Footer
