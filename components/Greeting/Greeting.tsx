import { users } from "../../fixtures";

const Greeting = () => {
  const currentUser = users[0];

  return <h1>Hi, {currentUser.name}!</h1>;
};

export default Greeting;
