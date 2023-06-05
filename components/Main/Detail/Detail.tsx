import styles from "./Detail.module.scss";

interface Props {
    readonly info: string;
    readonly amount: string;
}

export const Detail: React.FunctionComponent<Props> = props => {
    const { info, amount } = props;

    return (
        <div className={styles.detail_container}>
            <p>
                {info}
                <span>/person</span>
            </p>

            <p>${amount}</p>
        </div>
    );
};
