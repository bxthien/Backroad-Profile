import { Repo, repos } from "../data";
import Title from "./Title";
import { PushpinFilled } from "@ant-design/icons";

const TopRepo = () => {
  return (
    <div className="px-36 my-20">
      <Title title="top" subTitle="repo" />
      <div className="grid grid-cols-3 gap-8 ">
        {repos.map((repo: Repo) => (
          <article className="duration-300 ease-linear shadow-lg hover:scale-105">
            <div className="relative">
              <img src={repo.image} className="tour-img" alt={repo.title} />
              <p className="absolute right-0 bottom-0 bg-emerald-400 text-black capitalize p-2">
                {repo.date}
              </p>
            </div>
            <div className="p-5">
              <div className="font-bold text-lg capitalize mb-1">
                <h4>{repo.title}</h4>
              </div>
              <p className="mb-5">{repo.info}</p>
              <div className="flex justify-between flex-wrap items-center capitalize text-emerald-500 font-medium text-base">
                <p>
                  <span>
                    <i className="mr-2">
                      <PushpinFilled />
                    </i>
                  </span>
                  {repo.location}
                </p>
                <p>from ${repo.cost}</p>
                <p>{repo.duration} days</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TopRepo;
