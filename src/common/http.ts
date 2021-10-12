import axios from "axios";
import { environment } from "common/environment";

export const HttpClient = axios.create({
  baseURL: environment.apiUrl,
});
