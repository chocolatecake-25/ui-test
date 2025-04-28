import { Dispatch, SetStateAction } from "react";
import OptionCategory from "./OptionCategory";
import { IoMoonOutline } from "react-icons/io5";
import { LuEarth, LuInfo, LuFileText } from "react-icons/lu";
import { IoLockClosedOutline, IoNotificationsOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { useStateStore } from "../hook/useStateStore";

const Options = () => {
  const theme = useStateStore((state) => state.theme);
  const setTheme = useStateStore((state) => state.updateTheme);
  const prefOptions = [
    {
      label: "Dark Mood",
      icon: IoMoonOutline,
      type: "switch",
      value: theme,
      setValue: setTheme,
    },
    { label: "Language", icon: LuEarth, type: "nav", value: "language" },
    {
      label: "Notification",
      icon: IoNotificationsOutline,
      type: "nav",
      value: "notification",
    },
    { label: "FAQs", icon: GoQuestion, type: "nav", value: "faqs" },
    { label: "About", icon: LuInfo, type: "nav", value: "about" },
  ];

  const legalOptions = [
    {
      label: "Terms of Services",
      icon: LuFileText,
      type: "nav",
      value: "termsOfServices",
    },
    {
      label: "Privacy Policy",
      icon: IoLockClosedOutline,
      type: "nav",
      value: "privacyPolicy",
    },
  ];
  return (
    <>
      <OptionCategory title="Preferences" list={prefOptions} />
      <OptionCategory title="legal" list={legalOptions} />
    </>
  );
};

export default Options;
