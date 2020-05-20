import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const mapState = { center: [50.76, 75.64], zoom: 9, controls: [] };

export default class CreateUser extends Component {
    constructor(props) {
        super(props);


        this.state = {
            username: ''
        }
    }

    render() {
        return (
            <div>
                <section className="care">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="opinion">
                                    <h6>
                                        Нам важлива ваша думка
                                    </h6>
                                    <p>
                                        Якщо у вас виникли питання на рахунок роботи салону, зауваження чи пропозиції, пишіть нам на електронну почту, надсилайте фотографії в менеджери або телефонуйте.
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3">
                                <div className="mail">
                                    <a className="mailto"
                                       href="mailto:Formafitnessclub@mail.ru">TypaBusinessMan1488228@gmail.com</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="phone d-flex align-items-center">
                                    <img className="tel" src="/files/imgs/phone.png" alt="care">

                                    </img>
                                        <a href="tel:89690402000">8-800-555-35-35</a>
                                        <img className="whatsapp" src="/files/imgs/whatsapp.png" alt="care">

                                        </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-12 no-padding">
                                <div className="yandex-map">
                                    <YMaps>
                                        <div>
                                            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}
                                                 width='100%'
                                                 state={mapState}
                                            />
                                        </div>
                                    </YMaps>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="club-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5">
                                <div className="club-inform">
                                    <h2>
                                        Салон краси ЛяЯка
                                    </h2>
                                    <p className="club-inform__location">
                                        Розташований на другому поверсі окремого будинку, в п'яти хвилинах ходьби від станції метро «Бориспільська»
                                    </p>
                                    <p className="club-inform__work">
                                        Клуб працює щодня з 9 до 21:00
                                    </p>
                                </div>
                                <div className="work-offer">
                                    <p className="work-offer__title">
                                        Пропозиція про співпрацю
                                    </p>
                                    <p className="work-offer__text">
                                        Ми завжди раді бачити в своїй команді професіоналів.
                                        Надсилайте своє резюме до нас на пошту
                                    </p>
                                    <a className="mailto"
                                       href="mailto:Formafitnessclub@mail.ru">TypaBusinessMan1488228@gmail.com</a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="loc-photo">
                                    <img src="/files/imgs/IMG_1419.png" alt="location">

                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
