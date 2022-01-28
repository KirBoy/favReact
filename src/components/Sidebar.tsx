import React from "react";

function Sidebar() {
    return <div className="main__left">
        <div className="main__company">
            <span className="logo">logo</span>
            <h2 className="main__company-name">Name Company</h2>
        </div>
        <ul className="menu">
            <li className="menu__item">
                <span className="menu__link">Главная</span>
            </li>
            <li className="menu__item">
                <span className="menu__link">Клиенты</span>
            </li>
            <li className="menu__item">
                <span className="menu__link">Сотрудники</span>
            </li>
            <li className="menu__item">
                <span className="menu__link">Аналитика</span>
            </li>
        </ul>
    </div>;
}

export default Sidebar