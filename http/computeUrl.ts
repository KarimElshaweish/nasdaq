import { API_KEY,BASE_URL } from "@env";

const computeUrl = (url: string) => `${url}&apiKey=${API_KEY}`;

export default computeUrl;