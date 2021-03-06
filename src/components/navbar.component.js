import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="headr navbar navbar-expand">
                <Link to="" className="logo navbar-brand">ЛяЯка</Link>
                <div className="collpase navbar-collapse align-items-center">
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
