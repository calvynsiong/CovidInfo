import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {AiFillGithub} from "react-icons/ai"

const Footer = () => {
    return (
        <footer>
            <Row>
                <Col sm="12" md="4" lg="2">
                    <img src="/images/logo.svg" alt="vaccine info logo" />
                    <p><small>
                        Made by Michelle Swolfs, Nathan Lew, Calvyn Siong, Juneau Lim
                    </small></p>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer
