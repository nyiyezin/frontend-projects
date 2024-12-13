import { useSelector } from "react-redux";
import { selectStartedStatus, selectTitle } from "@/redux/quizSelector";
import { Home } from "@/components/Home";
import { QuizQuestion } from "@/components/QuizQuestion";
import { QuizResult } from "@/components/QuizResult";

export const Layout = () => {
  const isStarted = useSelector(selectStartedStatus);
  const quizTitle = useSelector(selectTitle);
  return (
    <div className="bg-light-grey bg-mobile-light bg-cover bg-no-repeat pb-8 text-dark-navy dark:bg-dark-navy dark:bg-mobile-dark dark:text-pure-white md:bg-tablet-light dark:md:bg-tablet-dark lg:bg-desktop-light dark:lg:bg-desktop-dark">
      <div className="flex min-h-screen justify-center">
        <div className="container mx-auto">
          {!isStarted && quizTitle === "" && <Home />}
          {isStarted && <QuizQuestion />}
          {!isStarted && quizTitle !== "" && <QuizResult />}
        </div>
      </div>
    </div>
  );
};
