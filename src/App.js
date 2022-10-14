import './App.css';
import React from 'react'
import Routers from './routes/Routers';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <>
            <Header />
            <Routers />
            <Footer />
        </>

    );
}

export default App;
