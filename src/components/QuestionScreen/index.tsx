import { FC, useEffect, useState } from 'react'
import { AppLogo, CheckIcon, Next, TimerIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { useTimer } from '../../hooks'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'
import ModalWrapper from '../ui/ModalWrapper'
import PageCenter from '../ui/PageCenter'
import Question from './Question'
import QuizHeader from './QuizHeader'
const QuestionScreen: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([])
  const [showTimerModal, setShowTimerModal] = useState<boolean>(false)
  const [showResultModal, setShowResultModal] = useState<boolean>(false)
  const {
    questions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
  } = useQuiz()
  const currentQuestion = questions[activeQuestion]
  const { question, type, choices, code, image, correctAnswers } = currentQuestion
  const onClickNext = () => {
    const isMatch: boolean =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer))
    setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }])

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      const timeTaken = quizDetails.totalTime - timer
      setEndTime(timeTaken)
      setShowResultModal(true)
    }
    setSelectedAnswer([])
  }

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    if (type === 'MAQs') {
      if (selectedAnswer.includes(name)) {
        setSelectedAnswer((prevSelectedAnswer) =>
          prevSelectedAnswer.filter((element) => element !== name)
        )
      } else {
        setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, name])
      }
    }
    if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        setSelectedAnswer([name])
      }
    }
  }
  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen)
    document.body.style.overflow = 'auto'
  }
  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden'
    }
  }, [showTimerModal, showResultModal])
  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal)
  return (
    <PageCenter>
      <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
  <AppLogo className="w-[40px]" /> 
  <h1 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
IQode by Haleema
  </h1>
</div>
  <div className="bg-card-bg relative mb-18 min-h-[500px] w-full rounded-sm p-4 pb-20 md:w-[900px] md:px-14 md:pt-8">
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.totalQuestions}
          timer={timer}
        />
        <Question
          question={question}
          code={code}
          image={image}
          choices={choices}
          type={type}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />
        <div className="absolute right-4 bottom-8 flex w-[90%] justify-end gap-5 md:right-15 md:w-auto md:justify-normal">
          <Button
            text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            onClick={onClickNext}
            icon={<Next />}
            iconPosition="right"
            disabled={selectedAnswer.length === 0}
          />
        </div>
      </div>
      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Done!' : 'Your time is up!'}
          subtitle={`You have attempted ${result.length} questions in total.`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
          buttonTitle="SHOW RESULT"
        />
      )}
    </PageCenter>
  )
}
export default QuestionScreen
