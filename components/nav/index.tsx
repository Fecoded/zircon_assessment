// Components
import { ArrowDownIcon, NavIcon } from "../svg";
import { SearchInput } from "../input";
// Styles
import styles from "@/styles/Home.module.css";
import { Flex } from "../table/styled";
import { Nav, NavBox, NavFlex } from "./styled";
import Image from "next/image";

export const Navbar = () => {
  return (
    <Nav>
      <div className={styles.container}>
        <NavBox>
          <Flex className={styles.gap_1}>
            <NavFlex className={styles.gap_1}>
              <NavIcon />
              <h2 className={styles.h2}>WASABI LTD</h2>
            </NavFlex>
            <ul>
              <li className={styles.active}>Home</li>
              <li>About</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </Flex>
          <Flex className={styles.gap_1}>
            <SearchInput nav />
            <NavFlex className={styles.gap_1}>
              <Image
                src="/profile.png"
                alt="profile_icon"
                width={48}
                height={48}
              />
              <ArrowDownIcon />
            </NavFlex>
          </Flex>
        </NavBox>
      </div>
    </Nav>
  );
};
