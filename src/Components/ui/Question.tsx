import {useState} from "react";

const Question = () => {
    const [answer, setAnswer] = useState<string>("");

    return  (
        <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Perfect Question</h2>
            <form className="flex items-center mt-8 gap-2">
                <input
                    className="border-3 bg-green-300 px-3 py-2"
                    type="text"
                    placeholder="I want perfection"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}

                />
            </form>
            <p className="mt-4">Your answer: {answer}</p>
        </div>
    )
}
export default Question;