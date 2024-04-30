import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/bannerImg.png"

const Banner = () => {
    return (
            <div className="max-w-screen-2xl mx-auto">
                <div className="max-w-screen-xl mx-auto ">
                    <div className="flex px-10 lg:px-0 justify-between flex-col-reverse md:flex-row items-center">
                        <div className="flex-1 space-y-10 py-5 mt-20">
                            <h3 className="text-2xl lg:text-6xl font-semibold">Grow With Us  <br className="hidden lg:flex " /> And build Your Career</h3>
                            <p className="md:text-base lg:text-lg text-gray-600">Good life begins with a good company. Lets create a better future by looking for jobs here</p>

                            <div className="flex gap-2 ">
                                <button className="btn bg-blue-500 text-white normal-case px-10"><NavLink to="/">Get Stated</NavLink></button>
                                <button className="btn border-2 border-blue-500 text-blue-500 text-base normal-case"><NavLink className="flex items-center gap-2" to="/"> Watch Video</NavLink></button>
                            </div>
                        </div>


                        <div className="flex-1 relative mt-10">
                            <div>
                                <img className="md:h-96 lg:h-full md:w-[480px] lg:w-full" src={bannerImg} alt="" />
                            </div>
                            
                            <div className="absolute bottom-0 right-1 bg-white rounded-xl drop-shadow-xl p-4 w-[300px]">
                                
                                <p className="text-gray-600 pt-2">Online social networking and micro-blogging service that....<NavLink className="text-blue-700 font-semibold" to="/">Read more</NavLink> </p>
                                <div className="pt-3">
                                    <button className="btn btn-sm bg-blue-100  text-sm text-blue-900 normal-case"><NavLink className="flex items-center gap-2" to="/">Fulltime</NavLink></button>
                                    <button className="btn btn-sm bg-green-100 text-sm text-green-800 normal-case mx-3"><NavLink className="flex items-center gap-2" to="/">Remote</NavLink></button>
                                    <button className="btn btn-sm bg-fuchsia-100  text-sm text-fuchsia-800 normal-case"><NavLink className="flex items-center gap-2" to="/">Anywhere</NavLink></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Banner;