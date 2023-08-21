import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "My Blog",
  description: "Blog List",
};

export default async function Blog({ params }) {
  const id = params.slug;
  const allPostData = await getAllPosts(id);
  //console.log(allPostData);
  return (
    <div className="container   m-auto  items-center justify-between">
      <h2 className="text-center my-10">Blog Page</h2>
      <Suspense fallback={<h3>Loadding Post.....</h3>}>
        <div className="grid  grid-cols-3 grid-rows-4 gap-2">
          {allPostData.map((post) => (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
              <Link href={`/blog/${id}/${post.id}`}>
                <img class="rounded-t-lg" src={`${post.img}`} alt="" />
              </Link>
              <div class="p-5">
                <Link href={`/blog/${id}/${post.id}`}>
                  <h5 class="mb-2  {styles.red} font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title ?? ""}{" "}
                  </h5>
                </Link>
                <div className="float-end text-end text-xs font-light">
                  Date: {post.created_at}
                </div>
                <p> {post.short}</p>
                <Link
                  href={`/blog/${id}/${post.id}`}
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
      </Suspense>
    </div>
  );
}
