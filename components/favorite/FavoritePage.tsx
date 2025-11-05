import { useEffect, useState } from "react";
import CurrencyBox from "../currency/CurrencyBox";
import CurrencyPageCalculator from "../currency/CurrencyPageCalculator";
import { fetchCurrencyRate } from "../../api/Currency"
import currencyFlags from "../../utilities/CurrencyFlags";

interface CurrencyInfoProps {
  code: string;
  rate: number | null;
  countryName: string;
  flagUrl: string;
}

const FavoritePage = () => {
  const [favoriteCurrencies, setFavoriteCurrencies] = useState<string[]>([]);
  const [currencyInfos, setCurrencyInfos] = useState<CurrencyInfoProps[]>([]);
  const [toCurrency, setToCurrency] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("favoritesCurrency");
    const favs = stored ? (JSON.parse(stored) as string[]) : [];
    setFavoriteCurrencies(favs);
    setToCurrency(favs.length > 0 ? favs[0] : "USD");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const infos: CurrencyInfoProps[] = await Promise.all(
        favoriteCurrencies.map(async (code) => {
          try {
            const rate = await fetchCurrencyRate({ from: code, to: "THB", amount: 1 });
            const flagInfo = currencyFlags[code];
            return {
              code,
              rate,
              countryName: flagInfo.countryInThai,
              flagUrl: flagInfo.flag,
            };
          } catch (error) {
            console.error("โหลดเรตค่าเงินไม่สำเร็จ", error);
            return {
              code,
              rate: null,
              countryName: "",
              flagUrl: "",
            };
          }
        })
      );
      setCurrencyInfos(infos);
    };

    if (favoriteCurrencies.length > 0) {
      fetchData();
    } else {
      setCurrencyInfos([]);
    }
  }, [favoriteCurrencies]);

  const handleToggle = (code: string) => {
    const updated = favoriteCurrencies.filter((item) => item !== code);
    localStorage.setItem("favoritesCurrency", JSON.stringify(updated));

    setFavoriteCurrencies(updated);
    if (code === toCurrency) {
      setToCurrency(updated.length > 0 ? updated[0] : "USD");
    }
  };

  return (
    <div>
      <CurrencyPageCalculator
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
      />

      <div className="flex justify-center p-4">
        {currencyInfos.length === 0 ? (
          <div className="text-gray-500">คุณยังไม่มีสกุลเงินที่บันทึกไว้</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {currencyInfos.map((info) => (
              <CurrencyBox
                key={info.code}
                code={info.code}
                rate={info.rate}
                isFavorite={true}
                flagUrl={info.flagUrl}
                countryName={info.countryName}
                onSelect={() => setToCurrency(info.code)}
                onToggleFavorite={() => handleToggle(info.code)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;