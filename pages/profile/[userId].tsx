import { useRouter } from "next/router";
import { users } from "../../fixtures";

const UserProfilePage = () => {
  const { query } = useRouter();
  const userProfile = users.find((user) => user.id === query.userId);
  return (
    <div>
      <p>Review details for {userProfile?.name}</p>
    </div>
  );
};

export default UserProfilePage;
