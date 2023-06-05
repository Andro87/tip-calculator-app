import styles from "./TipBtn.module.scss";

interface Props {
    readonly inputId: string;
    readonly inputValue: string;
    readonly isChecked: boolean;
    readonly onRadioBtn: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TipBtn: React.FunctionComponent<Props> = props => {
    const { inputId, inputValue, isChecked, onRadioBtn } = props;
    return (
        <div className={styles.input_container}>
            <input
                type="radio"
                id={inputId}
                name="radio input"
                value={inputValue}
                checked={isChecked}
                onChange={onRadioBtn}
            />

            <label htmlFor={inputId}>{inputValue}%</label>
        </div>
    );
};
