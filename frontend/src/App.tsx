import { useState } from 'react'
import reactLogo from './assets/react.svg'
import TextField from "@mui/material/TextField";
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Arcane Quotes</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
            <div className="card">
                <button>
                    Go
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div >
    )
}

export default App
