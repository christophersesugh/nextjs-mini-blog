export const config = {
  options: {
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: "bitcoin", lang: "en", page: "1", page_size: "25" },
    headers: {
      "x-rapidapi-key": "cX9S6EWy9mpJUa87VC7ItFwpHi8y6klgg17p4tzxQpU",
      "x-rapidapi-host": "free-news.p.rapidapi.com",
    },
  },
};
