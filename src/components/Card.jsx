import React from "react";
// import ImageCcontent from '/images/Image-content/image-site-1.jpg';


function Card(props) {
    
    return (
        <div class="card border-secondary col-lg-3 col-md-4 col-sm-5 cardPadding">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <img className="imageContent" src={'./images/Image-content/image-site-' + props.numImg +'.jpg'}></img>
                <h5 class="card-title">Gravida neque</h5>
                <div class="container">
                    <div class="row row-cols-1 row-cols-lg-2 align-middle">
                        <div class="col">
                            <p class="card-text">Ut ornare lectus sit amet est placerat.</p>
                        </div>
                        <div class="col cardButtonShop">
                            <a href="#" class="btn btn-outline-secondary cardButtonShop"><i class="bi bi-cart3"></i>&nbsp;Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;