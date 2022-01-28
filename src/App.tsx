import React, {useState} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import Filters from "./components/Filters";


function App() {
    const [flag, setFlag] = useState<boolean>(false)

    return (
        <div className="container">
            <div className="main">
                <Sidebar/>
                <div className="main__right">
                    <Header/>
                    <Filters flag={flag} setFlag={setFlag}/>
                    <Content flag={flag}/>
                </div>
            </div>
        </div>
    );
}

export default App;
