import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/cards'
import HighlightedText from '../ui/HighlightedText'
import PageCenter from '../ui/PageCenter'
const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
      <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
  <AppLogo className="w-[40px]" /> {/* Smaller logo */}
  <h1 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
   IQode by Haleema
  </h1>
</div>

        <h2 className="text-theme-color text-3xl font-bold">IQode by Haleema</h2>

        <div className="mt-4 mb-10 max-w-[500px] text-center text-xl font-medium">
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </p>
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </p>
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </p>
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </p>
        </div>
        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
