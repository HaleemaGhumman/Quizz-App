import { AppLogo } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { quizTopics } from '../../data/quizTopics'
import { ScreenTypes } from '../../types'
import cn from 'classnames'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/cards'
import HighlightedText from '../ui/HighlightedText'
import PageCenter from '../ui/PageCenter'
const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz()
  const goToQuizDetailsScreen = () => {
    if (!quizTopic) {
      alert('Please select a quiz topic first')
      return
    }
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }
  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
          <AppLogo className="w-[40px]" />
          <h1 className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
            IQode by Haleema
          </h1>
        </div>
        <h2 className="mb-5 text-center text-3xl font-bold">
          WELCOME TO <HighlightedText>IQode by Haleema</HighlightedText>
        </h2>
        <p className="text-center text-xl leading-7 font-medium">
          Think you know web dev? Pick a topic and let’s find out!
        </p>
        <div className="mt-10 mb-11 flex max-w-full flex-wrap justify-center gap-5 md:max-w-[60%] md:gap-7">
          {quizTopics.map(({ title, icon, disabled }) => (
            <button
              key={title}
              onClick={() => !disabled && selectQuizTopic(title)}
              disabled={disabled}
              className={cn(
                'flex items-center rounded-xl p-3 transition-colors duration-500 ease-out',
                disabled
                  ? 'bg-disabled-card cursor-not-allowed'
                  : 'bg-select-topic-bg cursor-pointer hover:bg-blue-50',
                quizTopic === title
                  ? 'border-theme-color border-2'
                  : 'border-disabled-button border'
              )}
            >
              <span className="w-6 h-6">{icon}</span>
              <span className="ml-3 text-base font-medium md:text-lg md:font-semibold">
                {title}
              </span>
            </button>
          ))}
        </div>
        <Button 
          text="Continue" 
          onClick={goToQuizDetailsScreen} 
          bold 
          disabled={!quizTopic}
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen