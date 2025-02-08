import { PostMetadata } from "@/lib/types";
import { Card, CardContent, CardHeader } from "../ui/card"
import Link from "next/link";
import Image from "next/image";

type Props = {
    post: PostMetadata;
};

const BlogCard = ({ post }: Props) => {
  return (
    <Card className="flex flex-col gap-4 p-2 bg-[#0C0A09] border-gray-700/60">
        <CardHeader>
        <Image
            src={post.coverImage.url}
            alt={post.title}
            width={500}
            height={400}
            className="rounded-lg w-full h-full"
        />
        </CardHeader>
        <CardContent>
        <h2 className="text-xl font-bold">
            <Link href={`/${post.slug}`} className="hover:underline text-white">
            {post.title}
            </Link>
        </h2>
        <div className="mt-3 flex gap-3 items-center">
            {post?.author.profilePicture && (
            <img
                src={post.author.profilePicture}
                className="h-7 w-7 rounded-full"
            />
            )}{" "}
            {post.author.name}
        </div>
        <p className="text-gray-500 line-clamp-4 mt-3">
            {post.subtitle || post.content.text}
        </p>
        </CardContent>
    </Card>
  )
}

export default BlogCard
