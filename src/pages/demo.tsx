import { type NextPage } from "next";
import dayjs from "dayjs";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { Calendar } from "~/components/calendar";
import { Avaliability } from "~/components/availability";
import Dropdown from "~/components/_global/dropdown";
import { timeIncrement } from "~/helpers/timeIncrement";

const Demo: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen bg-black">
        <div>
          <Avaliability />
        </div>
      </main>
    </>
  );
};

export default Demo;
