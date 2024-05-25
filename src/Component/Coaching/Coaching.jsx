import coachingImg from '../../assets/Football_SportHomepage_2.png'
import logo1 from '../../assets/i-icon1.svg'
import logo2 from '../../assets/i-icon10.svg'
const Coaching = () => {


    return (
        <div className='mt-40 bg-base-200 p-6'>
            <h2 className="text-3xl font-semibold text-center">TOOLS FOR COACHING CONFIDENCE</h2>
            <div className='grid grid-cols-4 mt-5'>
                <div className=' col-span-2'>
                    <div className='flex gap-4'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    </div>
                    
                    <h2 className='text-2xl font-semibold mt-4'>Need inspiration for your sessions?</h2>
                    <p>Never be short of ideas with our ever growing collection of Football drills. With pro drills and the community section, the inspiration is constantly growing. Browse Football drills by category or use the search bar to quickly find what you are looking for</p>
                    <li className='mt-2'>Over 500+ football training games and drills</li>
                    <li>Constant stream of community football drills and trends</li>
                    <li> Favourites the football drills you like to save them and find them more easily</li>
                    
                </div>
                <div className='col-span-2'>
                    <img src={coachingImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Coaching;