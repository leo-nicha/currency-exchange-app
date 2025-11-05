interface fetchProps {
    from: string;
    to: string;
    amount?: number;
}

const API_URL = "https://api.frankfurter.app"

export const fetchCurrencyRate = async ({ from, to, amount }: fetchProps): Promise<number> => {
    const res1 = await fetch(`${API_URL}/latest?amount=${amount}&from=${from}&to=${to}`);
    const data1 = await res1.json();
    return data1.rates[to];
};

export const fetchCurrencyList = async (): Promise<Record<string, string>> => {
    const res2 = await fetch(`${API_URL}/currencies`);
    const data2 = await res2.json();
    return data2;
};
