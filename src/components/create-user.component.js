import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
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
                                       href="mailto:arsenyakym@gmail.com">arsenyakym@gmail.com</a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="phone d-flex align-items-center">
                                    <img className="tel" src="/files/imgs/phone.png" alt="care">

                                    </img>
                                        <a href="tel:12345678910">1-234-567-89-10</a>
                                        <img className="whatsapp" src="/files/imgs/whatsapp.png" alt="care">

                                        </img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map">
                    <div className="no-container-fluid">
                        <div className="row mx-0">
                            <div className="col-xl-12 px-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164705.55762681522!2d23.872152863506173!3d49.83260464310914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c09109a57%3A0x4223c517012378e2!2z0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1590664295947!5m2!1suk!2sua"
                                    width="100%" height="150%" frameBorder="0" style={{border:0}} allowFullScreen=""
                                    aria-hidden="false" tabIndex="0">
                                </iframe>
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
                                       href="mailto:arsenyakym@gmail.com">arsenyakym@gmail.com</a>
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
