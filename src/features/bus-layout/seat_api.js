const layout = {
  ONE_BY_ONE_SLEEPER: {
    leftCol: 1,
    rightCol: 1,
  },
  TWO_BY_ONE_SLEEPER: {
    leftCol: 2,
    rightCol: 1,
  },
  THREE_BY_THREE_SEATER: {
    leftCol: 3,
    rightCol: 3,
  },
  TWO_BY_THREE_SEATER: {
    leftCol: 2,
    rightCol: 3,
  },
  TWO_BY_ONE_SEATER: {
    leftCol: 2,
    rightCol: 1,
  },
  TWO_BY_TWO_SEATER: {
    leftCol: 2,
    rightCol: 2,
  },
};

export const getSeats = (layoutData) => {
  const {
    seatLayoutType,
    deckType,
    bookedSeats,
    backRowSeats,
    seaterRows,
    sleeperRows,
    isUpperDeck,
    selectedSeats,
    isSleeper,
  } = layoutData;

  const leftCol = layout[seatLayoutType].leftCol;
  const rightCol = layout[seatLayoutType].rightCol;

  const col = leftCol + rightCol;

  let lower;

  if (seatLayoutType === "TWO_BY_ONE_SLEEPER") {
    lower = getSemiSleeperSeats(selectedSeats, bookedSeats, sleeperRows);
  } else if (seatLayoutType === "ONE_BY_ONE_SLEEPER") {
    lower = getSleeperSeats(selectedSeats, bookedSeats, sleeperRows, "L");
  } else {
    lower = getSeaterSeats(
      selectedSeats,
      bookedSeats,
      col,
      seaterRows,
      backRowSeats,
    );
  }

  if (backRowSeats) {
    lower = [
      ...lower,
      ...Array.from({ length: backRowSeats }).map((_, i) => {
        const seatNo = `L-${i + lower.length + 1}`;
        return {
          seatNo: seatNo,
          status: checkStatus(selectedSeats, bookedSeats, seatNo),
          type: "seater",
        };
      }),
    ];
  }

  return {
    lower,
    upper: isUpperDeck
      ? getSleeperSeats(selectedSeats, bookedSeats, sleeperRows, "U")
      : [],
  };
};

const getSeaterSeats = (selectedSeats, bookedSeats, col, row) => {
  return Array.from({ length: row * col }).map((_, i) => {
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
  if (!bookedSeats) return "available";

  const isBooked = bookedSeats.filter((seat) => seat === seatNo).length === 1;
  if (isBooked) return "booked";

  const isSelected =
    selectedSeats.filter((seat) => seat === seatNo).length === 1;
  if (isSelected) return "selected";
  return "available";
};
