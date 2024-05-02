import { useEffect, useState } from "react";
import JobCards from "./JobCard";
import { Link } from "react-router-dom";


const Featured = () => {

    const [featuredJobs, setFeaturedJobs] = useState([]);

    useEffect(() => {
        fetch('popular.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])

    return (
        <>
      <div className="">

        <h3 className="text-4xl font-bold text-center mb-5">Featured jobs for you</h3>
        <p className="text-sm text-center mb-10">The most updated platform about jobs that are open</p>
        <div className="grid md:grid-cols-3 gap-5">
          {
            featuredJobs.map(job => <JobCards key={job.id}
              job={job}
            >
            </JobCards>)
          }
        </div>
        <div className="mt-6 flex justify-center">
        <Link to="/jobs" className="text-sm px-6 py-1 rounded-sm bg-fuchsia-100 text-fuchsia-800 border-2 border-fuchsia-800 hover:bg-fuchsia-800 hover:text-white">
                    Find More
                </Link>
            </div>
      </div>
    </>
    );
};

export default Featured;