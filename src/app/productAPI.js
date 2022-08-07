// the actual method (2)
import axios from "axios";
const SEREVR = "http://localhost:3005";

export function fetchData() {
  return new Promise((resolve) =>
    axios(SEREVR + "/products").then((res) => resolve(res))
  );
}

export function updData(newProd) {
  return new Promise((resolve) =>
    axios
      .put(SEREVR + "/products/" + newProd.id, newProd)
      .then((res) => resolve(res))
  );
}
export function addData(newProd) {
  return new Promise((resolve) =>
    axios.post(SEREVR + "/orders", newProd).then((res) => resolve(res))
  );
}
