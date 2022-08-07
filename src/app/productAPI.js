// the actual method (2)
import axios from "axios";
const SEREVR = "http://localhost:3005/products";

export function fetchData() {
  return new Promise((resolve) => axios(SEREVR).then((res) => resolve(res)));
}
