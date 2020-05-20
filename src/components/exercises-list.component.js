import React, { Component } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
export default class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNumber = this.onChangeNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            number: '',
            email: '',
            date: new Date(),
            users: []
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
        axios.get('http://localhost:1488/exercises/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        users: response.data.map(exercises => exercises.username),
                        username: response.data[0].username
                    })
                }
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
                <h3>Записатись</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone number: </label>
                        <input  type="number"
                                required
                                className="form-control"
                                value={this.state.number}
                                onChange={this.onChangeNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>E-mail: </label>
                        <input
                            type="email"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Offer: </label>
                        <select ref={this.textInput}
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.componentDidMount}>
                            {
                                this.state.users.map(function(offer) {
                                    return <option
                                        key={offer}
                                        value={offer}>{offer}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
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
        )
    }
}
