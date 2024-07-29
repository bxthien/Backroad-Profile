interface Props {
  title: string;
  subTitle: string;
}
const Title = ({ title, subTitle }: Props) => {
  return (
    <div className="flex justify-center items-center mb-16">
      <h2 className="uppercase font-bold text-5xl">
        {title} <span className="text-[#2caeba]">{subTitle}</span>
      </h2>
    </div>
  );
};

export default Title;
