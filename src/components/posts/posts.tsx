"use client";

import { getPosts } from "@/lib/requests";
import { useInfiniteQuery } from "@tanstack/react-query";
import BlogCard from "../blogCards/blog-card";
import { Button } from "../ui/button";

const Posts = () => {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (lastPage) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });

  return (
    <>
      {data?.pages.map((group) =>
        group?.map((post) => <BlogCard key={post.cursor} post={post.node} />)
      )}

      <div className="col-span-1 lg:col-span-3 w-full flex justify-center my-5">
        <Button
          className="w-full bg-[#0C0A09] border-gray-600 font-semibold tracking-wider"
          variant="outline"
          disabled={!hasNextPage || isFetching}
          onClick={() => fetchNextPage()}
        >
          {isFetching
            ? "Loading..."
            : hasNextPage
            ? "Load more"
            : "That's all for today!"}
        </Button>
      </div>
    </>
  );
};

export default Posts;
