import React from "react";
import './assets/style/index.scss'
import Header from "./pages/header";
import SecondPage from "./pages/second-page";
import usePreloader from './hook/usePreloader';
import Preloader from "./util/preloader";

function App() {
    const {isLoading} = usePreloader()
    if(isLoading){
        return <Preloader/>
    }
    return (
        <div className="App">
            <Header/>
            <SecondPage/>
        </div>
    );
}

export default App;
