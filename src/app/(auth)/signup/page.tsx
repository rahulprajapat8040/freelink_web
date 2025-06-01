'use client'
import CountrySelector, { Country } from "@/components/ui/CountrySelector";
import Input from "@/components/ui/Input";
import { SignupInterface } from "@/utils/api/interfaces/auth/signup.interface";
import { POSTAPI } from "@/utils/api/post.api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldErrors, Resolver, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const resolver: Resolver<SignupInterface> = async (values) => {
    const requiredFields: Partial<Record<keyof SignupInterface, string>> = {
        firstName: "First name is required",
        lastName: "Last name is required",
        email: "Email is required",
        password: "Password is required",
    };
    const errors: FieldErrors<SignupInterface> = {};
    for (const key in requiredFields) {
        const field = key as keyof SignupInterface;
        if (!values[field]) {
            errors[field] = {
                type: "required",
                message: requiredFields[field]
            }
        }
    }
    return {
        values: Object.keys(errors).length === 0 ? values : {},
        errors,
    };
};

export default function Signup() {
    const router = useRouter()

    const [state, setState] = useState<{ step: number, otp: string, apiType: 'register' | 'otp' }>({
        step: 1,
        otp: "",
        apiType: "register"
    })

    const changeState = (key: string, value: any) => {
        setState((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<SignupInterface>({ resolver });

    const onSubmit = handleSubmit(async (data) => {
        try {
            if (state.step === 1 || state.apiType === 'register') {
                const res = await POSTAPI.signup(data)
                if (res.success) {
                    changeState('step', 2)
                    changeState('apiType', 'otp')
                    toast.success(`${res.message}, ${res.data}`)
                }
            } else if (state.step === 2 && state.apiType === 'otp') {
                const res = await POSTAPI.signup({ ...data, otp: state.otp })
                if (res.success) {
                    router.push('/')
                    toast.success(res.message)
                }
            }
        } catch (error) {
            toast.error(error as string)
        }
    })

    const resendClick = () => {
        changeState('apiType', 'register')
        onSubmit()
    }

    return (
        <section
            className="flex AuthBG items-center justify-center w-full min-h-dvh">
            <form
                onSubmit={onSubmit}
                style={{ scrollbarWidth: 'none' }}
                className="w-full max-w-xl md:max-h-[450px] overflow-y-scroll space-y-4">
                {
                    state.step === 1 && (
                        <>
                            <div className="flex items-center gap-3">
                                <button
                                    className="w-full max-w-2xs rounded-md mx-auto h-10 bg-gray-light"
                                />
                                <button
                                    className="w-full max-w-2xs rounded-md mx-auto h-10 bg-gray-light"
                                />
                            </div>
                            <div className="flex items-center gap-3 justify-between">
                                <div className="w-full h-px border-white border"></div>
                                <span>OR</span>
                                <div className="w-full h-px border-white border"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <Input
                                    {...register("firstName")}
                                    type="text"
                                    placeholder="First Name..."
                                    label="First Name"
                                    error={errors?.firstName?.message}
                                />
                                <Input
                                    {...register("lastName")}
                                    type="text"
                                    placeholder="Last Name..."
                                    label="Last Name"
                                    error={errors?.lastName?.message}
                                />
                            </div>
                            <div>
                                <Input
                                    {...register("email")}
                                    type="email"
                                    placeholder="eg: johndoe@domain.com"
                                    label="Email"
                                    error={errors.email?.message}
                                />
                            </div>
                            <div>
                                <Input
                                    {...register("password")}
                                    type="password"
                                    placeholder="Enter password here.. (note: password must be 8 char. or more)"
                                    label="Password"
                                    error={errors.password?.message}
                                />
                            </div>
                            <CountrySelector onSelectCountry={(country) => setValue("countryCode", String(country.code))} />
                            <div className="flex items-center gap-4">
                                <Input
                                    {...register("isAgree")}
                                    type="checkbox"
                                    id="isAgreed"
                                    required
                                />
                                <label htmlFor="isAgreed">I agree, all terms & condition and privicay policy of freelink</label>
                            </div>
                            <div className="flex gap-4">
                                <Input
                                    {...register("isSubscribed")}
                                    type="checkbox"
                                    id="isSubscribed"
                                    required
                                />
                                <label htmlFor="isSubscribed">Subscribe FreeLinks for stay update with our new features & jobs</label>
                            </div>
                        </>
                    )
                }
                {
                    state.step === 2 && (
                        <div className="max-w-sm mx-auto flex flex-col items-center space-y-4">
                            <h2 className="text-xl font-semibold text-center">Verify OTP</h2>
                            <p className="text-sm text-gray-800 text-center">
                                We've sent a 6-digit code to your email. Please enter it below.
                            </p>

                            <Input
                                type="text"
                                id="otp"
                                placeholder="Enter 6-digit OTP"
                                required
                                className="text-center tracking-widest"
                                onChange={(e) => changeState("otp", e.target.value)}
                                maxLength={6}
                                minLength={6}
                                style={{ fontSize: '18px', letterSpacing: '4px' }}
                            />

                            <div className="flex justify-between w-full mt-2 text-sm text-gray-800">
                                <button
                                    type="button"
                                    onClick={() => changeState('step', 1)}
                                    className="hover:underline hover:text-white"
                                >
                                    ← Go Back
                                </button>
                                <button
                                    type="button"
                                    onClick={resendClick}
                                    className="hover:underline hover:text-white"
                                >
                                    Resend OTP
                                </button>
                            </div>
                        </div>
                    )
                }

                <div className="">
                    <button type="submit" className="w-full max-w-[200px] text-background rounded-lg mx-auto mt-8 bg-sky-600 py-2 block">
                        Register
                    </button>
                </div>
            </form>
        </section>
    );
}
