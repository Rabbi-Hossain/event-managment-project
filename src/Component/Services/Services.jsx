import { Link } from "react-router-dom";


const Services = ({ load }) => {

    const { id, title, img , details} = load


    return (
        <div className="mt-12 flex">
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-[300px]" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {/* <p>{details }</p> */}

                    {
                        details.length > 40 ? <p>{details.slice(0,40)}</p>
                        :
                        <p>{details}</p>
                    }
                    <div className="card-actions ">
                        <Link to={`/load/${id}`}  className="btn btn-primary w-full">Details</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;