import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Book from "./pages/Book/Book";

function App() {

    const [viewport, setViewport] = useState("100vh");
    useEffect(() => {
        let height = window.innerHeight;
        setViewport(height);
    }, []);

    return (
        <div className="App" style={{height: viewport}}>
            <Book />
        </div>
    );
}

export default App;
