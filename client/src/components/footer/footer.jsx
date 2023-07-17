import './footer.css'
import Logo from '../logo/logo'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope} from "react-icons/fa"
import { BsFillSendFill }from "react-icons/bs"

import React from 'react'

function Footer(){


    return (
        <>
            <div className="footer bg-light">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <Logo />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">
                                <a href='https://www.facebook.com/djalma.dida.almeida/'><FaFacebook /></a>
                                <a href='https://twitter.com/Edjalma_Almeida'><FaTwitter /></a>
                                <a href='https://www.instagram.com/dyda1991/'><FaInstagram /></a>
                                <a href='https://www.linkedin.com/in/edjalma-silva-de-almeida/'><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Voltar ao topo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Perfil</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contato</h5>
                            <p><FaPhone /> +55 12345-6789</p>
                            <p><FaEnvelope /> edjalmasalmeida@outlook.com</p>
                            <p> <BsFillSendFill /> Artur Nogueira, São Paulo.</p>
                        </div>
                    </div>
                </div>
                <div className='last-footer'>
                <p>Design By Edjalma Almeida</p>
                </div>
            </div>
           
        </>
    )
}

export default Footer