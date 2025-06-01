"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createSessionClient();
    const response = await account.createEmailPasswordSession(email, password);
    return parseStringify(response);
  } catch (error) {
    console.error(error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { firstName, lastName, email, password } = userData;
  try {
    //console.log("Creating admin client...");
    const { account } = await createAdminClient();

    //console.log("Creating user account...");
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    //console.log("New user account created:", newUserAccount);

    //console.log("Creating email/password session...");
    const session = await account.createEmailPasswordSession(email, password);
    //console.log("Session created:", session);

    //console.log("Setting session cookie...");
    (await cookies()).set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const session = (await cookies()).get("appwrite-session");
    if (!session || !session.value) {
      return null; // No session, user not logged in
    }
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    console.log(error);
    return null;
  }
}
