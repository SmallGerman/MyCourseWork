import React, { Component } from "react";

export default class CreateExercises extends Component {
    render() {
        return (
            <div>
                <section className="trainers">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <h2>
                                    Майстри
                                </h2>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-center">
                                <div className="trainer">
                                    <img src="files/imgs/trainers/IMG_1333.png" className="trainer__photo"
                                         alt="trainers">

                                    </img>
                                        <p className="trainer__name">
                                            Сидоренко Марина
                                        </p>
                                        <p className="trainer__skills">
                                            Майстер лазерної епіляції та шугаринку. Дипломований спеціаліст.
                                        </p>
                                        <a href="Devjatov.html" className="trainer__more btn">Докладніше</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-center">
                                <div className="trainer">
                                    <img src="files/imgs/trainers/IMG_1602.png" className="trainer__photo"
                                         alt="trainers">

                                    </img>
                                        <p className="trainer__name">
                                            Гончар Наталка
                                        </p>
                                        <p className="trainer__skills">
                                            Майстер з косметологічних послуг. Дипломований спеціаліст.
                                        </p>
                                        <a href="Tarabatjeva.html" className="trainer__more btn">Докладніше</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-center">
                                <div className="trainer">
                                    <img src="files/imgs/trainers/IMG_1317.png" className="trainer__photo"
                                         alt="trainers">

                                    </img>
                                        <p className="trainer__name">
                                            Козак Борис
                                        </p>
                                        <p className="trainer__skills">
                                            Майстер манікюру та педікюру. Автор послуги Нігті 'Слава Україні'. Дипломований спеціаліст.
                                        </p>
                                        <a href="Shashkov.html" className="trainer__more btn">Докладніше</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-center">
                                <div className="trainer">
                                    <img src="files/imgs/trainers/IMG_1326.png" className="trainer__photo"
                                         alt="trainers">

                                    </img>
                                        <p className="trainer__name">
                                            Жук Братко
                                        </p>
                                        <p className="trainer__skills">
                                            Майстер мейкапу. Автор послуги "Покраска Морди". Дипломований спеціаліст.
                                        </p>
                                        <a href="Gasimov.html" className="trainer__more btn">Докладніше</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-center">
                                <div className="trainer">
                                    <img src="files/imgs/trainers/IMG_1339.png" className="trainer__photo"
                                         alt="trainers">

                                    </img>
                                        <p className="trainer__name">
                                            Таран Забава
                                        </p>
                                        <p className="trainer__skills">
                                            Майстер зачісок. Автор послуг "Лиса Башка Дай Пиріжка" та "Зачіска Клоуна". Дипломований спеціаліст.
                                        </p>
                                        <a href="Nikitin.html" className="trainer__more btn">Докладніше</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 d-flex justify-content-center">
                                <div className="trainer">
                                    <img src="files/imgs/trainers/IMG_1600.png" className="trainer__photo"
                                         alt="trainers">

                                    </img>
                                        <p className="trainer__name">
                                            Чумак Явдоха
                                        </p>
                                        <p className="trainer__skills">
                                            Майстер-масажист. Майбутній автор послуги "Руки-базуки" Дипломований спеціаліст
                                        </p>
                                        <a href="Nikitina.html" className="trainer__more btn">Докладніше</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
