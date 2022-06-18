import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const links = [
  { title: "Контакты", order: 1 },
  { title: "Офисные ПК", order: 2 },
  { title: "Игровые ПК", order: 3 },
  { title: "Войти", order: 4, isButton: true },
];

const Nav = () => {
  const cx = classNames.bind(styles);
  return (
    <ul className={cx("nav")}>
      {links
        .sort((a, b) => a.order - b.order)
        .map((link) => (
          <li
            key={link.order}
            className={
              link.isButton ? "button button-md button-accent" : "link"
            }
          >
            {link.title}
          </li>
        ))}
    </ul>
  );
};

export default Nav;
