import styles from "./CustomTipBtn.module.scss";

interface Props {
    readonly tip: string;
    readonly onCustomTip: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomTipBtn: React.FunctionComponent<Props> = props => {
    const { tip, onCustomTip } = props;

    return (
        <div className={styles.btn_custom_container}>
            <input
                type="number"
                aria-label="custom tip"
                placeholder="custom"
                name="custom tip"
                value={tip}
                onChange={onCustomTip}
            />
        </div>
    );
};
