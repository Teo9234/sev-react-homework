import type {ButtonProps} from "../../types.ts";
import useWindowSize from "../hooks/useWindowSize.ts";

const Button = ({onClickProp, label, isPerfectAnswer}: ButtonProps) => {

    // get isSquare from useWindowSize hook
    const {isSquare} = useWindowSize();
    console.log(isSquare + " square in Button");
    return (
        <>
            <div className="flex flex-col items-center text-center">
                <button
                    className={"px-4 py-2 align-middle bg-purple-400 text-white hover:bg-purple-600 hover:cursor-pointer" +
                        " disabled:bg-gray-400 disabled:cursor-not-allowed"}
                    onClick={onClickProp}
                    disabled={!(isPerfectAnswer && isSquare)}
                >
                    {/*// Display different text based on isPerfectAnswer and isSquare*/}
                    {isPerfectAnswer ? "Perfect Answer!" : isSquare ? "Perfect Size!" : label ? "Not ready yet" : "Button"}
                </button>
            </div>
        </>
    )
}

export default Button;