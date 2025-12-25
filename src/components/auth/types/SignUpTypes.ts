export type Totp = {
    phone: string;
    otp: string;
}
export type TserverErrors = {
    [key: string]: string[];
};

export type SignUpErrorResponse = {
    message: string;
    errors: TserverErrors;
};
