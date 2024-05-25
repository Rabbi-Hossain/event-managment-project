import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetails = () => {

    const cards = useLoaderData()
    const { id } = useParams()

    const card = cards.find(card => card.id == id)


    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-6">
                <figure><img src={card.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    <p>{card.details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;