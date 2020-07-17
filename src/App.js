import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App() {
    const loadData = () => {};

    return (
        <div className="App">
            <Button onClick={loadData}>Load Email Data</Button>
        </div>
    );
}

export default App;
