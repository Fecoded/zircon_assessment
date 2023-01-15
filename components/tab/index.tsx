import { Box, CustomLink, Flex } from "./styled";
import styles from "../../styles/Home.module.css";
import { tabs } from "../utils";

export const Tabs = () => {
  return (
    <Box>
      <Flex className={styles.pt_4}>
        {tabs.map(({ name, id, link }) => (
          <CustomLink href={link} key={id}>
            {name}
          </CustomLink>
        ))}
      </Flex>
    </Box>
  );
};
