import type {ButtonProps, } from "../../types.ts";
import useWindowSize from "../hooks/useWindowSize.ts";

const Button = ({onClickProp, label, isPerfect}: ButtonProps) => {

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
                    disabled={!isPerfect && !isSquare}
                >

                    {/*Label changes if it is enabled*/}
                    {label}
                </button>
            </div>
        </>
    )
}

export default Button;