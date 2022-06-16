import React, {useEffect, useState, ChangeEvent} from 'react';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem";
import InfoBox from './Components/InfoBox';
import LineChart from './Components/Chart/lineGraph';
import BarChart from './Components/Chart/barGraph';
import Loading from './Components/Loading';
import './App.scss';

import {
  getDailyData,
  getAllInfo,
  getCountries,
  getInfoByCountry,
} from "./apis/api";

//import { prettyPrintStat } from "./extras/functions"
import { CovidInfo, DailyInfo } from "./extras/objectInterface"
import { prettyPrintStat } from './extras/functions';


interface Country {
  name: string;
  iso2: string;
  iso3: string;
}

interface CountryListResponse {
  country: string;
  countryInfo: { iso2: string, iso3: string };
}

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [covidInfo, setCovidInfo] = useState<CovidInfo | undefined>(undefined);
  const [dailyInfo, setDailyInfo] = useState<DailyInfo[]>([]);
  //const [casesType, setCasesType] = useState<"cases" | "deaths" | "recovered">("cases");

  useEffect(() => {
    const getCountriesList = async () => {
      const response = await getCountries();
      const r: CovidInfo[][] = Object.values(response);

      let countryList = r[0].map((country: CovidInfo) => ({
        name: country.name,
        iso2: country.iso2,
        iso3: country.iso3,
      }));

      countryList.unshift({name: "Global", iso2: "Global", iso3: "Global"});

      setCountries(countryList);
      setCountry("Global");
    };

    getCountriesList();
  }, []);

  useEffect(() => {
    const fetchAllInfo = async () => {
      const response: CovidInfo = await getAllInfo();
      setCovidInfo(response);
      setIsLoading(false);
    };
    fetchAllInfo();
  }, []);

  useEffect(() => {
    const fetchDailyData = async () => {
      const response = await getDailyData();
      const r: DailyInfo[] = Object.values(response);

      setDailyInfo(r);
      console.log(r);
    };
    fetchDailyData();
  }, []);

  const onCountryChange = async (
    event: ChangeEvent<{
      name?:string | undefined;
      value: unknown;
    }>
  ) => {
    const countryC = event.target.value as string;

    let response: CovidInfo;
    let changeGraph: DailyInfo[];
    if (countryC === "Global") {
      response = await getAllInfo();
      changeGraph = Object.values(await getDailyData());
      console.log(response);
    } else {
      response = await getInfoByCountry(countryC);
      console.log(response);
      changeGraph = [];
    }
    setCovidInfo(response);
    setCountry(event.target.value as string);
    setDailyInfo(changeGraph);
  };

  function LoadGraph() {
    if (dailyInfo.length !== 0) {
      return <LineChart 
        infected={dailyInfo?.map((info: DailyInfo) => info.totalConfirmed)}
        deaths={dailyInfo?.map((info: DailyInfo) => info.deaths.total)}
        dates={dailyInfo?.map((info: DailyInfo) => info.reportDate)}
      />
    } else {
      return <BarChart
        infected={covidInfo?.confirmed.value || 0}
        deaths={covidInfo?.deaths.value || 0}
        recovered={covidInfo?.recovered.value || 0}
        country={country}
      />
    }
  }

  if (isLoading) {
    return <Loading/>
  }
  return (
    <div className="App">
      <div className='app__left'>
        <div className='app__header'>
          <h1>COVID TRACKER</h1>
          <FormControl className='app__drop-down' variant='outlined'>
            <Select onChange={onCountryChange} value={country}>
              {countries.map((country: Country, index: number) => {
                return (
                  <MenuItem key={index.toString()} value={country.name}>
                    {country.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className='app__stats'>
          <InfoBox
            title='Coronavirus cases'
            cases={prettyPrintStat(covidInfo?.confirmed.value || 0)}
            lastUpdate={covidInfo?.lastUpdate || ""}
          />
          <InfoBox
            title='Recovered'
            cases={prettyPrintStat(covidInfo?.recovered.value || 0)}
            lastUpdate={covidInfo?.lastUpdate || ""}
          />
          <InfoBox
            title='Deaths'
            cases={prettyPrintStat(covidInfo?.deaths.value || 0)}
            lastUpdate={covidInfo?.lastUpdate || ""}
          />
        </div>
        <div className='app__graphs'>
          <LoadGraph/>
        </div>
      </div>
    </div>
  );
}

export default App;
