import { MdOutlineModeEdit } from "react-icons/md";

const Profile = () => {
  return (
    <div className="prof flex-ca py-[20px] relative flex-col mb-[20px]">
      <div className="prof-bg w-full h-[90px] absolute top-0 left-0" />
      <div className="prof-pic relative pt-[28px] mb-5">
        <img
          src="https://placehold.co/79x79"
          className="rounded-full"
          alt=""
          style={{ height: "79px", width: "79px" }}
        />
        <div
          className="edit-btn w-[1.9rem] h-[1.9rem] flex-ca rounded-full absolute bottom-0 right-0 cursor-pointer"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <MdOutlineModeEdit size={"1.15rem"} color="white" />
        </div>
      </div>
      <div className="prof-name font-bold text-xl">Ronald Richards</div>
      <div
        className="prof-title font-thin text-sm"
        style={{ color: "rgba(178,178,178)" }}
      >
        Marketing Coordinator
      </div>
    </div>
  );
};

export default Profile;
