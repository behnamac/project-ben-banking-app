
const HeaderBox = ({
  type = "title",
  title,
  user,
  subtext,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title ">
        {title}
        {type === "greeting" && user && (
          <span className="text-backGradient">&nbsp;{user} </span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
