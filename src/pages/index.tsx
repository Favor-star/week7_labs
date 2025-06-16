import Hero from "@/components/Hero";
import FeaturedJobs from "@/components/FeaturedJobs";
import { InferGetStaticPropsType } from "next";
import type { JobsResponse } from "../../declaration";
import { GetStaticProps } from "next";
import { mockJobs } from "@/mocks/mockJobs";

export default function Home({
  jobs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="max-w-screen-lg  w-full space-y-9">
      <Hero />
      <FeaturedJobs jobs={jobs} />
    </div>
  );
}

export const getStaticProps = (async () => {
  const res = await fetch("https://remotive.com/api/remote-jobs?limit=20");
  const jobs: JobsResponse = await res.json();
  // const jobs = mockJobs;
  return {
    props: { jobs },
  };
}) satisfies GetStaticProps<{ jobs: JobsResponse }>;
