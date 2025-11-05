interface CurrencyBoxProps {
  code: string;
  countryName: string;
  flagUrl: string;
  rate: number | null;
  isFavorite: boolean;
  onSelect?: () => void;
  onToggleFavorite?: () => void;
}

const CurrencyBox = ({ code, countryName, flagUrl, rate, isFavorite, onSelect, onToggleFavorite }: CurrencyBoxProps) => {

  return (
    <div className="relative p-1 w-full text-center">
      
      <button
        onClick={onToggleFavorite}
        className="cursor-pointer absolute top-1 right-3 text-xl"
      >
        <div className={isFavorite ? "text-yellow-400" : "text-gray-300"}>★</div>
      </button>

      <div
        onClick={onSelect}
        className="cursor-pointer rounded-2xl shadow-md p-2 bg-white w-full text-center hover:bg-gray-100"
      >
        <div className="flex p-4">
          <img
            src={flagUrl}
            alt={code}
            className="w-8 h-6 mx-auto mb-2 rounded-sm shadow"
          />
          <div className="pl-3 text-lg font-semibold">{code}</div>
        </div>
        <div className="font-bold">{countryName}</div>
        <div className="text-xl font-bold mt-2">
          {rate !== null ? `${rate.toFixed(2)} บาท` : "Loading..."}
        </div>
      </div>
    </div>
  );
};

export default CurrencyBox;