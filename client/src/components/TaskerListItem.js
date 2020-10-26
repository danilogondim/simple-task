import React from 'react';
import { Rating } from '@material-ui/lab';
import './TaskerListItem.scss';
import { AirportShuttle, LocalShipping, DriveEta, DirectionsBike, SportsMotorsports, DirectionsTransit } from '@material-ui/icons';
// van: <AirportShuttle/>
// truck: <LocalShipping/>
// car: <DriveEta/>
// bicycle: <DirectionsBike/>
// motorcycle: <SportsMotorsports/>
// public: <DirectionsTransit/>
export default function TaskerListItem(props) {
  const { id,
    first_name,
    last_name,
    // phone,
    // address,
    coordinates,
    // email,
    photo_url,
    vehicle,
    hourly_rate,
    user_rating
  } = props.tasker;
  return (
    <article className='tasker card'>
      <li key={id} >
        <img className="card-img-top" src={photo_url} alt={first_name + " " + last_name} />
        <div className="card-body">
          <div className="rating">
            {user_rating === null && <p>New Tasker!</p>}
            {user_rating !== null &&
              <>
                <Rating
                  name="half-rating-read"
                  defaultValue={Number(user_rating).toFixed(2)}
                  precision={0.5}
                  readOnly
                  className="rating-result"
                />
              </>
            }
          </div>
          <h5>
            {first_name + ' ' + last_name}
          </h5>
          <div className="price-vehicle">
            <span>
              {'$' + (hourly_rate / 100).toFixed(2) + '/h'}
            </span>
            <span>
              {'Vehicle: ' + vehicle}
            </span>
          </div>
        </div>
      </li>
    </article >
  );
};