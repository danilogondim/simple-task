import React from 'react';
import './TaskerDetail.scss';
import { Rating } from '@material-ui/lab';
import { AirportShuttle, LocalShipping, DriveEta, DirectionsBike, SportsMotorsports, DirectionsTransit } from '@material-ui/icons';
import { useParams, useHistory } from "react-router-dom";


export default function TaskerDetail(props) {
  const {
    // id,
    first_name,
    last_name,
    // phone,
    // address,
    // coordinates,
    // email,
    photo_url,
    summary,
    vehicle,
    hourly_rate,
    average_rating,
    reviews
  } = props.tasker;
  const { id } = useParams();

  // define review to be shown
  // if there is a review related to the current service, just take the first review (it will be the longest one between the last three most positive reviews)
  // if there is no review related to the current service, check which of the services has the best user_rating, then retrieve the first one

  const review = reviews[id] ? reviews[id][0] : (Object.keys(reviews).length === 0 ? "" : Object.values(reviews).sort((a, b) => b[0].user_rating - a[0].user_rating)[0][0]);

  const history = useHistory();

  const handleBookingClick = () => {
    localStorage.setItem("tasker", JSON.stringify(props.tasker));
    localStorage.setItem("day", props.day);
    history.push("/tasks/new");
  }


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
                {average_rating === null && <p>New Tasker!</p>}
                {average_rating !== null &&
                  <>
                    <Rating
                      name="half-rating-read"
                      defaultValue={Number(Number(average_rating).toFixed(2))}
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
            {review &&
              <blockquote className="blockquote mb-0">
                <p>
                  {(reviews[id] ? "Related feedback: " : "Previous feedback: ")}
                  <Rating
                    name="half-rating-read"
                    defaultValue={Number(Number(review.user_rating).toFixed(2))}
                    precision={0.1}
                    readOnly
                    className="rating-result"
                  />
                </p>
                <p>{review.user_comment}</p>

                <footer className="blockquote-footer">{review.reviewer + ", " + review.execution_date.slice(0, 10).replace(/-/g, "/") + (reviews[id] ? "" : `, related to ${review.service_name}`)}</footer>
              </blockquote>
            }
            {!review &&
              <p>Previous feedback: there is no previous feedback for this tasker.</p>
            }
          </div>
          <footer>
            <button>Chat now!</button>
            <button onClick={handleBookingClick}>Book now!</button>
          </footer>
        </div>
      </div>
    </>
  )
};