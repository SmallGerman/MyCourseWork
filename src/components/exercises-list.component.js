import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBtc } from '@fortawesome/free-brands-svg-icons'

export default class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeOffer = this.onChangeOffer.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            number: '',
            email: '',
            date: new Date(),
            offering: '',
            offers: []
        }
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeNumber(e){
        this.setState({
            number: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    componentDidMount() {
        axios.get('http://localhost:1488/service/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        offers: response.data.map(service => service.title),
                        offering: response.data[0].title
                    })
                }
            })
    }

    onChangeOffer(e){
        this.setState({
            offering: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const users = {
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            date: this.state.date,
            offering: this.state.offering,
            offer: this.state.offer
        };

        console.log(users);

        axios.post('http://localhost:1488/exercises/add', users)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <section className="service">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <h4>
                                    Послуги
                                </h4>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/upper-body.jpg" alt="fitness service">

                                    </img>
                                        <h6>
                                            Обслуговування нігтів
                                        </h6>
                                        <p className="service-info__text mb95">
                                            Манікюр, є найпоширенішою гігієнічною процедурою з догляду за руками. Існує декілька видів сучасного манікюру, які визначають за основними способами технології:
                                            за способом розм’якшення кутикули «сухий чи мокрий»;
                                            за способом видалення – обрізаний чи необрізаний.
                                        </p>
                                        <p className="service-info__who">
                                            для жінок та чоловіків
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/zumba.jpg" alt="fitness service">

                                    </img>
                                        <h6>
                                            Масаж
                                        </h6>
                                        <p className="service-info__text mb11">
                                            Масаж як лікувальний та профілактичний засіб застосовується ще від початку виникнення людської цивілізації. Він виник як один із видів народної медицини ще у первісному суспільстві, та розвивався разом із іншими видами народної медицини у різних племен та народів. Неможливо встановити точне місце виникнення масажу.
                                        </p>
                                        <p className="service-info__who">
                                            для жінок та чоловіків
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/hot-iron.jpg" alt="fitness service">

                                    </img>
                                        <h6>
                                            Тату
                                        </h6>
                                        <p className="service-info__text mb11">
                                            Зображення (малюнок) на шкірі живої людини та процедура його нанесення. Технічно татуювання полягає в ін'єкціях фарби в глибину шкіри, чим досягається довготривалість — «вічність» татуювань. Татуювання може бути декоративним, символічним, статутним (у певних соціальних групах). Татуювання та пірсинг більшості людей здається чимось ультрасучасним і молодіжним.
                                        </p>
                                        <p className="service-info__who">
                                            для жінок та чоловіків
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/body-sculpt.jpg" alt="fitness service">

                                    </img>
                                        <h6>
                                            Косметологія
                                        </h6>
                                        <p className="service-info__text mb78">
                                            Наука про естетичні проблеми організму людини, їх етіології, прояви та методи корекції, також — збір методик, направлених на корекцію естетичних проблем зовнішності людини.
                                            Більша частина термінологічного апарату і способі впливу базується на досягненнях дерматології, фізіотерапії, відновлювальної медицини, косметичної хімії, а в останні роки, і на досягненнях ортопедії.
                                        </p>
                                        <p className="service-info__who">
                                            для жінок та чоловіків
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/abl-stretch.jpg" alt="fitness service">

                                    </img>
                                        <div className="wrap d-flex justify-content-between">
                                            <h6>
                                                Мейкап ПРО
                                            </h6>
                                            <div data-description="можлива оплата криптою"
                                                 className="price d-flex justify-content-center align-items-center">
                                                <i className="fas fa-ruble-sign">
                                                    <FontAwesomeIcon icon={faBtc} />
                                                </i>

                                            </div>
                                        </div>
                                        <p className="service-info__text mb47">
                                            Макіяж залежить від пори року, часу доби (ранок, день, вечір), а головне — від свого призначення, вимагає повної гармонії зі всім зовнішнім виглядом, з одягом, аксесуарами, біжутерією, манікюром. Найчастіше виділяють денний (повсякденний) і вечірній (урочистий) макіяж. Макіяж пов'язаний з модними художніми напрямами, — саме вони задають колірну гамму, форму брів, губ, очей та іншим частинам тіла
                                        </p>
                                        <p className="service-info__who">
                                            для жінок та чоловіків
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/stretching.jpg" alt="fitness service">

                                    </img>
                                        <div className="wrap d-flex justify-content-between">
                                            <h6>
                                                Eстетика тіла
                                            </h6>
                                            <div data-description="можлива оплата криптою"
                                                 className="price d-flex justify-content-center align-items-center">
                                                <i className="fas fa-ruble-sign">
                                                    <FontAwesomeIcon icon={faBtc} />
                                                </i>
                                            </div>
                                        </div>
                                        <p className="service-info__text mb47">
                                            Почуття дозволяють нам миттєво орієнтуватися у світі. Органи відчуттів миттєво надійно аналізують інформацію про навколишнє середовище. Чуттєва інформація невербальна, непонійна, обмінюватися нею вкрай складно; вона важко піддається аналізу і її неможливо відтворити. Із цього виникає питання: чи можна вважати естетику наукою, оскільки наукові знання мають бути об'єктивними й не залежати від суб'єктивних характеристик особистості.
                                        </p>
                                        <p className="service-info__who">
                                            для всіх
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/zdorovaya-spina.jpg" alt="fitness service">

                                    </img>
                                        <div className="wrap d-flex justify-content-between">
                                            <h6>
                                                Діагностика шкіри
                                            </h6>
                                            <div data-description="можлива оплата криптою"
                                                 className="price d-flex justify-content-center align-items-center">
                                                <i className="fas fa-ruble-sign">
                                                    <FontAwesomeIcon icon={faBtc} />
                                                </i>
                                            </div>
                                        </div>
                                        <p className="service-info__text">
                                            Оберіть індивідуальний догляд для вашої шкіри! Ми підготували для вас найкращі засоби для нормальної, чутливої, жирної, сухої та проблемної шкіри. Ви не знаєте, як розпізнати свій тип шкіри, а також як за нею доглядати? Ознайомтесь із характеристиками типів шкіри, які ми спеціально підготували для вас, а також із декількома простими порадами для щоденного догляду.
                                        </p>
                                        <p className="service-info__who">
                                            для всіх
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/strong-by-zumba.jpg" alt="fitness service">

                                    </img>
                                        <div className="wrap d-flex justify-content-between">
                                            <h6>
                                                Психолог
                                            </h6>
                                            <div data-description="можлива оплата криптою"
                                                 className="price d-flex justify-content-center align-items-center">
                                                <i className="fas fa-ruble-sign">
                                                    <FontAwesomeIcon icon={faBtc} />
                                                </i>
                                            </div>
                                        </div>
                                        <p className="service-info__text mb99">
                                            Прийнято говорити про історію психології в контексті західної культури, хоча наукова думка арабського світу, Індії, Східної Азії має свої давні традиції та безсумнівні досягнення в теорії та практиках психічної діяльності.
                                            Існує декілька підходів щодо періодизації розвитку психології. Як наука, в сучасному позитивістському значенні слова, сформувалась наприкінці XIX ст.
                                        </p>
                                        <p className="service-info__who">
                                            для всіх
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/abt.jpg" alt="fitness service">

                                    </img>
                                        <div className="wrap d-flex justify-content-between">
                                            <h6>
                                                Штучна засмага
                                            </h6>
                                            <div data-description="можлива оплата криптою"
                                                 className="price d-flex justify-content-center align-items-center">
                                                <i className="fas fa-ruble-sign">
                                                    <FontAwesomeIcon icon={faBtc} />
                                                </i>
                                            </div>
                                        </div>
                                        <p className="service-info__text">
                                            Ступінь і швидкість появи засмаги не є показниками здоров'я, а пов'язані з генетичними особливостями людини. Тривале проживання предків північних народів в середніх і високих широтах, в умовах меншої освітленості, ніж в Африці, призвело до підвищення потреби у вітаміні D. Цей вітамін необхідний для нормального формування кісток.
                                        </p>
                                        <p className="service-info__who">
                                            для жінок та чоловіків
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/yoga-fitnes.jpg" alt="fitness service">

                                    </img>
                                        <div className="wrap d-flex justify-content-between">
                                            <h6>
                                                Лікуючі сауни
                                            </h6>
                                            <div data-description="можлива оплата криптою"
                                                 className="price d-flex justify-content-center align-items-center">
                                                <i className="fas fa-ruble-sign">
                                                    <FontAwesomeIcon icon={faBtc} />
                                                </i>
                                            </div>
                                        </div>
                                        <p className="service-info__text mb77">
                                            фінська назва лазні. В Україні (і не тільки) під сауною зазвичай розуміють кiмнату невиличкого розмiру з сухою парою, що неправильно. Фінам така сауна невідома. На практиці ж, сауна нічим не відрізняється від лазні — фіни так само піддають пару, так само користуються березовими віниками. Звичайно температуру підтримують в межах 70-110 °C, а вологість регулюється кількістю води, яка підливається з ковша на кам'янку
                                        </p>
                                        <p className="service-info__who">
                                            для всіх
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/box.png" alt="fitness service">

                                    </img>
                                        <div className="wrap d-flex justify-content-between">
                                            <h6>
                                                Зачіски
                                            </h6>
                                            <div data-description="можлива оплата криптою"
                                                 className="price d-flex justify-content-center align-items-center">
                                                <i className="fas fa-ruble-sign">
                                                    <FontAwesomeIcon icon={faBtc} />
                                                </i>
                                            </div>
                                        </div>
                                        <p className="service-info__text mb122">
                                            Створенню зачіски передує певна підготовка волосся. Зазвичай його миють і розчісують таким чином, щоб волосини спадали природним чином. При цьому формується роздільна лінія — проділ. В залежності від місця розташування він може бути прямий або косий, по центру голови або зі зміщенням праворуч чи ліворуч. Для простих повсякденних зачісок миття голови перед кожним укладанням волосся не обов'язкове.
                                        </p>
                                        <p className="service-info__who">
                                            для всіх
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <div className="service-info">
                                    <img src="files/imgs/fitness-service/ofp.jpg" alt="fitness service">

                                    </img>
                                        <div className="wrap d-flex justify-content-between">
                                            <h6>
                                                Епіляція
                                            </h6>
                                            <div data-description="можлива оплата криптою"
                                                 className="price d-flex justify-content-center align-items-center">
                                                <i className="fas fa-ruble-sign">
                                                    <FontAwesomeIcon icon={faBtc} />
                                                </i>
                                            </div>
                                        </div>
                                        <p className="service-info__text">
                                            Лазерна епіляція здійснюється з використанням спеціального приладу — лазера. Метод заснований на принципі «селективного фототермоліза» — виборчому поглинанні світла різними біологічними структурами: пігмент волосся — це меланін, який зосереджений в стержні і волосяному фолікулі, здатний поглинати світлові хвилі певної довжини (оптимальний діапазон 750—810 нм).
                                        </p>
                                        <p className="service-info__who">
                                            для жінок та чоловіків
                                        </p>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12">
                                <h3 className='title'>Записатись</h3>
                                <form onSubmit={this.onSubmit} className="card-form" id="popupResult">
                                    <div className="form-group">
                                        <label>Імя: </label>
                                        <input  type="text"
                                                required
                                                className="form-control"
                                                value={this.state.name}
                                                onChange={this.onChangeName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Мобільний номер: </label>
                                        <input  type="number"
                                                required
                                                className="form-control"
                                                value={this.state.number}
                                                onChange={this.onChangeNumber}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Емейл: </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={this.state.email}
                                            onChange={this.onChangeEmail}
                                        />
                                    </div>

                                    <div className="form-group choose">
                                        <label>Пропозиція: </label>
                                        <select ref={this.textInput}
                                                required
                                                className="form-control"
                                                value={this.state.offering}
                                                onChange={this.onChangeOffer}>
                                            {
                                                this.state.offers.map(function(offering) {
                                                    return <option
                                                        key={offering}
                                                        value={offering}>{offering}
                                                    </option>;
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Сервіс: </label>
                                        <input  type="text"
                                                required
                                                className="form-control"
                                                value={this.state.offering}
                                                onChange={this.onChangeOffer}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Дата: </label>
                                        <div>
                                            <DatePicker
                                                selected={this.state.date}
                                                onChange={this.onChangeDate}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Підтвердити" className="btn btn-primary" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
