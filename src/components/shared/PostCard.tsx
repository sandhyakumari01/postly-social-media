import { Models } from "appwrite";
import { Link } from "react-router-dom";

import PostStats from "./PostStats";
import { multiFormatDateString } from "@/lib/utils";
import { useUserContext } from "@/Context/AuthContext";

type PostCardProps = {
  post: Models.Document;
};

const PostCard = ({ post }: PostCardProps) => {
  const { user } = useUserContext();

  // Agar creator missing hai to render mat karo
  if (!post?.creator) return null;

  // ✅ Post image handle (Appwrite free plan = only /view allowed)
  const postImage =
    post.imageUrl?.replace("/preview", "/view") ||
    "/assets/icons/profile-placeholder.svg";

  const creatorImage =
    post.creator?.imageUrl?.replace("/preview", "/view") ||
    "/assets/icons/profile-placeholder.svg";

  return (
    <div className="post-card " >
      {/* Header */}
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={creatorImage}
              alt="creator"
              className="w-12 h-12 rounded-full object-cover"
            />
          </Link>

          <div className="flex flex-col">
            <p className="base-medium lg:body-bold text-light-1">
              {post.creator.name}
            </p>
            <div className="flex-center gap-2 text-light-3">
              <p className="subtle-semibold lg:small-regular">
                {multiFormatDateString(post.$createdAt)}
              </p>
              •
              <p className="subtle-semibold lg:small-regular">
                {post.location}
              </p>
            </div>
          </div>
        </div>

        {/* Edit button (sirf apne posts ke liye) */}
        <Link
          to={`/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id ? "hidden" : ""}`}
        >
          <img
            src={"/assets/icons/edit.svg"}
            alt="edit"
            width={20}
            height={20}
          />
        </Link>
      </div>

      {/* Post content */}
      <Link to={`/posts/${post.$id}`}>
        <div className="small-medium lg:base-medium py-5">
          <p>{post.caption}</p>
          <ul className="flex gap-1 mt-2 flex-wrap">
            {post.tags.map((tag: string, index: number) => (
              <li
                key={`${tag}${index}`}
                className="text-light-3 small-regular"
              >
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={postImage}
          alt="post"
          className="post-card_img w-full max-h-[500px] object-cover rounded-lg"
        />
      </Link>

      {/* Stats (likes/comments) */}
      <PostStats post={post} userId={user.id} />
    </div>
  );
};

export default PostCard;  