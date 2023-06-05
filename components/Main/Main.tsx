import styles from "./Main.module.scss";

import { Detail } from "./Detail/Detail";
import { TipBtn } from "./TipBtn/TipBtn";
import { CustomTipBtn } from "./CustomTipBtn/CustomTipBtn";

import Dollar from "svgrs/icon-dollar.svg";
import Person from "svgrs/icon-person.svg";
import { useEffect, useState } from "react";

export const Main = () => {
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [customTip, setCustomTip] = useState("");

    const [tipAmountPerson, setTipAmountPerson] = useState("0.00");
    const [totalAmountPerson, setTotalAmountPerson] = useState("0.00");

    const [billMsg, setBillMsg] = useState("");
    const [numberOfPeopleMsg, setNumberOfPeopleMsg] = useState("");

    const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (Number(value) === 0) {
            setBillMsg("can't be zero");
        } else {
            setBillMsg("");
        }
        setBill(value);
    };

    const handleRadioBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTip(e.target.value);
    };

    const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomTip(e.target.value);
    };

    const handleNumberOfPeople = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (Number(value) === 0) {
            setNumberOfPeopleMsg("can't be zero");
        } else if (!Number.isInteger(Number(value))) {
            setNumberOfPeopleMsg("not valid number");
        } else {
            setNumberOfPeopleMsg("");
        }

        setNumberOfPeople(value);
    };

    const handleResult = () => {
        const totalTipAmout = (Number(bill) * Number(tip)) / 100;
        const tipPerPerson = totalTipAmout / Number(numberOfPeople);
        const totalPerPerson =
            Number(bill) / Number(numberOfPeople) + tipPerPerson;

        setTipAmountPerson(String(tipPerPerson.toFixed(2)));
        setTotalAmountPerson(String(totalPerPerson.toFixed(2)));
    };

    const handleReset = () => {
        if (customTip) {
            setCustomTip("");
        }
        setBill("");
        setTip("");
        setNumberOfPeople("");
        setTipAmountPerson("0.00");
        setTotalAmountPerson("0.00");
    };

    useEffect(() => {
        setTip(customTip);
    }, [customTip]);

    useEffect(() => {
        if (Number(bill) > 0 && tip && Number(numberOfPeople) > 0) {
            handleResult();
        }
    }, [bill, tip, numberOfPeople]);

    return (
        <main className={styles.main_container}>
            <div className={styles.form_container}>
                <div className={styles.input_section}>
                    {billMsg && (
                        <span className={styles.error_msg}>{billMsg}</span>
                    )}
                    <label>Bill</label>
                    <div
                        className={`${styles.input_container} ${
                            billMsg && styles.error_wrap
                        }`}
                    >
                        <Dollar />
                        <input
                            type="number"
                            placeholder="0"
                            name="bill"
                            value={bill}
                            onChange={handleBill}
                        />
                    </div>
                </div>

                <div className={styles.tip_btns_section}>
                    <p>select tip %</p>

                    <div className={styles.tip_btns_container}>
                        <TipBtn
                            inputId="tip5"
                            inputValue="5"
                            isChecked={tip === "5"}
                            onRadioBtn={handleRadioBtn}
                        />
                        <TipBtn
                            inputId="tip10"
                            inputValue="10"
                            isChecked={tip === "10"}
                            onRadioBtn={handleRadioBtn}
                        />
                        <TipBtn
                            inputId="tip15"
                            inputValue="15"
                            isChecked={tip === "15"}
                            onRadioBtn={handleRadioBtn}
                        />
                        <TipBtn
                            inputId="tip25"
                            inputValue="25"
                            isChecked={tip === "25"}
                            onRadioBtn={handleRadioBtn}
                        />
                        <TipBtn
                            inputId="tip50"
                            inputValue="50"
                            isChecked={tip === "50"}
                            onRadioBtn={handleRadioBtn}
                        />

                        <CustomTipBtn
                            tip={customTip}
                            onCustomTip={handleCustomTip}
                        />
                    </div>
                </div>
                <div className={styles.input_section}>
                    {numberOfPeopleMsg && (
                        <span className={styles.error_msg}>
                            {numberOfPeopleMsg}
                        </span>
                    )}

                    <label>Number of people</label>

                    <div
                        className={`${styles.input_container} ${
                            numberOfPeopleMsg && styles.error_wrap
                        }`}
                    >
                        <Person />
                        <input
                            type="number"
                            placeholder="0"
                            name="number of people"
                            value={numberOfPeople}
                            onChange={handleNumberOfPeople}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.results_container}>
                <Detail info="tip amount" amount={tipAmountPerson} />
                <Detail info="total" amount={totalAmountPerson} />

                <button
                    type="button"
                    title="reset"
                    className={styles.btn_reset}
                    onClick={handleReset}
                >
                    reset
                </button>
            </div>
        </main>
    );
};
