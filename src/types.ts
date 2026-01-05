export type ButtonProps = {
    label: string;
    onClickProp?: () => void;
    disabled?: boolean;
    isPerfectAnswer?: boolean;
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

export type changedIconProps = {
    isPlusFavicon: boolean;
};


