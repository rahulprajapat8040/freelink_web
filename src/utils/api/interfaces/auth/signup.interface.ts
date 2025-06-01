export interface SignupInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    countryCode: string;
    isAgree: string;
    isSubscribed: string;
    otp?: string
}