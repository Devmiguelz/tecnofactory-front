export interface LoginResponse {
    name:           string;
    identification: string;
    email:          string;
    token:          string;
}

export interface RegisterUser {
    name: string;
    identification: string;
    email: string;
    password: string;
}