import SingleJob from "./SingleJob";
import { JobsResponse } from "../../declaration";

const FeaturedJobs = ({ jobs }: { jobs: JobsResponse }) => {
  return (
    <div className="w-full space-y-3">
      <p className="font-bold text-xl ">Featured jobs</p>
      {jobs?.jobs.map((job) => (
          <SingleJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default FeaturedJobs;
