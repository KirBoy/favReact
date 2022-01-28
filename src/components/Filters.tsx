import React, {Dispatch, FC, SetStateAction} from "react";

type FiltersType = {
    flag: boolean;
    setFlag: Dispatch<SetStateAction<boolean>>
}

const Filters: FC<FiltersType> = ({flag, setFlag}): JSX.Element => {

    let className: string = 'filters'

    if (flag) {
        className += ' filters filters-open'
    }

    return (
        <div className={className}>
            <div className="filter__top">
                <span className="filters__name">filter block</span>
                <span className="filters__settings" onClick={() => setFlag(!flag)}>
            </span>
            </div>
            <ul className="filters__list">
                <li className="filters__item">
                    <label>
                        <input className="main__input" type="text" placeholder="Дата от"></input>
                    </label>
                </li>
                <li className="filters__item">
                    <label>
                        <input className="main__input" type="text" placeholder="Дата до"></input>
                    </label>
                </li>
                <li className="filters__item">
                    <label>
                        <input className="main__input" type="text" placeholder="Дата от"></input>
                    </label>
                </li>
                <li className="filters__item">
                    <label>
                        <input className="main__input" type="text" placeholder="Дата до"></input>
                    </label>
                </li>
                <li className="filters__item">
                    <label>
                        <input className="main__input" type="text" placeholder="Имя клиента"></input>
                    </label>
                </li>
                <li className="filters__item">
                    <label>
                        <input className="main__input" type="number" placeholder="Телефон"></input>
                    </label>
                </li>
                <li className="filters__item">
                    <label>
                        <input className="main__input" type="text" placeholder="Имя клиента"></input>
                    </label>
                </li>
                <li className="filters__item">
                    <label>
                        <input className="main__input" type="number" placeholder="Телефон"></input>
                    </label>
                </li>
            </ul>
        </div>
    )
}


export default Filters