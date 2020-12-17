import ProjectAPI from "./api/ProjectAPI.json";
import Link from "next/link";
import Head from "next/head";

const Project = () => {
  return (
    <>
      <Head>
        <title>Amista | Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="fixed flex w-full bg-white border-b items-center justify-between flex-wrap p-4 m-auto top-0 animated z-10">
        <Link href="/">
          <a className="hover:text-blue-400 text-bs pl-3">🡰 Back</a>
        </Link>
      </div>
      <div className="mt-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {ProjectAPI.map((data: any) => {
          return (
            <div className="rounded overflow-hidden shadow-lg hover:opacity-75">
              <a href={data.url}>
                <img className="w-full" src={data.image} alt={data.name} />
                <div className="px-6 py-4">
                  <div className="flex text-md mb-2 justify-between">
                    <p>{data.name}</p>
                    <p className="font-bold text-green-500">{data.date}</p>
                  </div>
                  <p className="text-gray-700 text-base mt-5 text-justify">
                    {data.desc}
                  </p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
