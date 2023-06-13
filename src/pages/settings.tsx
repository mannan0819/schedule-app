import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { DemoApp } from "~/components/calendar";


const Settings: NextPage = () => {
    const { data: sessionData } = useSession();
    const hello = api.example.hello.useQuery({ text: "from tRPC" });
    const avail = api.example.avaliability.useQuery(
        undefined, // no input
        { enabled: sessionData?.user !== undefined },
    );
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#a05dd4] to-[#4e56f4]">

            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <p className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    Settings
                </p>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/10 border-indigo-50 outline focus:outline" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
                    <Link
                        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 "
                        href="https://create.t3.gg/en/usage/first-steps"
                        target="_blank"
                    >
                        <span className="font-bold">Accept</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}
export default Settings;
