import axios from "axios";
import { LoginRequest, LoginResponse } from "../types";

const API_BASE_URL = 'https://purpleschool.ru/api-v2';

export async function loginRequest(info: LoginRequest): Promise<LoginResponse> {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, info);
    return response.data;
}