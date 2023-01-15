import { AddIcon } from "./svg";

export const school1 = {
  name: "Deal School District",
  image: "https://www.collinsdictionary.com/images/full/school_309241295.jpg",
};
export const school2 = {
  name: "Salem City School, New Jersey",
  image: `https://img.freepik.com/free-vector/school-building-educational-institution-college_107791-1051.jpg?w=2000`,
};

export const emptyPlaceholders = [
  {
    id: 1,
    Icon: <AddIcon />,
  },
  {
    id: 2,
    Icon: <AddIcon />,
  },
];

export const tableBodyArray = {
  "FINDEET RATING": {
    "STUDENT-TEACHER RATIO": {
      school1: "89",
      school2: "45",
    },
    "AVERAGE TEACHER SALARY": {
      school1: "2:9",
      school2: "",
    },
    "ONLINE TEACHING": {
      school1: "34",
      school2: "69",
    },
  },
  "KEY SCHOOL STATS": {
    "SCHOOL ID CARD": {
      school1: true,
      school2: true,
    },
    "LIBRARY DURATION": {
      school1: 350,
      school2: 300,
    },
    "RESUMPTION DATE": {
      school1: "Soap",
      school2: "Soap",
    },
  },
  "ACADEMIC STATS": {
    "SCHOOL FEES": {
      school1: "yes",
      school2: "Naa",
    },
    "LIBRARY STAT": {
      school1: "233.9",
      school2: "90",
    },
    "CLOSING DATE": {
      school1: "March",
      school2: "April",
    },
  },
  "TEACHER STATS": {
    "SCHOOL UNIFORM": {
      school1: "yes",
      school2: "Naa",
    },
    STAT: {
      school1: "233.9",
      school2: "90",
    },
    "RESUMPTION DATE": {
      school1: "Soap",
      school2: "Bag",
    },
  },
  "FEE STRUCTURE": {
    "SCHOOL BUS": {
      school1: "100",
      school2: "200",
    },
    "LIBRARY BOOKS": {
      school1: "9",
      school2: "90",
    },
    "BREAK TIME": {
      school1: "2pm",
      school2: "1pm",
    },
  },
};

export const tabs = [
  {
    id: 1,
    name: "FINDEET RATING",
    link: "#findeet-rating",
  },
  {
    id: 2,
    name: "KEY SCHOOL STATS",
    link: "#key-school-stats",
  },
  {
    id: 3,
    name: "ACADEMIC STATS",
    link: "#academic-stats",
  },
  {
    id: 4,
    name: "TEACHER STATS",
    link: "#teacher-stats",
  },
  {
    id: 5,
    name: "FEE STRUCTURE",
    link: "#fee-structure",
  },
];

export const highestNumber = (data: number[]) => {
  let max = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > max) {
      max = data[i];
    }
  }
  return max;
};
