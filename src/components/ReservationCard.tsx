import { addCustomer } from "../features/customerSlice";
import { removeReservation } from "../features/reservationSlice";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

type ReservationCardProps = {
  name: string;
  index: number;
};

export default function ReservationCard(props: ReservationCardProps) {
  const dispatch = useDispatch();
  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservation(props.index));
        dispatch(addCustomer({ id: uuid(), name: props.name, food: [] }));
      }}
    >
      {props.name}
    </div>
  );
}
