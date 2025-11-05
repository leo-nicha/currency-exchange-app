import { useEffect, useState } from "react";
import CurrencyBox from "./CurrencyBox";
import { fetchCurrencyList, fetchCurrencyRate } from "../../api/Currency";
import currencyFlags from "../../utilities/CurrencyFlags";

interface CurrencyBoxShowProps {
  onSelect: (code: string) => void;
}

interface CurrencyInfo {
  code: string;
  rate: number | null;
  isFavorite: boolean;
}

const CurrencyBoxShow = ({ onSelect }: CurrencyBoxShowProps) => {
  const [currencies, setCurrencies] = useState<CurrencyInfo[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoritesCurrency");
    const favs = stored ? JSON.parse(stored) as string[] : [];
    setFavorites(favs);
  }, []);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const data = await fetchCurrencyList();
        const codes = Object.keys(data).filter((code) => code !== "THB");

        const allRate = await Promise.all(
          codes.map(async (code) => {
            try {
              const rate = await fetchCurrencyRate({ from: code, to: "THB", amount: 1, });
              return {
                code,
                rate,
                isFavorite: favorites.includes(code),
              };
            } catch (error) {
              console.error("โหลดเรตค่าเงินไม่สำเร็จ", error);
              return {
                code,
                rate: null,
                isFavorite: favorites.includes(code),
              };
            }
          })
        );
        setCurrencies(allRate);
      } catch (err) {
        console.error("โหลดข้อมูลล้มเหลวทั้งหมด:", err);
      }
    };
    fetchCurrencies();
  }, [favorites]);

  const toggleFavorite = (code: string) => {

    const updated = favorites.includes(code) ?
      favorites.filter((item) => item !== code) : [...favorites, code];

    setFavorites(updated);
    localStorage.setItem("favoritesCurrency", JSON.stringify(updated));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {currencies.map(({ code, rate, isFavorite }) => {

        const flagInfo = currencyFlags[code];

        return (
          <CurrencyBox
            key={code}
            code={code}
            countryName={flagInfo.countryInThai}
            flagUrl={flagInfo.flag}
            rate={rate}
            isFavorite={isFavorite}
            onSelect={() => onSelect(code)}
            onToggleFavorite={() => toggleFavorite(code)}
          />
        );
      })}
    </div>
  );
};

export default CurrencyBoxShow;