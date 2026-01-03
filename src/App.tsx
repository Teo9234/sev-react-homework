import Layout from "./Components/layout/Layout.tsx";
import Button from "./Components/ui/Button.tsx";
import Question from "./Components/ui/Question.tsx";
import SizeCounter from "./Components/ui/SizeCounter.tsx";

function App() {

    // TODO: write the logic

    return (
        <>
            <Layout >
                <div>
                    <Question />
                    <br/>
                    <Button label={"Not ready"} />
                    <SizeCounter />
                </div>
            </Layout>
        </>
    )
}

export default App