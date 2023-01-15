import { useState } from "react";
import Image from "next/image";
import clsx from "classnames";

import { emptyPlaceholders, school1, school2, tableBodyArray } from "../utils";

import { CheckIcon } from "../svg";
import { Box, Table, CheckBox, Flex, Td, Tr, TBody, DottedBox } from "./styled";
import styles from "@/styles/Home.module.css";

type tableBodyArrayProps = {
  [key: string]: {
    school1: string | number | boolean;
    school2: string | number | boolean;
  };
};

type ArrProps = {
  [key: string]: string | number | boolean;
};

export const CardTable = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Box>
      <Table>
        <TBody>
          <Tr>
            <Td>
              <Box>
                <CheckIcon />
                <Flex className={clsx(styles.gap_1, styles.pt_1)}>
                  <CheckBox onChange={() => setIsChecked(!isChecked)} />
                  <h4 className={styles.h4}>Hide same features</h4>
                </Flex>
              </Box>
            </Td>
            <Td>
              <Box>
                <img
                  src={school1.image}
                  alt={school1.name}
                  width={198}
                  height={160}
                />
                <Flex className={clsx(styles.gap_1, styles.pt_1)}>
                  <h3 className={styles.schoolText}>{school1.name}</h3>
                </Flex>
              </Box>
            </Td>
            <Td>
              <Box className={styles.pt_2}>
                <Image
                  src={school2.image}
                  alt={school2.name}
                  width={198}
                  height={160}
                />
                <Flex className={clsx(styles.gap_1, styles.pt_1)}>
                  <h3 className={styles.schoolText}>{school2.name}</h3>
                </Flex>
              </Box>
            </Td>
            {emptyPlaceholders.map(({ id, Icon }) => (
              <Td key={id}>
                <Box className={styles.pb_2}>
                  <DottedBox>{Icon}</DottedBox>
                </Box>
              </Td>
            ))}
          </Tr>
          {Object.keys(tableBodyArray).map((key, idx) => {
            let arr: tableBodyArrayProps =
              tableBodyArray[key as keyof typeof tableBodyArray];
            // const resultArr = Object.entries(arr).map((e) => ({
            //   [e[0]]: e[1],
            // }));
            return (
              <>
                <Tr key={idx}>
                  <Td id={key.toLowerCase().split(" ").join("-")}>{key}</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>

                {Object.keys(arr).map((key, idx) => {
                  let result: ArrProps = arr[key as keyof typeof arr];
                  return (
                    <>
                      {isChecked ? (
                        result.school1 === result.school2 ? null : (
                          <Tr key={key}>
                            <Td>{key}</Td>
                            {Object.values(result).map((value, idx) => {
                              if (typeof value === "string") {
                                return <Td key={idx}>{value}</Td>;
                              } else if (typeof value === "boolean") {
                                return <Td key={idx}>{+value}</Td>;
                              } else {
                                const numberArr = Object.values(
                                  result
                                ) as number[];
                                const highestNo = Math.max(...numberArr);
                                return highestNo === value ? (
                                  <Td key={idx}>{value} ✅</Td>
                                ) : (
                                  <Td key={idx}>{value}</Td>
                                );
                              }
                            })}

                            <Td></Td>
                            <Td></Td>
                          </Tr>
                        )
                      ) : (
                        <Tr key={idx}>
                          <Td>{key}</Td>
                          {Object.values(result).map((value, idx) => {
                            if (typeof value === "string") {
                              return <Td key={idx}>{value}</Td>;
                            } else if (typeof value === "boolean") {
                              return <Td key={idx}>{+value}</Td>;
                            } else {
                              const numberArr = Object.values(
                                result
                              ) as number[];
                              const highestNo = Math.max(...numberArr);
                              return highestNo === value ? (
                                <Td key={idx}>{value} ✅</Td>
                              ) : (
                                <Td key={idx}>{value}</Td>
                              );
                            }
                          })}

                          <Td></Td>
                          <Td></Td>
                        </Tr>
                      )}
                    </>
                  );
                })}
              </>
            );
          })}
        </TBody>
      </Table>
    </Box>
  );
};
