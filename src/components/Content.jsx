import React from "react";
import Button from 'react-bootstrap/Button';
import { Row } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "./Card";


function Content() {

    return (
        <body>
            <section className="colored-section" id="title">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 class="big-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                            <button type="button" class="btn btn-dark btn-lg download-button"><i class="bi bi-cart3"></i> Buy</button>
                        </div>
                        <div className="col-lg-6">
                            <div className="phoneBack">
                                <img className="phoneImage" src="./images/pngegg.png" alt="phone"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="white-section" id="features">
                <div className="container-fluid">
                    
                </div>
            </section>

            <section className="showCardSection">
                <div class="row justify-content-evenly">
                    {[...Array(18)].map((e, i) => {
                        return <Card numImg={i+1} />
                    })}

                </div>
            </section>


        </body>
    );
}

export default Content;