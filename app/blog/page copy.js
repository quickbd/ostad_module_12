import Link from "next/link";
import blogData from "../blog/data/blogData.json";

export const metadata = {
  title: "My Blog",
  description: "Blog List",
};

export default function Blog() {
  return (
    <div className="container   m-auto  items-center justify-between">
      <h2 className="text-center my-10">Blog Page</h2>
      <div className="grid  grid-cols-3 grid-rows-4 gap-2">
        {blogData.map((blog) => (
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
            <Link href={`blog/${blog.slug}`}>
              <img
                class="rounded-t-lg"
                src={`/images/post/${blog.image}`}
                alt=""
              />
            </Link>
            <div class="p-5">
              <Link href={`blog/${blog.slug}`}>
                <h5 class="mb-2  {styles.red} font-bold tracking-tight text-gray-900 dark:text-white">
                  {blog.title ?? ""}{" "}
                </h5>
              </Link>
              <div className="float-end text-end text-xs font-light">
                Date: {blog.date}
              </div>
              <Link
                href={`blog/${blog.slug}`}
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
