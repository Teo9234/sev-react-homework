import type {ButtonProps} from "../../types.ts";
import useWindowSize from "../hooks/useWindowSize.ts";
import changedIcon from "../hooks/changedIcon.ts";

const Button = ({onClickProp, label, isPerfectAnswer}: ButtonProps) => {

    const {isSquare} = useWindowSize();
    const {isPlusFavicon} = changedIcon();

    console.log(isPlusFavicon, label, isPlusFavicon);



    return (
        <>
            <div className="flex flex-col items-center text-center">
                <button
                    className={"px-4 py-2 align-middle bg-purple-400 text-white hover:bg-purple-600 hover:cursor-pointer" +
                        " disabled:bg-gray-400 disabled:cursor-not-allowed"}
                    onClick={onClickProp}
                    disabled={!(isPerfectAnswer && isSquare && isPlusFavicon)}
                >

                    {/*// Display different text based on isPlusFavicon, isPerfectAnswer and isSquare*/}
                    {isPlusFavicon ? "Good Positive Thinking" : isPerfectAnswer ? "Perfect Answer!" : isSquare ? "Perfect Size!" : label ? "Not ready yet" : "Button"}
                </button>
            </div>
        </>
    )
}

export default Button;