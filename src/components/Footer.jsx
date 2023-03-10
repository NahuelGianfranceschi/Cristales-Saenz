import React from "react"
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Footerf = () => <footer className="footerdiv">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Cristales Saenz</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                 typesetting</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                
                <ul className="list-unstyled">
                    <li>< FontAwesomeIcon icon={brands('whatsapp')}/><p className="textoiconos">WhatsApp: </p> </li>
                    <li>< FontAwesomeIcon icon={brands('instagram')}/><p className="textoiconos"> Instagram: </p></li>
                    <li>< FontAwesomeIcon icon={regular('envelope')}/><p className="textoiconos">Mail: </p></li>
                </ul>
            </div>

            
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a href="https://mdbootstrap.com/"> CristalesSaenz.com</a>
    </div>

</footer>

export default Footerf