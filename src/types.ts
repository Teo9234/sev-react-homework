export type ButtonProps = {
    label: string;
    onClickProp?: () => void;
    disabled?: boolean;
    isPerfect?: boolean;
}

export type QuestionProps = {
    answerInput?: string;
    handleAnswer: (answer: string) => void;
};


export type SizeProps = {
    width: number;
    height: number;
    isSquare?: boolean;
};

export type iconCheckerProps = {
    plusIconExists: boolean;
    minusIconExists: boolean;
    minusReplacedByPlus: boolean;
};


