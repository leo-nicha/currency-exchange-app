interface CurrencyFlagProps {
    country: string;
    flag: string;
    countryInThai: string;
}

const currencyFlags: Record<string, CurrencyFlagProps> = {

    AUD: { country: "AU", flag: "https://flagicons.lipis.dev/flags/4x3/au.svg" ,countryInThai:"ออสเตเรีย" },
    BGN: { country: "BG", flag: "https://flagicons.lipis.dev/flags/4x3/bg.svg" ,countryInThai: "บัลแกเรีย"},
    BRL: { country: "BR", flag: "https://flagicons.lipis.dev/flags/4x3/br.svg" ,countryInThai: "บราซิล"},
    CAD: { country: "CA", flag: "https://flagicons.lipis.dev/flags/4x3/ca.svg" ,countryInThai: "แคนาดา"},
    CHF: { country: "CH", flag: "https://flagicons.lipis.dev/flags/4x3/ch.svg" ,countryInThai: "สวิตเซอร์แลนด์"},
    CNY: { country: "CN", flag: "https://flagicons.lipis.dev/flags/4x3/cn.svg" ,countryInThai: "จีน"},
    CZK: { country: "CZ", flag: "https://flagicons.lipis.dev/flags/4x3/cz.svg" ,countryInThai: "สาธารณรัฐเช็ก"},
    DKK: { country: "DK", flag: "https://flagicons.lipis.dev/flags/4x3/dk.svg" ,countryInThai: "เดนมาร์ก"},
    EUR: { country: "EU", flag: "https://flagicons.lipis.dev/flags/4x3/eu.svg" ,countryInThai: "สหภาพยุโรป"},
    GBP: { country: "GB", flag: "https://flagicons.lipis.dev/flags/4x3/gb.svg" ,countryInThai: "สหราชอาณาจักร"},
    HKD: { country: "HK", flag: "https://flagicons.lipis.dev/flags/4x3/hk.svg" ,countryInThai: "ฮ่องกง"},
    HUF: { country: "HU", flag: "https://flagicons.lipis.dev/flags/4x3/hu.svg" ,countryInThai: "ฮังการี"},
    IDR: { country: "ID", flag: "https://flagicons.lipis.dev/flags/4x3/id.svg" ,countryInThai: "อินโดนีเซีย"},
    ILS: { country: "IL", flag: "https://flagicons.lipis.dev/flags/4x3/il.svg" ,countryInThai: "อิสราเอล"},
    INR: { country: "IN", flag: "https://flagicons.lipis.dev/flags/4x3/in.svg" ,countryInThai: "อินเดีย"},
    ISK: { country: "IS", flag: "https://flagicons.lipis.dev/flags/4x3/is.svg" ,countryInThai: "ไอซ์แลนด์"},
    JPY: { country: "JP", flag: "https://flagicons.lipis.dev/flags/4x3/jp.svg" ,countryInThai: "ญี่ปุ่น"},
    KRW: { country: "KR", flag: "https://flagicons.lipis.dev/flags/4x3/kr.svg" ,countryInThai: "เกาหลีใต้"},
    MXN: { country: "MX", flag: "https://flagicons.lipis.dev/flags/4x3/mx.svg" ,countryInThai: "เม็กซิโก"},
    MYR: { country: "MY", flag: "https://flagicons.lipis.dev/flags/4x3/my.svg" ,countryInThai: "มาเลเซีย"},
    NOK: { country: "NO", flag: "https://flagicons.lipis.dev/flags/4x3/no.svg" ,countryInThai: "นอร์เวย์"},
    NZD: { country: "NZ", flag: "https://flagicons.lipis.dev/flags/4x3/nz.svg" ,countryInThai: "นิวซีแลนด์"},
    PHP: { country: "PH", flag: "https://flagicons.lipis.dev/flags/4x3/ph.svg" ,countryInThai: "ฟิลิปปินส์"},
    PLN: { country: "PL", flag: "https://flagicons.lipis.dev/flags/4x3/pl.svg" ,countryInThai: "โปแลนด์"},
    RON: { country: "RO", flag: "https://flagicons.lipis.dev/flags/4x3/ro.svg" ,countryInThai: "โรมาเนีย"},
    SEK: { country: "SE", flag: "https://flagicons.lipis.dev/flags/4x3/se.svg" ,countryInThai: "สวีเดน"},
    SGD: { country: "SG", flag: "https://flagicons.lipis.dev/flags/4x3/sg.svg" ,countryInThai: "สิงคโปร์"},
    TRY: { country: "TR", flag: "https://flagicons.lipis.dev/flags/4x3/tr.svg" ,countryInThai: "ตุรกี"},
    THB: { country: "TH", flag: "https://flagicons.lipis.dev/flags/4x3/th.svg" ,countryInThai: "ไทย"},
    USD: { country: "US", flag: "https://flagicons.lipis.dev/flags/4x3/us.svg" ,countryInThai: "สหรัฐอเมริกา"},
    ZAR: { country: "ZA", flag: "https://flagicons.lipis.dev/flags/4x3/za.svg" ,countryInThai: "แอฟริกาใต้"},
};

export default currencyFlags;