import { useState, useEffect } from 'react';
import JobCards from './JobCards';

const FindJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/jobs.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();

  }, []); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSectorChange = (event) => {
    setSelectedSector(event.target.value);
  };

  // Filter jobs 
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedSector === '' || job.sectorType === selectedSector)
  );

  const sectors = [...new Set(jobs.map(job => job.sectorType))];

  return (
    <div className="mt-10">

      <div className='md:grid grid-cols-4 gap-5'>
        <div className='col-span-1 sticky top-0'>
          {/* Search input */}
          <input
            type="text"
            placeholder="Search by job title"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          {/* Sector filter */}
          <select
            value={selectedSector}
            onChange={handleSectorChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">All Sectors</option>
            {sectors.map((sector, index) => (
              <option key={index} value={sector}>{sector}</option>
            ))}
          </select>
        </div>
        <div className='col-span-3'>
          {/* Display filtered jobs */}
          {filteredJobs.map((job, index) => (
            <JobCards key={index} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
