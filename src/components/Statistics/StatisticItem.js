import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string,
  performance: PropTypes.number,
};

export default StatisticItem;
