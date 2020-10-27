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
    summary,
    vehicle,
    hourly_rate,
    user_rating
  } = props.tasker;
  return (
    <>
      <div className="tasker__details card border-dark mb-3" onClick={e => e.stopPropagation()}>
        <article className="left_details">
          <img className="card-img-top" src={photo_url} alt={first_name + " " + last_name} />
        </article >
        <div className="right_details">
          <div className="card-body">
            <header>
              <h5>
                {first_name + ' ' + last_name}
              </h5>
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
            </header>
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
          <div className="comment-review">
            <p>{"About me: " + summary}</p>
            <blockquote class="blockquote mb-0">
              <p>{summary}</p>
              <footer class="blockquote-footer">Reviewer</footer>
            </blockquote>
          </div>
          <footer>
            <button>Chat now!</button>
            <button>Book now!</button>
          </footer>
        </div>
      </div>
    </>
  )
};