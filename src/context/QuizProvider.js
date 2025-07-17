import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { quiz } from '../data/QuizQuestions';
import { QuizContext, initialState } from './QuizContext';
const QuizProvider = ({ children }) => {
    const [timer, setTimer] = useState(initialState.timer);
    const [endTime, setEndTime] = useState(initialState.endTime);
    const [quizTopic, setQuizTopic] = useState(initialState.quizTopic);
    const [result, setResult] = useState(initialState.result);
    const [currentScreen, setCurrentScreen] = useState(initialState.currentScreen);
    const [questions, setQuestions] = useState(quiz[initialState.quizTopic].questions);
    const { questions: quizQuestions, totalQuestions, totalTime, totalScore, } = quiz[quizTopic];
    const selectQuizTopic = (topic) => {
        setQuizTopic(topic);
    };
    useEffect(() => {
        setTimer(totalTime);
        setQuestions(quizQuestions);
    }, [quizTopic]);
    const quizDetails = {
        totalQuestions,
        totalScore,
        totalTime,
        selectedQuizTopic: quizTopic,
    };
    const quizContextValue = {
        currentScreen,
        setCurrentScreen,
        quizTopic,
        selectQuizTopic,
        questions,
        setQuestions,
        result,
        setResult,
        quizDetails,
        timer,
        setTimer,
        endTime,
        setEndTime,
    };
    return _jsx(QuizContext.Provider, { value: quizContextValue, children: children });
};
export default QuizProvider;
