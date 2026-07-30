export const getSeats = ({
  layout,
  type,
  isUpperDeck,
  seaterRow,
  sleeperRow,
  backRowSeats,
  bookedSeats,
}) => {
  const leftCol = Number(layout[0]);
  const rightCol = Number(layout[2]);

  const col = leftCol + rightCol;

  let lower;

  if (leftCol === 2 && rightCol === 1 && type === "Sleeper") {
    lower = getSeatsSleeper_2X1();
  } else {
    lower = getSeaterSeats(bookedSeats, col, seaterRow);
  }

  return {
    lower,
    upper: isUpperDeck
      ? getSleeperSeats(bookedSeats, 2, getSleeperSeats, "U")
      : [],
  };
};

const getSeaterSeats = (bookedSeats, col, row, backRowSeats = 0) => {
  return Array.from({ length: row * col + backRowSeats }).map((_, i) => {
    const seatNo = `L-${i + 1}`;
    return {
      seatNo: seatNo,
      status: checkBooked(bookedSeats, seatNo),
      type: "Seater",
    };
  });
};

const getSleeperSeats = (bookedSeats, col, row, deck) => {
  return Array.from({ length: row * col }).map((_, i) => {
    const seatNo = `${deck}-${i + 1}`;
    return {
      seatNo: seatNo,
      status: checkBooked(bookedSeats, seatNo),
      type: "Sleeper",
    };
  });
};

const getSeatsSleeper_2X1 = () => {};

const checkBooked = (bookedSeats, seatNo) => {
  return bookedSeats.filter((seat) => seat.seatNo === seatNo).length === 1;
};
