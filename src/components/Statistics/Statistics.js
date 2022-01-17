import PropTypes from "prop-types";
import StatisticItem from "./StatisticItem";

import styles from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title ?? "Upload stats"}</h2>

      <ul className={styles.statList}>
        {stats.map((item) => {
          return (
            <StatisticItem
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
