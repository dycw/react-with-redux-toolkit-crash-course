import { addFoodToCustomer } from "../features/customerSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

type CustomerCardProps = {
  id: string;
  name: string;
  food: string[];
};

export default function CustomerCard(props: CustomerCardProps) {
  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{props.name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {props.food.map((food) => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button
            onClick={() =>
              dispatch(
                addFoodToCustomer({ id: props.id, food: customerFoodInput })
              )
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
