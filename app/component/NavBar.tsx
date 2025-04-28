import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { CiUser } from "react-icons/ci";
import { HiOutlineChat } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
import { TbSmartHome } from "react-icons/tb";
import capitalizeFirstChar from "../util/capitalizeFirstChar";
import { useStateStore } from "../hook/useStateStore";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const currentNav = useStateStore((state) => state.nav);
  const setNav = useStateStore((state) => state.updateNav);
  const navList = [
    { label: "home", icon: TbSmartHome, nav: "home" },
    { label: "cart", icon: SlHandbag, nav: "cart" },
    { label: "chat", icon: HiOutlineChat, nav: "chat" },
    { label: "setting", icon: IoSettingsSharp, nav: "setting" },
    { label: "user", icon: CiUser, nav: "user" },
  ];

  type NavBtnType = {
    label: string;
    Icon: IconType;
    nav: string;
  };

  const NavBtn = ({ label, Icon, nav }: NavBtnType) => {
    return (
      <div
        className="flex-ca flex-col gap-[6px] cursor-pointer"
        onClick={() => {
          setNav(nav);
          router.push(`/${nav}`);
        }}
      >
        <Icon
          className="option-icon"
          size="26px"
          strokeWidth={1}
          color={nav === currentNav ? "rgba(149,80,250)" : "rgba(174,179,181)"}
        />
        <div className="label text-sm" style={{ color: "rgba(153,153,153)" }}>
          {capitalizeFirstChar(label)}
        </div>
      </div>
    );
  };

  return (
    <div className="navbar">
      {navList.map((nav, i) => {
        return (
          <NavBtn label={nav.label} Icon={nav.icon} nav={nav.nav} key={i} />
        );
      })}
    </div>
  );
};

export default NavBar;
