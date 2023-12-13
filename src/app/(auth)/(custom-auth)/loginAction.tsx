// import { signIn } from 'auth';
import { signIn } from "next-auth/react";
// ...
import { useSearchParams, useRouter } from "next/navigation";
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {


  try {
    const res = await signIn('credentials', Object.fromEntries(formData));
    if (!res?.error) {
      router.push("/");
    } else {
      throw Error(res?.error);
    }
    // await signIn('credentials',{
    //   redirect: false,
    //   username:"TEs",
    //   password: "Tes",
    // });
    // const res = await signIn("credentials", {
    //   redirect: false,
    //   username: values.email,
    //   password: values.password,
    //   callbackUrl,
    // });

  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialsSignin';
    }
    throw error;
  }
}