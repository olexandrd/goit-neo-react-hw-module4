import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <ThreeDots
      color="#465df3"
      height={80}
      width={80}
      wrapperClass={styles.loader}
    />
  );
};

export default Loader;
