const url = "https://covid19.mathdro.id/api";

const getDailyData = async () => {
    try {
        const response = await fetch(`${url}/daily`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getAllInfo = async () => {
    try {
        const response = await fetch(`${url}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getCountries = async () => {
    try {
        const response = await fetch(`${url}/countries`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

const getInfoByCountry = async (country: string) => {
    try {
        const response = await fetch(`${url}/countries/${country}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export {
    getAllInfo,
    getDailyData,
    getCountries,
    getInfoByCountry,
};