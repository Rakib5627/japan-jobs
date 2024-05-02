import PropTypes from 'prop-types';

const JobCard = ({ job }) => {
    const { platform, title, post_time, description } = job;


    const inputString = description;
    const wordsArray = inputString.split(' ');
    const firstFiveWords = wordsArray.slice(0, 8);
    const shortDescription = firstFiveWords.join(' ');

    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
            <p className="text-gray-500 text-sm">{platform}</p>
            <p className="text-gray-400 text-xs">{post_time}</p>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">{title}</h2>
            <p className="text-gray-600 mt-2">{shortDescription}</p>
            <button className="mt-6 text-sm px-6 py-1 rounded-sm text-fuchsia-800 border-fuchsia-800 hover:bg-fuchsia-800 hover:text-white"> Apply Now</button>
        </div>
    </div>
            
        
    );
};
JobCard.propTypes = {
    job : PropTypes.object,

}



export default JobCard;