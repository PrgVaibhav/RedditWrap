import React, { useState } from "react";
import { ThumbsUp, MessageSquare, Bookmark } from "lucide-react";
import { timeSince } from "../../../helper/utils/showTime";
import { Modal } from "../modal/Modal";
import { PostModal } from "../modal/post-modal/PostModal";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

export const Posts = ({ post }) => {
  const [modal, setModal] = useState(false);

  const getPreviewText = (text) => {
    const cleanText = text || "This post doesn't contain any description.";
    return cleanText.length > 100 ? `${cleanText.slice(0, 100)}...` : cleanText;
  };

  const toggleModal = () => {
    setModal(!modal);
    console.log(`Modal: ${modal}`);
  };

  const { addToLocalStorage, localData, removeFromLocalStorage } =
    useLocalStorage("localData");

  console.log(`LocalStorage: ${localData}`);

  const id = localData.map((data) => data.id);
  console.log(`id: ${id}`);

  return (
    <>
      <div className="card-color h-auto md:h-[30vh] lg:h-[14vw] hover:bg-[#252933] transition-all duration-300 border border-slate-700 shadow-lg  rounded-xl flex justify-between gap-4 transform hover:scale-[1.01] relative cursor-pointer">
        <div className="flex flex-col justify-between w-full">
          {/* Subreddit Badge */}
          <div className="flex items-center justify-between mb-2 nav p-2 rounded-xl">
            <p className="text-xs bg-neutral-500 text-white px-2 py-[2px] rounded-full w-max uppercase tracking-wide rubik">
              r/{post.subreddit}
            </p>
            <p className="text-xs text-gray-500 rubik">
              Posted {timeSince(post.created_utc)}
            </p>
          </div>

          <div className="flex flex-col gap-1 p-2" onClick={toggleModal}>
            {/* Title */}
            <h1 className="font-semibold text-lg mb-1 text-white jet">
              {getPreviewText(post.title)}
            </h1>

            {/* Preview Text */}
            <p className="text-sm text-gray-400 mb-2 rubik wrap-anywhere">
              {getPreviewText(post.selftext)}
            </p>
          </div>

          {/* Author + Metrics */}
          <div className="flex items-center justify-between text-xs text-gray-400 mt-auto p-2 border-t border-slate-700">
            <div className="flex items-center gap-3 rubik">
              <p>By: u/{post.author}</p>
              <div className="cursor-pointer">
                {id.includes(post.id) ? (
                  <Bookmark
                    size={14}
                    className="text-yellow-400"
                    onClick={() => removeFromLocalStorage(post.id)}
                  />
                ) : (
                  <Bookmark
                    size={14}
                    className="text-gray-500"
                    onClick={() => addToLocalStorage(post)}
                  />
                )}
              </div>
            </div>
            <div className="flex gap-4 items-center border border-slate-700 p-2 rounded-lg shadow-md">
              <div className="flex items-center gap-1">
                <ThumbsUp size={14} /> {post.score}
              </div>
              <div>/</div>
              <div className="flex items-center gap-1">
                <MessageSquare size={14} /> {post.num_comments}
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <PostModal post={post} />
        </Modal>
      )}
    </>
  );
};

// {/* Read More */}
// <a
//   href={`https://reddit.com${post.permalink}`}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="text-sm text-blue-400 hover:underline mt-3 inline-block"
// >
//   Read full post →
// </a>
