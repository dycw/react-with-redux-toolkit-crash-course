import { removeReservation } from "../features/reservationSlice";
import { useDispatch } from "react-redux";

type ReservationCardProps = {
  name: string;
  index: number;
};

export default function ReservationCard(props: ReservationCardProps) {
  const dispatch = useDispatch();
  return (
    <div
      className="reservation-card-container"
      onClick={() => dispatch(removeReservation(props.index))}
    >
      {props.name}
    </div>
  );
}
