import React from "react";

function Header() {
    return <header className="header">
        <label>
            <input className="main__input" type="text" placeholder="Поиск...">
            </input>
        </label>
        <h2>Петров В.A</h2>
    </header>;
}

export default Header