import JoinImg from '../../assets/Football_SportHomepage_5.png'
import img7 from '../../assets/i-icon7.svg'
import img11 from '../../assets/i-icon11.svg'
const JoinCommite = () => {

    return (
        <div className='grid grid-cols-4 mt-20 items-center gap-4'>
            <div className='col-span-2'>
                <img src={JoinImg} alt="" />
            </div>
            <div className='col-span-2'>
                <div className='flex gap-4'>
                    <img src={img7} alt="" />
                    <img src={img11} alt="" />
                </div>
               
                    <h2 className='text-2xl font-bold'>Join the community to discover trends</h2>
                    <p>Ask the experts you coaching questions, get advice on your queries and trends. Ask questions to the community and discuss topics in the answers section, discover trending content on the newsfeed and highlights from your team.</p>
                    <li>Join the debate - share your expertise and discuss topics with others</li>
                    <li>Daily trending content so you can see the best there is</li>
                    <li>Stay connected to your own team of coaches and work collaboratively on sessions</li>
                
            </div>
        </div>
    );
};

export default JoinCommite;