type navBarProps = {
  name: string;
  page: string;
};

export default function NavBar({ name, page }: navBarProps) {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
        <div className="flex items-center flex-shrink-0 text-white-200 mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <a href="../">
            <span className="font-semibold text-2xl tracking-tight">
              {name}
            </span>
          </a>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="lg:flex-grow text-base">
            <a
              href="../contact/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4 "
            >
              {page}
            </a>
          </div>
          <div>
            <a
              href="https://www.mediafire.com/file/1tuqvr9rxvn322a/4d3d6f28.docx/file"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
              target="_blank"
            >
              Baixar curriculum
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
