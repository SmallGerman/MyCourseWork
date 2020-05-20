import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-4 col-12">
                            <a href="/">
                                <div className="logo">
                                    <span>ЛяЯка</span>
                                    <p>
                                        Beauty Salon
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-5 col-12">
                            <p className="credits">
                                2020 / All rights are reserved
                            </p>
                        </div>
                        <div className="col-xl-2 col-lg-4 col-md-4 col-sm-3 col-8">
                            <div className="socials d-flex justify-content-end">
                                <a href="https://vk.com/arsenyakym"  rel="noopener noreferrer" target="_blank">
                                    <img src="files/imgs/vk.png" alt="vk">

                                    </img>
                                </a>
                                <a href="https://www.instagram.com/apcikk/"  rel="noopener noreferrer" target="_blank">
                                    <img src="files/imgs/insta.png" alt="instagram">

                                    </img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
