import Layout from "./Components/layout/Layout.tsx";
import Button from "./Components/ui/Button.tsx";
import Question from "./Components/ui/Question.tsx";
import SizeCounter from "./Components/ui/SizeCounter.tsx";
import {useEffect, useState} from "react";

const perfectAnswers = ["0", "10", "square", "circle", "zero", "ten"];

function App() {

    const [answerInput, setAnswer] = useState<string>("");

    const [isPerfect, setIsPerfect] = useState(false);

    const handleAnswer = (value:string) => {
        setAnswer(value);
    }

    console.log(isPerfect);

    useEffect(() => {
        setIsPerfect(perfectAnswers.includes(answerInput.toLowerCase()));
    }, [answerInput]);


    return (
        <>
            <Layout >
                <div className={"flex flex-col items-center justify-center gap-4"}>
                    <Question handleAnswer={handleAnswer} answerInput={answerInput}/>
                    <br/>
                    <SizeCounter />
                    <Button label={"Not ready"} isPerfect={isPerfect}/>
                </div>
            </Layout>
        </>
    )
}

export default App