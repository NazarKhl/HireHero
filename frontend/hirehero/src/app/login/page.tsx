"use client"
import { LoginForm } from "@/components/login-form"

export default function LoginPage(){
    return( 
        <div className="bg-color flex min-h-svh flex-col items-center justify content gap-6 p-66 md:p-30 ">
            <LoginForm/>
        </div>
    )
}