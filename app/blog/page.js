"use client";
import getPostCategory from "@/lib/getPostCategory";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import Link from "next/link";
import NewestPost from "./newest/page";
export const metadata = {
  title: "My Blog",
  description: "Blog List",
};

export default async function Blog() {
  const blogData = await getPostCategory();
  return (
    <div>
      <div className="max-w-[1240px]   m-auto my-20 ">
        <div className="flex flex-wrap justify-between h-full">
          <div className="gap-2  flex-1 bg-gray w-64">
            <ul className="list-item">
              {blogData.map((blog) => (
                <li ClassName="mb-2 list-item {styles.red} font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href={`blog/${blog.id}`}> {blog.name ?? ""} </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-full ">
            <ProgressBar
              height="4px"
              color="#ff0000"
              options={{ showSpinner: true }}
              shallowRouting
            />

            <NewestPost />
          </div>
        </div>
      </div>
    </div>
  );
}
