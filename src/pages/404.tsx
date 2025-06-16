import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-full max-w-screen-lg flex flex-col gap-3 p-4 justify-center items-center  min-h-[80svh] ">
      <p className="text-base">
        <span className="font-bold text-xl">404 </span> | Not found
      </p>
      <Link
        href={"/"}
        className="py-2 px-4 bg-secondary rounded-xl hover:underline transition-all"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
