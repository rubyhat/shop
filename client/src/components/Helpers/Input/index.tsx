import classNames from "classnames/bind";
import styles from "./styles.module.scss";

interface IInput {
  value: string;
  setValue: (value: string) => void;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const Input = ({
  value,
  setValue,
  label,
  type,
  placeholder,
  className,
}: IInput) => {
  const cn = classNames.bind(styles);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const rootClasses = className
    ? ["input__field", ...className.split(" ")]
    : ["input__field"];

  return (
    <div className={cn("input")}>
      <label className={cn(value ? ["label", "label_active"] : "label")}>
        {label ?? "Title text"}
      </label>
      <input
        className={cn(rootClasses)}
        placeholder={placeholder ?? "Empty input regular"}
        type={type ?? "text"}
        maxLength={255}
        value={value}
        onChange={(event) => handleInputChange(event)}
      />
    </div>
  );
};

export default Input;
