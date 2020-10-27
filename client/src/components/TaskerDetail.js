import React from 'react';
import './TaskerDetail.scss';
import { Rating } from '@material-ui/lab';
import { AirportShuttle, LocalShipping, DriveEta, DirectionsBike, SportsMotorsports, DirectionsTransit } from '@material-ui/icons';


export default function TaskerDetail(props) {
  const { id,
    first_name,
    last_name,
    phone,
    address,
    coordinates,
    email,
    photo_url,
    vehicle,
    hourly_rate,
    user_rating
  } = props.tasker;
  return (
    <>
      <div className="tasker__details card border-dark mb-3" onClick={props.setTasker}>
        <article className="tasker__information" onClick={props.setTasker}>
          <img className="card-img-top" src={photo_url} alt={first_name + " " + last_name} />
          <div className="card-body">
            <div className="rating">
              {user_rating === null && <p>New Tasker!</p>}
              {user_rating !== null &&
                <>
                  <Rating
                    name="half-rating-read"
                    defaultValue={Number(Number(user_rating).toFixed(2))}
                    precision={0.1}
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
                {vehicle === 'van' && <AirportShuttle />}
                {vehicle === 'truck' && <LocalShipping />}
                {vehicle === 'car' && <DriveEta />}
                {vehicle === 'bicycle' && <DirectionsBike />}
                {vehicle === 'motorcycle' && <SportsMotorsports />}
                {vehicle === 'public' && <DirectionsTransit />}
              </span>
            </div>
          </div>
        </article >
      </div>
    </>
  )
};