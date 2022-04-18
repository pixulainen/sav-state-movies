import axios, { AxiosInstance } from 'axios';

export default class RestClient {
  baseUrl!: string;
  axiosClient: AxiosInstance;
  api_key = 'qWDbEIrp5rg4GVC11m8vou7rFtJrv0cz';

  constructor() {
    this.baseUrl = 'https://api.tvmaze.com';
    this.axiosClient = axios.create({ baseURL: this.baseUrl });
  }

  get(url: string) {
    return this.axiosClient
      .get(`${this.baseUrl}${url}`, {
        params: { api_key: this.api_key },
      })
      .then((res) => res)
      .catch((err) => Promise.reject(err));
  }
}
