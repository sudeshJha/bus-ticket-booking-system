export const getSeats = ({
  layout,
  type,
  isUpperDeck,
  seaterRow,
  sleeperRow,
  backrowSeat,
  bookedSeats,
}) => {
  const leftCol = Number(layout[0]);
  const rightCol = Number(layout[2]);

  const col = leftCol + rightCol;

  let lower;

  if (leftCol === 2 && rightCol === 1 && type === "sleeper") {
    lower = getSeatsSleeper_2X1(bookedSeats, sleeperRow);
  } else if (type === "sleeper") {
    getSleeperSeats(bookedSeats, sleeperRow, "L");
  } else {
    lower = getSeaterSeats(bookedSeats, col, seaterRow, backrowSeat);
  }

  return {
    lower,
    upper: isUpperDeck ? getSleeperSeats(bookedSeats, sleeperRow, "U") : [],
  };
};

const getSeaterSeats = (bookedSeats, col, row, backrowSeat) => {
  const backSeats = backrowSeat ? col + 1 : 0;

  return Array.from({ length: row * col + backSeats }).map((_, i) => {
    const seatNo = `L-${i + 1}`;
    return {
      seatNo: seatNo,
      status: checkBooked(bookedSeats, seatNo),
      type: "seater",
    };
  });
};

const getSleeperSeats = (bookedSeats, row, deck) => {
  const arr = Array.from({ length: row * 2 }).map((_, i) => {
    const seatNo = `${deck}-${i + 1}`;
    return {
      seatNo: seatNo,
      status: checkBooked(bookedSeats, seatNo),
      type: "sleeper",
    };
  });

  console.log(arr);

  return arr;
};

const getSeatsSleeper_2X1 = (bookedSeats, row) => {
  return Array.from({ length: row * 5 }).map((_, i) => {
    const seatNo = `L-${i + 1}`;
    return {
      seatNo: seatNo,
      status: checkBooked(bookedSeats, seatNo),
      type: seatNo === 5 ? "sleeper" : "seater",
    };
  });
};

const checkBooked = (bookedSeats, seatNo) => {
  const isBooked = bookedSeats.filter((seat) => seat === seatNo).length === 1;

  return isBooked ? "booked" : "available";
};
