import { Routes, Route } from 'react-router-dom'
import Header from './Header.jsx'
import Combine from './combine.jsx'
import FanPage from './pages/fan-page/fan-page.jsx'
import './App.css'

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Combine />} />
                <Route path="/fanpage" element={<FanPage />} />
            </Routes>
        </>
    )
}

export default App