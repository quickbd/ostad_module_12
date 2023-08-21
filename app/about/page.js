import { Suspense } from "react";

export const metadata = {
  title: "About me",
  description: "Md. Hasanat Zamil, Project manager",
};

export default async function Aboutus(param) {
  return (
    <div className="container   m-auto my-40 items-center justify-between">
      <h1 className="text-center mt-30">About Us</h1>
      <Suspense fallback={<h3>Loadding Post.....</h3>}>
        <div className="  justify-center  m-auto">
          <div className="flex text-justify">
            <div className="md:grid-cols-4 sm:grid-col-12 text-center gap-5">
              <div className="avatar">
                <div className="w-40 rounded-full">
                  <img src="/images/zamil.jpg" />
                </div>
              </div>
              <h2 className=" font-bold text-[16px]">Md. Hasanat Zamil</h2>
              <span>e: hzamil@gmail.com</span>
            </div>
            <div className="md:grid-cols-2  gap-12 grid-col-8 grid   ">
              I am Hasanat Zamil. I am full stack web developer. I have 18years
              of experience with web programming. Now I am update myself with
              React Js. I am a web developer with a vast array of knowledge in
              many different front end and back end languages, responsive
              frameworks, databases, and best code practices. My objective is
              simply to be the best web developer that I can be and to
              contribute to the technology industry all that I know and can do.
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
