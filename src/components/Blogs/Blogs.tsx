import Seperator from "../common/Seperator";
import BlogsCarousel from "./BlogsCarousel";

const Blogs = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/blog`, {
    headers: {
      "X-Api-Key": process.env.API_KEY as string,
    },
    cache: "no-cache",
  });

  const blogs = await res.json();
  
  return (
    <div
      id="blogs"
      className="relative pt-4 pb-12 bg-[url('/bg-pattern.png')] bg-center bg-cover "
    >
      <div className="container">
        <h3 className="text-center z-0 w-max mx-auto text-4xl relative  font-semibold my-12">
          <span className=" -z-[1] inline-block bg-skew after:bg-gradient-to-br after:from-zinc-800 after:to-stone-800 ">
            Blogs
          </span>
        </h3>

        <BlogsCarousel blogs={blogs?.data} />
      </div>
      <Seperator />
    </div>
  );
};

export default Blogs;
