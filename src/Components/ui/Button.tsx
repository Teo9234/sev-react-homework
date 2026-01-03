import type {ButtonProps} from "../../types.ts";

const Button = ({onClickProp, disabled= false, label}: ButtonProps) => {

    return (
        <>
            <div className="flex flex-col items-center text-center">
                <button
                    className={"px-4 py-2 align-middle bg-purple-400 text-white hover:bg-purple-600 hover:cursor-pointer"}
                    onClick={onClickProp}
                    disabled={disabled}
                >

                    {/*Label changes if it is enabled*/}
                    {label}
                </button>
            </div>
        </>
    )

}

export default Button;