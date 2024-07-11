import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center px-10">
      <Helmet title="P404 | Tingyu Liu"></Helmet>
      <div className="text-6xl">😢</div>
      <p className="mt-2 text-lg">
        The page you were looking for could not be found.
      </p>
    </div>
  );
};

export default Error;
