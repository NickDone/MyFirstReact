import React, {Component} from 'react';
import img3 from './images/img3.jpg';
import img2 from './images/img2.jpg';
import img1 from './images/img1.jpg';
import ContentControl from '../contentcontrol/contentcontrol';
class MainControl extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={img1} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum....</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img2} alt="Second slide"/></div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img3} alt="Third slide"/>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next col-12"
                            href="#carouselExampleIndicators"
                            role="button"
                            data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div>
                    <ContentControl/>
                </div>
            </div>
        )
    }
}

export default MainControl;