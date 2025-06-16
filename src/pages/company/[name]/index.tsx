import { mockJobs } from "@/mocks/mockJobs";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import Image from "next/image";
import React from "react";
import type { JobPropsType, JobsResponse } from "../../../../declaration";
import SingleJob from "@/components/SingleJob";

export const getStaticPaths = (async () => {
  // const res = await fetch("");
  const res = await fetch("https://remotive.com/api/remote-jobs?limit=20");
  const result: JobsResponse = await res.json();
  // const result = mockJobs;

  const paths = result.jobs.map((job) => ({
    params: { name: job.company_name },
  }));
  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  // const res = await fetch(" ");
  console.log("params in getStaticProps:", params?.name); // 👈 Add this line

  const response = mockJobs;
  const resultNames = response.jobs.map((el) => el.company_name);
  console.log("Avaliable companies: ", resultNames);
  const jobs = response.jobs.filter(
    (job) => job.company_name.trim() === params?.name
  );
  // console.log("Filtered jobs:", jobs); // Optional: log filtered jobs

  return {
    props: {
      jobs,
    },
  };
}) satisfies GetStaticProps<{ jobs: JobPropsType[] }>;

const CompanyPage = ({ jobs }: { jobs: JobPropsType[] }) => {
  const categories = [...new Set(jobs.map((job) => job.category))];
  return (
    <section className="w-full flex  gap-5 min-h-[80svh]">
      <div className="w-full max-w-3/12 flex flex-col">
        <div className="w-full flex-1">
          <p className=" p-2 text-sm">All jobs</p>
          {categories.map((category) => (
            <p className=" p-2 text-sm">{category}</p>
          ))}
        </div>
        <button className="text-white bg-primary p-2 w-full rounded-xl">
          Post a Job
        </button>
      </div>
      <div className="w-full max-w-9/12 space-y-3">
        <div className="flex justify-between">
          <Image
            src={jobs[0].company_logo}
            alt={`${jobs[0].company_name}'s company logo`}
            height={100}
            width={100}
            className="rounded-full aspect-square object-cover"
          />
          <div>
            <p className="">Company name</p>
            <p>Little description will be here if any</p>
          </div>
          <div className="self-center space-x-2">
            <button className="inline p-2 text-sm text bg-primary text-white rounded-lg">
              Follow
            </button>
            <button className="inline p-2 text-sm text bg-secondary text-black rounded-lg">
              View company's profile
            </button>
          </div>
        </div>
        <div className="text-lg font-bold">Open roles</div>
        <div className="flex flex-col gap-2 w-full">
          {jobs.map((job) => (
            <SingleJob key={job.id} job={job} forHome={false} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyPage;
