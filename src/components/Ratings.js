import React from 'react';

export default function Ratings(props) {
  const ratedStars = props.ratings;
  const starContainer = [];

  for (let i = 0; i < 5; i++) {
    if (i < ratedStars) {
      starContainer.push(<i className="fa fa-star star text-warning"></i>);
    } else {
      starContainer.push(<i className="fa fa-star star text-secondary"></i>);
    }
  }
  return <div className="starWrapper">{starContainer}</div>;
}
