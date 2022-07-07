import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./styles.module.scss";

const filterItems = [
  { title: "по цене min", order: 1, isActive: true },
  { title: "по цене max", order: 2, isActive: false },
  { title: "по рейтингу", order: 3, isActive: false },
  { title: "по названию", order: 4, isActive: false },
];

interface filter {
  title: string;
  order: number;
  isActive: boolean;
}

const Filters = () => {
  const cn = classNames.bind(styles);
  const [filters, setFilters] = useState(filterItems);

  const handleClick = (filter: filter) => {
    // let newFilters = [...filterItems];
    // const active = newFilters.find((item) => item.order === filter.order);
    // if (active) active.isActive = true;
    // console.log(newFilters);
    // setFilters(newFilters);

    setFilters((prevs) => {
      return prevs.map((item) => {
        if (item.order === filter.order) {
          item.isActive = true;
          return item;
        } else {
          item.isActive = false;
          return item;
        }
      });
    });
  };

  return (
    <ul className={cn("filter")}>
      {filters
        .sort((a, b) => a.order - b.order)
        .map((filter) => (
          <li
            onClick={() => handleClick(filter)}
            key={filter.order}
            className={cn(
              filter.isActive ? ["filter-item", "filter-active"] : "filter-item"
            )}
          >
            {filter.title}
          </li>
        ))}
    </ul>
  );
};

export default Filters;
