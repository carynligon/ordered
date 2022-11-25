import { Button } from "../shared";
import { useRouter } from "next/router";

const RestaurantLookupBtn = () => {
  const { push } = useRouter();

  return (
    <Button
      label="Find a restaurant"
      onClick={() => {
        push("/restaurants");
      }}
    />
  );
};

export default RestaurantLookupBtn;
