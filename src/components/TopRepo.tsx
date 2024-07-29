import { Repo, repos } from "../data";
import Title from "./Title";

const TopRepo = () => {
  return (
    <div className="px-28 my-20">
      <Title title="top" subTitle="repo" />
      <div className="grid grid-cols-3 gap-8 ">
        {repos.map((repo: Repo) => (
          <article className="tour-card transition-all duration-300 ease-linear shadow-lg hover:scale-105">
            <div className="tour-img-container">
              <img src={repo.image} className="tour-img" alt={repo.title} />
              <p className="tour-date">{repo.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{repo.title}</h4>
              </div>
              <p>{repo.info}</p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
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
