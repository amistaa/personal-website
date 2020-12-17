import Link from "next/link";

const App = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: "url(./background.jpg)",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2 ">
          <article className="overflow-hidden rounded-lg shadow-lg bg-white">
            <img
              alt="Wallpaper"
              src="./header.jpg"
              className="block h-auto w-full"
            />
            <header className="flex items-center justify-around leading-tight p-2 md:p-4">
              <a href="https://github.com/amistaa">
                <img
                  alt="Github"
                  src="./github.png"
                  className="block h-auto w-8 md:w-16 hover:opacity-50 cursor-pointer"
                />
              </a>
              <a href="https://discord.com/users/666295012522459136/">
                <img
                  alt="Discord"
                  src="./discord.png"
                  className="block h-auto w-5 md:w-10 hover:opacity-50 cursor-pointer"
                />
              </a>
              <a href="https://facebook.com/AmistaDev">
                <img
                  alt="Facebook"
                  src="./facebook.png"
                  className="block h-auto w-5 md:w-10 hover:opacity-50 cursor-pointer"
                />
              </a>
              <a href="https://weibo.com/7536810146">
                <img
                  alt="Weibo"
                  src="./weibo.png"
                  className="block h-auto w-7 md:w-12 hover:opacity-50 cursor-pointer"
                />
              </a>
              <a href="https://osu.ppy.sh/users/Amista">
                <img
                  alt="osu!"
                  src="./osu.png"
                  className="block h-auto w-7 md:w-12 hover:opacity-50 cursor-pointer"
                />
              </a>
            </header>
            <div className="border-b-2" />
            <footer className="flex items-center justify-around leading-none p-2 md:p-4">
              <Link href="/Project">
                <button className="md:w-32 bg-white border-2 border-blue-300 hover:bg-blue-dark text-blue-300 font-bold py-3 px-6 rounded-lg hover:bg-blue-300 hover:shadow-md hover:text-white transition ease-in-out duration-300">
                  Project
                </button>
              </Link>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
};

export default App;
