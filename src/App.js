import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Main from './components/Main';
import QuizProvider from './context/QuizProvider';
function App() {
    const [currentTheme, setCurrentTheme] = useState('light');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme)
            setCurrentTheme(savedTheme);
    }, []);
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);
    return (_jsx(QuizProvider, { children: _jsx(Main, {}) }));
}
export default App;
