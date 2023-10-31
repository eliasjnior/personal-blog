import Link from "next/link";

import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Button } from "@/components/ui/button";

type Post = {
  id: number;
  url: string;
  title: string;
  body_html: string;
  body_markdown: string;
  published_at: string;
  comments_count: number;
  public_reactions_count: 14;
  positive_reactions_count: number;
  readable_publish_date: string;
  cover_image: string;
  social_image: string;
  read_time_minutes: number;
  tag_list: string[];
  tags: string[];
  user: {
    name: string;
    username: string;
    profile_image: string;
    profile_image_90: string;
  };
};

const getPost = async (slug: string): Promise<Post> => {
  const { data } = await axios.get(
    `https://dev.to/api/articles/${process.env.DEV_TO_USERNAME}/${slug}`,
    {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY,
      },
    },
  );

  return data;
};

type BlogPostProps = {
  params: {
    slug: string;
  };
};

const BlogPost = async ({ params: { slug } }: BlogPostProps) => {
  const post = await getPost(slug);

  const distanceToNow = `${formatDistanceToNow(
    new Date(post.published_at),
  )} ago`;

  return (
    <article className="container max-w-4xl">
      <header className="mb-4 lg:mb-6 not-format">
        <address className="flex items-center mb-6 not-italic">
          <div className="inline-flex items-center mr-3 text-sm">
            <img
              className="mr-4 w-16 h-16 rounded-full"
              src={post.user.profile_image_90}
              alt={post.user.name}
              width={90}
              height={90}
            />
            <div>
              <div rel="author" className="text-xl font-bold">
                {post.user.name}
              </div>
              <p className="text-base">
                <time dateTime={post.published_at} title={distanceToNow}>
                  {distanceToNow}
                </time>
              </p>
            </div>
          </div>
          {/* @ts-expect-error: type it later. */}
          <Button className="ml-auto" as={Link} href={post.url} target="_blank">
            View on Dev.to
          </Button>
        </address>
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          {post.title}
        </h1>
      </header>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="my-4 font-bold text-4xl">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="my-4 font-bold text-2xl">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="my-4 font-bold text-xl">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="my-4 font-bold text-lg">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="my-4 font-bold text-base">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="my-4 font-bold text-sm">{children}</h6>
          ),
          p: ({ children }) => <p className="my-4">{children}</p>,
          ul: ({ children }) => (
            <ul className="my-4 list-disc ml-3">{children}</ul>
          ),
          li: ({ children }) => <li className="my-2">{children}</li>,
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");

            return match ? (
              <Prism
                // @ts-expect-error: style not working.
                style={a11yDark}
                language={match ? match[1] : undefined}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </Prism>
            ) : (
              <code className="md-post-code" {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {post.body_markdown}
      </ReactMarkdown>
    </article>
  );
};

export default BlogPost;
