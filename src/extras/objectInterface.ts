export interface CovidInfo {
    name: string;
    iso2: string;
    iso3: string;
    confirmed: {value: number; detail: string;};
    recovered: {value: number; detail: string;};
    deaths: {value: number; detail: string;};
    lastUpdate: string
};

export interface DailyInfo {
    totalConfirmed: number;
    totalRecovered: number;
    deaths: {total: number; china: number; outsideChina: number};
    reportDate: Date;
}