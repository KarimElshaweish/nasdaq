import { API_KEY } from "@env";

const computeUrl = (url: string) => `${url}&apiKey=${API_KEY}`;

export default computeUrl;
