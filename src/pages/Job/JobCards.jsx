
import PropTypes from 'prop-types';

const JobCards = ({ job }) => {
    const { picture, title, description, jobType} = job;
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-10 md:px-5">
            <figure><img src={picture} alt={title} className="w-28 h-auto hidden md:block" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                {/* <p className="text-sm text-gray-500 mb-2">Location: {location}</p> */}
                <p className="text-sm text-gray-500 mb-2">Type: {jobType}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-fuchsia-800 text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};



JobCards.propTypes = {
    job : PropTypes.object,

}


export default JobCards;