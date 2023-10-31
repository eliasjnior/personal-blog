import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import Links from "@/components/links/links";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type Post = {
  id: number;
  title: string;
  description: string;
  slug: string;
  path: string;
  url: string;
  social_image: string;
  published_at: string;
  tag_list: string[];
};

const getPosts = async (): Promise<Post[]> => {
  const result = await axios.get(`https://dev.to/api/articles`, {
    params: {
      username: process.env.DEV_TO_USERNAME,
    },
    headers: {
      "api-key": process.env.DEV_TO_API_KEY,
    },
  });

  return result.data;
};

const Home = async () => {
  const posts = await getPosts();

  return (
    <>
      <div className="rounded-md flex flex-col justify-center items-center bg-gray-800 mt-32 mb-16 py-16 px-16 text-white">
        <div className="rounded-full overflow-hidden -my-32 border-8 border-gray-900 mb-12">
          <Image
            src="/profile-picture.webp"
            width={112}
            height={112}
            alt="Elias Júnior"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-center">Elias Júnior</h1>
        <p className="text-center text-xl">
          I'm a software engineer specialized in building complex and scalable
          web apps. I've got more than 9 years of experience working on software
          development professionally.
        </p>
        <Links />
      </div>
      <h1 className="text-center text-4xl text-white my-8">#Blog</h1>
      <div className="grid grid-cols-2 gap-4 my-4">
        {posts.map((post) => (
          <Card
            as={Link}
            href={`/blog/${post.slug}`}
            key={post.id}
            className="text-gray-400 bg-gray-800 hover:bg-gray-900 border-gray-800 transition-colors"
          >
            <CardHeader>
              <h1 className="text-2xl font-bold">{post.title}</h1>
            </CardHeader>
            <img src={post.social_image} alt={post.title} />
            <CardContent className="py-6">
              <p>{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Home;
