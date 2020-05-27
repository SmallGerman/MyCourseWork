import React, { Component } from "react";

export default class CreateOffers extends Component {
    render() {
        return (
            <div>
                <section className="cards">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <h4>
                                    Бонусна карта
                                </h4>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <img src="files/imgs/cards.png" alt="cards" className="cards-look">

                                </img>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="card-information">
                                    <p className="card-information__title">
                                        Агов молодик, <span>красунчик!</span>
                                    </p>
                                    <p className="card-information__text">
                                        На всі клубні карти <span>-15%</span> геям, лесбіянкам, трансгендерам, блогерам.
                                    </p>
                                    <a href="https://imgur.com/a/AI1AO71" className="request btn order">
                                        залишити заявку
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
