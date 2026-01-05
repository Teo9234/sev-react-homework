import Layout from "./Components/layout/Layout.tsx";
import Button from "./Components/ui/Button.tsx";
import Question from "./Components/ui/Question.tsx";
import SizeCounter from "./Components/ui/SizeCounter.tsx";
import {useEffect, useState} from "react";

const perfectAnswers = ["0", "10", "square", "circle", "zero", "ten"];

function App() {

    const [answerInput, setAnswer] = useState<string>("");
    const [isPerfectAnswer, setIsPerfectAnswer] = useState(false);

    // function to handle answer input from Question component
    const handleAnswer = (value:string) => {
        setAnswer(value);
    }

    // check if the answerInput is in the perfectAnswers array
    useEffect(() => {
        setIsPerfectAnswer(perfectAnswers.includes(answerInput.toLowerCase()));
    }, [answerInput]);
    console.log(isPerfectAnswer);


    return (
        <>
            <Layout >
                <div className={"flex flex-col items-center justify-center gap-4"}>
                    <Question handleAnswer={handleAnswer} answerInput={answerInput}/>
                    <br/>
                    <SizeCounter />
                    <Button
                        isPerfectAnswer={isPerfectAnswer}
                        onClickProp={() => alert("You solved the riddles!")}
                        label={"Not ready yet"}
                    />
                </div>
            </Layout>
        </>
    )
}

export default App