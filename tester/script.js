import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 100000, // Number of Virtual Users
  duration: "30s", // Test duration
};

export default function () {
  http.get("https://smpialfakhir.sch.id");
  sleep(1); // Wait for 1 second between requests
}
