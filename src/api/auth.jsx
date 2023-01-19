import axios from "axios";

const BASE_URL = "https://relevel-crm--backend.herokuapp.com";

// SIGNUP
// API - POST
export async function userSignup(data) {
  return await axios.post(`${BASE_URL}/crm/api/v1/auth/signup`, data);
}

// SIGNIN
// API - POST
export async function userSignIn(data) {
  return await axios.post(`${BASE_URL}/crm/api/v1/auth/signin`, data);
}
