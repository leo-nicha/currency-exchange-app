import { useEffect, useState } from "react";
import { fetchCurrencyList, fetchCurrencyRate } from "../../api/Currency";

interface toCurrencyProps {
    toCurrency: string;
    setToCurrency: (code: string) => void;
}

const CurrencyPageCalculator = ({ toCurrency, setToCurrency }: toCurrencyProps) => {
    const [amount, setAmount] = useState<string>("");
    const [fromCurrency, setFromCurrency] = useState("THB");
    const [result, setResult] = useState<number | undefined>(undefined);
    const [currencies, setCurrencies] = useState<Record<string, string>>({});

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const data = await fetchCurrencyList();
                setCurrencies(data);
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchCurrencies();
    }, []);

    useEffect(() => {
        const fetchRate = async () => {
            const amountNumber = parseFloat(amount || "0");

            if (fromCurrency === toCurrency) {
                setResult(amountNumber);
                return;
            }

            try {
                const rate = await fetchCurrencyRate({ from: fromCurrency, to: toCurrency, amount: amountNumber });
                setResult(rate);
            } catch (error) {
                console.error("Error", error);
                setResult(undefined);
            }
        };
        fetchRate();
    }, [fromCurrency, toCurrency, amount]);

    return (
        <div className="w-full m-auto max-w-[1100px]">
            <h1 className="flex justify-center font-bold m-2">
                แปลงสกุลเงินต่างประเทศ</h1>
            <div className=" flex flex-col items-center justify-start p-4">
                <div className="flex flex-col w-full max-w-md gap-2">
                    <div className="">
                        <label>แปลงค่าเงินจาก</label>
                        <select
                            className="max-w-[640px] mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={fromCurrency}
                            onChange={e => setFromCurrency(e.target.value)}>
                            {Object.entries(currencies).map(([code, name]) => (
                                <option key={code} value={code}>
                                    ({code}) {name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <label>แปลงค่าเงินเป็น</label>
                        <select
                            className="max-w-[640px] mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm shadow-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={toCurrency}
                            onChange={e => setToCurrency(e.target.value)}>
                            {Object.entries(currencies).map(([code, name]) => (
                                <option key={code} value={code}>
                                    ({code}) {name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col w-full max-w-md gap-2">
                    <div className="">
                        <div className="mt-2">
                            <label>จำนวนเงิน
                                <input
                                    className="mt-2 max-w-[640px] text-center bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    value={amount}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (/^[0-9]*\.?[0-9]*$/.test(value)) {
                                            setAmount(value);
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <div className="mt-2 max-w-[640px] text-center font-bold text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {amount?.toLocaleString()} {fromCurrency} = {result?.toLocaleString()} {toCurrency}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrencyPageCalculator;