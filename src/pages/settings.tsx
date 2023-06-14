import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { Calendar } from "~/components/calendar";

const Settings: NextPage = () => {
  const { data: sessionData } = useSession();
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const avail = api.example.avaliability.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  const toggle = 0;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#a05dd4] to-[#4e56f4]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <p className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Settings
        </p>
        <input
          type="text"
          placeholder="Enter your name"
          className="rounded-full border-indigo-50 bg-white/10 px-10 py-3 font-semibold text-white no-underline outline transition hover:bg-white/10 focus:outline"
        />

        <label className="relative inline-flex cursor-pointer items-center">
          <input type="checkbox" value="" className="peer sr-only" />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-black dark:peer-focus:ring-blue-800"></div>
          {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
        </label>

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
  );
};
export default Settings;
