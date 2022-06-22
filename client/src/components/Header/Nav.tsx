import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const links = [
  { href: "/", title: "Контакты", order: 1 },
  { href: "/", title: "Офисные ПК", order: 2 },
  { href: "/", title: "Игровые ПК", order: 3 },
  { href: "/", title: "Войти", order: 4, isButton: true },
];

interface NavProps {
  setShowModal: (showModal: boolean) => void;
}

const Nav = ({ setShowModal }: NavProps) => {
  const cx = classNames.bind(styles);
  return (
    <nav className={cx("nav")}>
      {links
        .sort((a, b) => a.order - b.order)
        .map((link) => (
          <Link
            onClick={() => link.isButton && setShowModal(true)}
            to={link.href}
            key={link.order}
            className={
              link.isButton ? "button button-md button-accent" : "link"
            }
          >
            {link.title}
          </Link>
        ))}
    </nav>
  );
};

export default Nav;
