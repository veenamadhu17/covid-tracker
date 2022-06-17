import {
    getDailyData,
    getAllInfo,
    getCountries,
    getInfoByCountry,
  } from "../api";
  
test("test getDailyData", async function () {
    const response = await getDailyData();
    expect(response[0].reportDate).toBe("2020-01-22");
});

test("test getAllInfo", async function () {
    const response = await getAllInfo();
    expect(response.confirmed.detail).toBe("https://covid19.mathdro.id/api/confirmed");
});

test("test getCountries", async function () {
    const response = await getCountries();
    expect(response.countries[0].name).toBe("Afghanistan");
});

test("test getInfoByCountry", async function () {
    const response = await getInfoByCountry("NL");
    expect(response.confirmed.detail).toBe("https://covid19.mathdro.id/api/countries/NL/confirmed");
});