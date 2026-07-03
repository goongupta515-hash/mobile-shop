import "../styles/Reviews.css";
import reviews from "../data/reviews";

function Reviews() {
  return (
    <section className="reviews">

      <h2>⭐ What Our Customers Say</h2>

<p className="section-subtitle">
  Trusted by hundreds of happy customers.
</p>

      <div className="reviews-container">

        {reviews.map((review) => (

          <div className="review-card" key={review.id}>

            <div className="review-stars">
              {review.rating}
            </div>

            <p className="review-text">
              "{review.review}"
            </p>

            <h3>{review.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Reviews;