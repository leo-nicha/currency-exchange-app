import { useState } from "react";
import CurrencyPageCalculator from "./CurrencyPageCalculator";
import CurrencyBoxShow from "./CurrencyBoxShow";

const CurrencyPage = () => {
    const [toCurrency, setToCurrency] = useState("USD");

    return (
        <div>
            <div><CurrencyPageCalculator
                toCurrency={toCurrency}
                setToCurrency={setToCurrency} />
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-5">
                <CurrencyBoxShow 
                onSelect={(code) => setToCurrency(code)} />
            </div>
        </div>
    );
}

export default CurrencyPage;