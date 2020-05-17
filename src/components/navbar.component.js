import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand">
                <Link to="/" className="navbar-brand">ЛяЯкаКрасуня</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Послуги</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Персонал</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Контакти</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/offer" className="nav-link">Спеціальні пропозиції</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
