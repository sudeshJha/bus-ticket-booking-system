export const getSeats = ({
  layout,
  type,
  isUpperDeck,
  seaterRow,
  sleeperRow,
  backrowSeat,
  bookedSeats,
  selectedSeats,
}) => {
  const leftCol = Number(layout[0]);
  const rightCol = Number(layout[2]);

  const col = leftCol + rightCol;

  let lower;

  if (leftCol === 2 && rightCol === 1 && type === "sleeper") {
    lower = getSemiSleeperSeats(selectedSeats, bookedSeats, sleeperRow);
  } else if (type === "sleeper") {
    getSleeperSeats(selectedSeats, bookedSeats, sleeperRow, "L");
  } else {
    lower = getSeaterSeats(
      selectedSeats,
      bookedSeats,
      col,
      seaterRow,
      backrowSeat,
    );
  }

  return {
    lower,
    upper: isUpperDeck
      ? getSleeperSeats(selectedSeats, bookedSeats, sleeperRow, "U")
      : [],
  };
};

const getSeaterSeats = (selectedSeats, bookedSeats, col, row, backrowSeat) => {
  const backSeats = backrowSeat ? col + 1 : 0;

  return Array.from({ length: row * col + backSeats }).map((_, i) => {
    const seatNo = `L-${i + 1}`;
    return {
      seatNo: seatNo,
      status: checkStatus(selectedSeats, bookedSeats, seatNo),
      type: "seater",
    };
  });
};

const getSleeperSeats = (selectedSeats, bookedSeats, row, deck) => {
  return Array.from({ length: row * 2 }).map((_, i) => {
    const seatNo = `${deck}-${i + 1}`;
    return {
      seatNo: seatNo,
      status: checkStatus(selectedSeats, bookedSeats, seatNo),
      type: "sleeper",
    };
  });
};

const getSemiSleeperSeats = (selectedSeats, bookedSeats, row) => {
  return Array.from({ length: row * 5 }).map((_, i) => {
    const seatNo = `L-${i + 1}`;
    return {
      seatNo: seatNo,
      status: checkStatus(selectedSeats, bookedSeats, seatNo),
      type: (i + 1) % 5 === 0 ? "sleeper" : "seater",
    };
  });
};

const checkStatus = (selectedSeats, bookedSeats, seatNo) => {
  const isBooked = bookedSeats.filter((seat) => seat === seatNo).length === 1;
  if (isBooked) return "booked";

  const isSelected =
    selectedSeats.filter((seat) => seat === seatNo).length === 1;
  if (isSelected) return "selected";
  return "available";
};
