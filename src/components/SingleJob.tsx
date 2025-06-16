import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { JobPropsType } from "../../declaration";
import Link from "next/link";
import Image from "next/image";
const SingleJob = ({
  job,
  forHome = true,
}: {
  job: JobPropsType;
  forHome?: boolean;
}) => {
  const { company_logo, company_name, title, salary, id } = job;
  return (
    <div className="w-full flex justify-between items-center">
      <div className=" flex items-center justify-center gap-2">
        {forHome &&
          (company_logo ? (
            <Image
              src={company_logo}
              alt={`${company_name}'s logo`}
              height={65}
              width={65}
              className="rounded-xl inline shadow p-2"
            />
          ) : (
            <BriefcaseBusiness
              size={65}
              strokeWidth={1.2}
              className="p-3 bg-secondary text-black rounded-xl inline"
            />
          ))}
        <div className="inline">
          <p className="font-medium text-base">
            <span className="">{title}</span>{" "}
            <span className="font-normal italic">at</span> {company_name}
          </p>
          <p className="italic text-black/60">
            {salary.length === 0 ? "Not specified" : salary}
          </p>
        </div>
      </div>
      <Link
        href={`/job/${id}`}
        className="inline font-normal text-black/70 hover:text-black px-3 py-2 bg-secondary rounded-xl transition-all hover:font-medium"
      >
        View More
      </Link>
    </div>
  );
};

export default SingleJob;
