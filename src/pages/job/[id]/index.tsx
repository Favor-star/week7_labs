import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { JobPropsType, JobsResponse } from "../../../../declaration";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

type SingleJobPost = JobPropsType;

export const getStaticPaths = (async () => {
  const res = await fetch("https://remotive.com/api/remote-jobs?limit=20");
  const result: JobsResponse = await res.json();
  // const result = mockJobs;

  const paths = result.jobs.map((job) => ({
    params: { id: String(job.id) },
  }));
  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const res = await fetch("https://remotive.com/api/remote-jobs?limit=20", {});
  const result: JobsResponse = await res.json();
  // const result = mockJobs;
  const singleJobPost =
    result.jobs.find((el) => el.id === Number(params?.id)) ??
    ({} as SingleJobPost);
  return {
    props: { singleJobPost },
  };
}) satisfies GetStaticProps<{
  singleJobPost: SingleJobPost;
}>;

const SingleJob = ({
  singleJobPost,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  if (!singleJobPost || Object.keys(singleJobPost).length === 0) {
    return <p>Job not found</p>;
  }

  const {
    title,
    company_name,
    job_type,
    category,
    candidate_required_location,
    description,
    tags,
    url,
    publication_date,
    salary,
  } = singleJobPost ?? {};
  return (
    <section className="w-full max-w-screen-lg space-y-3">
      <div className="w-full flex justify-between">
        <p className="text-4xl font-black">{title}</p>
        {/* <div className="inline">
          <button className="inline px-3 py-2 rounded-xl text-black bg-secondary">
            Save a job
          </button> */}
        <Link
          href={`/company/${company_name}`}
          className="inline px-3 py-2 rounded-xl text-black bg-secondary"
        >
          Visit Company
        </Link>
        {/* </div> */}
      </div>

      <div className="text-sm text-black/60 p-2 rounded-full border bg-secondary w-fit border-white/55">
        at {company_name}
      </div>
      <div className="font-bold text-lg">Job details</div>
      <div className=" flex items-center gap-0 pt-3 pb-1 border-t-2 border-secondary">
        <div className="flex flex-col gap-1 flex-1 w-full">
          <p className="text-black/50 text-sm">Category</p>
          <p className="text-black text-sm">{category}</p>
        </div>
        <div className="flex flex-col gap-1 flex-1 w-full">
          <p className="text-black/50 text-sm">Employment type</p>
          <p className="text-black text-sm">{job_type}</p>
        </div>
      </div>
      <div className=" flex items-center gap-0 pt-3 pb-1 border-t-2 border-secondary">
        <div className="flex flex-col gap-1 flex-1 w-full">
          <p className="text-black/50 text-sm">
            Publication date (as on remotive.com){" "}
          </p>
          <p className="text-black text-sm">
            {new Date(publication_date).toLocaleDateString()}
            {" |  "}
            {new Date(publication_date).toLocaleTimeString()}
          </p>
        </div>
        <div className="flex flex-col gap-1 flex-1 w-full">
          <p className="text-black/50 text-sm">Salary</p>
          <p className="text-black text-sm">{salary}</p>
        </div>
      </div>
      <div className=" flex items-center gap-0 pt-3 pb-1 border-t-2 border-secondary">
        <div className="flex flex-col gap-1 flex-1 w-full">
          <p className="text-black/50 text-sm">Candidate required location</p>
          <p className="text-black text-sm">{candidate_required_location}</p>
        </div>
        {/* <div className="flex flex-col gap-1 flex-1 w-full">
          <p className="text-black/50 text-sm">Employment type</p>
          <p className="text-black text-sm">5+ years</p>
        </div> */}
      </div>
      <div className="font-bold text-lg">Job description</div>
      {/* <div className="w-full">{`${description}`}</div> */}
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <div className="font-bold text-lg">Tags</div>
      <div className="w-full flex flex-wrap gap-2 ">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="p-2 rounded-full px-4 bg-secondary text-black text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-end w-full justify-end gap-2 pt-10">
        <Link
          href={url}
          target="_blank"
          className="px-3 py-2 rounded-xl text-white bg-primary inline-flex items-center gap-1"
          onClick={() => console.log("clicked")}
        >
          Apply now <ExternalLinkIcon strokeWidth={1.3} size={18} />
        </Link>
        <Link
          href={`/company/${company_name}`}
          className="inline px-3 py-2 rounded-xl text-black bg-secondary"
        >
          Visit company
        </Link>
      </div>
    </section>
  );
};

export default SingleJob;
