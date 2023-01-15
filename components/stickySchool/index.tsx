import Image from "next/image";
import { useEffect, useState } from "react";
import { Flex } from "../tab/styled";
import { school1, school2 } from "../utils";
import styles from "@/styles/Home.module.css";
import { Box } from "./styled";

export const StickySchoolImage = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 556) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      {scrolled && (
        <Box>
          <Flex className={styles.position_fixed}>
            <img
              src={school1.image}
              alt={school1.name}
              width={198}
              height={160}
            />
            <Image
              src={school2.image}
              alt={school2.name}
              width={198}
              height={160}
            />
          </Flex>
        </Box>
      )}
    </>
  );
};
