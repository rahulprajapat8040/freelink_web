'use client'

import Input from "@/components/ui/Input";
import { LoginInterface } from "@/utils/api/interfaces/auth/login.interface";
import { POSTAPI } from "@/utils/api/post.api";
import { useRouter } from "next/navigation";
import { FieldErrors, Resolver, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Github, Mail, ShieldCheck } from "lucide-react"; // Replace icons as needed

const resolver: Resolver<LoginInterface> = async (values) => {
    const requiredFields: Partial<Record<keyof LoginInterface, string>> = {
        email: "Email is required",
        password: "Password is required",
    };
    const errors: FieldErrors<LoginInterface> = {};
    for (const key in requiredFields) {
        const field = key as keyof LoginInterface;
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

    const { register, handleSubmit, formState: { errors } } = useForm<LoginInterface>({ resolver });

    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await POSTAPI.login(data)
            if (res.success) {
                router.push('/') // optional redirect
                toast.success(`${res.message}`)
            }
        } catch (error) {
            toast.error(error as string)
        }
    })

    return (
        <section className="flex items-center justify-center w-full min-h-screen bg-gray-100">
            <form
                onSubmit={onSubmit}
                className="w-full max-w-md space-y-6 p-8 bg-white rounded-2xl shadow-md"
            >
                <h2 className="text-xl font-semibold text-center text-gray-800">
                    Welcome Back 👋
                </h2>

                {/* OAuth Buttons */}
                <div className="flex gap-4">
                    <button
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-50"
                    >
                        <Github className="w-5 h-5" />
                        <span className="text-sm">GitHub</span>
                    </button>
                    <button
                        type="button"
                        className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-50"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm">Google</span>
                    </button>
                </div>

                {/* OR Separator */}
                <div className="flex items-center gap-2">
                    <div className="h-px bg-gray-300 flex-1" />
                    <span className="text-xs text-gray-500">OR</span>
                    <div className="h-px bg-gray-300 flex-1" />
                </div>

                {/* Email */}
                <div>
                    <Input
                        {...register("email")}
                        type="email"
                        placeholder="eg: johndoe@domain.com"
                        label="Email"
                        error={errors.email?.message}
                    />
                </div>

                {/* Password */}
                <div>
                    <Input
                        {...register("password")}
                        type="password"
                        placeholder="Enter password"
                        label="Password"
                        error={errors.password?.message}
                    />
                </div>

                {/* Submit */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-sky-600 text-white font-medium py-2 rounded-lg hover:bg-sky-700 transition"
                    >
                        Login
                    </button>
                </div>
            </form>
        </section>
    );
}
