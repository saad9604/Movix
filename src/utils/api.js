import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWU4ZjY1NzNmZmIzZTM4NDExYjdjM2ZmYzk2MmEwMiIsInN1YiI6IjY0ODFlOTRmZTI3MjYwMDBhZmMxNDFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8b5_fO3sEDiGccHMmPailzSAqPcsBOxlUEB_JouBxT8";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
