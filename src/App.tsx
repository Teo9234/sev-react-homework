import Layout from "./Components/layout/Layout.tsx";
import Button from "./Components/ui/Button.tsx";
import Question from "./Components/ui/Question.tsx";

function App() {

    return (
        <>
            <Layout children={undefined}>
                <Question />
                <Button />
            </Layout>
        </>
)
}

export default App