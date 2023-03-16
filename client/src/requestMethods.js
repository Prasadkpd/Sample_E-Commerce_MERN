import axios from "axios";

const BASE_URL = "http://localhost:5001/api/";
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTMxYWFmOTA4ZmNkMTJkNjdmOWIzZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzg5NzM2MzEsImV4cCI6MTY3OTIzMjgzMX0.fnn3a2EznJjGx1rsyE-aaiJS5ptV1e38a0y01Yml6pE'
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
})