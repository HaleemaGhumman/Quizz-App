import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { ScreenTypes } from '../../types';
import QuestionScreen from '../QuestionScreen';
import QuizDetailsScreen from '../QuizDetailsScreen';
import QuizTopicsScreen from '../QuizTopicsScreen';
import ResultScreen from '../ResultScreen';
import SplashScreen from '../SplashScreen';
function Main() {
    const { currentScreen, setCurrentScreen } = useQuiz();
    useEffect(() => {
        setTimeout(() => {
            setCurrentScreen(ScreenTypes.QuizTopicsScreen);
        }, 1000);
    }, [setCurrentScreen]);
    const screenComponents = {
        [ScreenTypes.SplashScreen]: _jsx(SplashScreen, {}),
        [ScreenTypes.QuizTopicsScreen]: _jsx(QuizTopicsScreen, {}),
        [ScreenTypes.QuizDetailsScreen]: _jsx(QuizDetailsScreen, {}),
        [ScreenTypes.QuestionScreen]: _jsx(QuestionScreen, {}),
        [ScreenTypes.ResultScreen]: _jsx(ResultScreen, {}),
    };
    const ComponentToRender = screenComponents[currentScreen] || _jsx(SplashScreen, {});
    return _jsx(_Fragment, { children: ComponentToRender });
}
export default Main;
