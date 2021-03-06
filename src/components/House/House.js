import React, { useContext } from 'react';
import bed from '../../images/logos/bed.png'
import bath from '../../images/logos/bath.png'
import location from '../../images/logos/location.png'
import { Link, useHistory } from 'react-router-dom';
import { SelectedHouseContext } from '../../App';

const House = ({ house }) => {
    const history = useHistory();
    const [selectedHouse, setSelectedHouse] = useContext(SelectedHouseContext)

    const handleViewDetails = (house) => {
        history.push(`/house/${house.name}`)
        setSelectedHouse(house)
    }

    return (
        <div className='col-md-4 card-group mb-4'>
            <div class="card">
                <img src={house.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{house.name}</h5>
                    <p class="card-text">
                        <img
                            height="20px"
                            className='mr-2'
                            src={location}
                            alt="location-icon" />
                        {house.location}
                    </p>
                    <div className='d-flex mb-2'>
                        <p class="card-text">
                            <img
                                height="20px"
                                className='mr-2'
                                src={bed}
                                alt="bed-icon" />
                            {house.bedrooms} Bedrooms
                        </p>
                        <p class="card-text ml-5">
                            <img
                                height="20px"
                                className='mr-2'
                                src={bath}
                                alt="bath-icon" />
                            {house.bathrooms} Bathrooms
                        </p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2
                            style={{ color: '#275A53' }}
                            className='font-weight-bold'
                        >${house.price}</h2>
                        <Link onClick={() => handleViewDetails(house)}
                            className='btn btn-custom text-white px-4 py-2'
                        >
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default House;