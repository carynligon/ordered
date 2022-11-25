import { useRouter } from "next/router";

const ReviewDetailsPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <p>Review details for reviewId: {query.reviewId}</p>
    </div>
  );
};

export default ReviewDetailsPage;
