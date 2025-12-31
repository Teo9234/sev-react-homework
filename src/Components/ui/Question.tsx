const Question = () => {
    const answer = "";

    return (
        <div align="center">
            <h2 className="text-2xl font-bold mb-4">Perfect Question</h2>
            <input
                className="border-3 bg-green-300"
                type = "text"
            />
            <p className="mt-4">Your answer: {answer}</p>
        </div>
    )
}
export default Question;