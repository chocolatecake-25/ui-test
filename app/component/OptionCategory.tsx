import { IconType } from "react-icons";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRouter } from "next/navigation";

type OptionCategoryType = {
  title: string;
  list: {
    label: string;
    icon: IconType;
    type: string;
    value: string;
    setValue?: (newTheme: string) => void;
  }[];
};

const OptionCategory = ({ title, list }: OptionCategoryType) => {
  const router = useRouter();

  type MenuOptionType = {
    label: string;
    Icon: IconType;
    type: string;
    index: number;
    value: string;
    setValue?: (newTheme: string) => void;
  };

  const MenuOption = ({
    label,
    Icon,
    type,
    index,
    value,
    setValue,
  }: MenuOptionType) => {
    return (
      <div
        className={`menu-option ${index === 0 ? "pt-[18px]" : "pt-[9px]"} ${
          index === list.length - 1 ? "pb-[18px]" : "pb-[9px]"
        }`}
        onClick={() => {
          if (type == "nav") {
            // To navigate:
            // router.push(`/${value}`);
            alert(`navigate to ${value} page`);
            return;
          }
          if (type == "switch") {
            let newValue = "";
            if (value == "dark") {
              newValue = "light";
            } else {
              newValue = "dark";
            }
            if (setValue) {
              setValue(newValue);
            }
          }
        }}
      >
        <div className="option gap-[14px] flex-ca">
          <div className="option-icon-container">
            <Icon className="option-icon" size="24px" />
          </div>
          <div className="option-title text-lg">{label}</div>
        </div>
        {type === "switch" ? (
          <div className={`switch  ${value === "dark" ? "switch-on" : null}`}>
            <span
              className={`slider rounded-full ${
                value === "dark" ? "on" : null
              }`}
            />
          </div>
        ) : (
          <IoIosArrowRoundForward className="option-icon" size="36px" />
        )}
      </div>
    );
  };

  return (
    <>
      <div className="category-title w-full px-[20px] py-[8px] text-xl font-thin">
        {title.toUpperCase()}
      </div>
      <div className="option-container w-full mb-[17px]">
        {list.map((option, i) => {
          return (
            <MenuOption
              label={option.label}
              Icon={option.icon}
              type={option.type}
              index={i}
              value={option.value}
              setValue={option.setValue}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default OptionCategory;
