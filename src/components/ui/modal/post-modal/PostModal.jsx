import { MessageCircle, MoveUp, User } from "lucide-react";
import React from "react";

export const PostModal = ({ post }) => {
  console.log(`Post Modal: ${post.title}`);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="jet text-xl md:text-2xl font-bold">{post.title}</h1>
      </div>
      <div>
        <p className="rubik text-md leading-relaxed text-justify  text-gray-400">
          {post.selftext}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="flex gap-2 items-center rubik capitalize text-sm text-gray-400">
          <MoveUp size={14} /> {post.score} upvotes
        </p>
        <p className="flex gap-2 items-center rubik capitalize text-sm text-gray-400">
          <MessageCircle size={14} /> {post.num_comments} comments
        </p>
        <p className="flex gap-2 items-center rubik  text-sm text-gray-400">
          <User size={14} /> u/{post.author}
        </p>
      </div>
      <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 mt-4 shadow-md">
        <h2 className="rubik font-medium text-blue-400 mb-1">
          Like what you see?
        </h2>
        <p className="rubik text-sm text-gray-300 leading-relaxed">
          If this post resonates with you, why not join the conversation on
          Reddit? Sharing your thoughts not only supports the creator but also
          helps build a stronger, more insightful community.
        </p>
        <a
          href={`https://reddit.com${post.permalink}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-400 hover:text-blue-300 underline underline-offset-2 transition"
        >
          Jump into the discussion →
        </a>
      </div>
    </div>
  );
};
