"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { date, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { signUp, signIn, getLoggedInUser } from "@/lib/actions/user.actions";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(type === "sign-up" && {
        firstName: "",
        lastName: "",
        address: "",
        state: "",
        postalCode: "",
        dateOfBirth: "",
        ssn: "",
      }),
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        const newUser = await signUp(data);
        setUser(newUser);
      }
      if (type === "sign-in") {
        // const response = await signIn({
        //   email: data.email,
        //   password: data.password,
        // });
      }
    } catch (error) {
      console.error("Error:", error);
    }


    setIsLoading(false);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image src="/icons/logo.svg" alt="Logo" width={50} height={50} />
          <h1 className="ml-2 text-26 font-ibm-plex-serif font-bold text-black-1">
            Panel
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4 ">
                    <CustomInput
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                      control={form.control}
                    />
                    <CustomInput
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                      control={form.control}
                    />
                  </div>
                  <CustomInput
                    name="address"
                    label="Address"
                    placeholder="Enter your specific address"
                    control={form.control}
                  />
                   <CustomInput
                    name="city"
                    label="City"
                    placeholder="Enter your specific city"
                    control={form.control}
                  />
                  <CustomInput
                    name="state"
                    label="State"
                    placeholder="Example: NY"
                    control={form.control}
                  />
                  <CustomInput
                    name="postalCode"
                    label="Postal Code"
                    placeholder="Example: 10001"
                    control={form.control}
                  />
                  <CustomInput
                    name="dateOfBirth"
                    label="Date of Birth"
                    placeholder="YYYY-MM-DD"
                    control={form.control}
                  />
                  <CustomInput
                    name="ssn"
                    label="Social Security Number"
                    placeholder="Example: 123-45-6789"
                    control={form.control}
                  />
                </>
              )}
              <CustomInput
                name="email"
                label="Email"
                placeholder="Enter your username or email"
                control={form.control}
              />

              <CustomInput
                name="password"
                label="Password"
                placeholder="Enter your password"
                control={form.control}
              />
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      &nbsp;Loading...
                    </>
                  ) : (
                    <>{type === "sign-in" ? "Sign In" : "Sign Up"}</>
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
