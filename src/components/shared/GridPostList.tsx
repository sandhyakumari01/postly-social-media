import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { useUserContext } from "@/Context/AuthContext";
import { PostStats } from "@/components/shared";

type GridPostListProps = {
  posts: Models.Document[];
  showUser?: boolean;
  showStats?: boolean;
};

const GridPostList = ({
  posts,
  showUser = true,
  showStats = true,
}: GridPostListProps) => {
  const { user } = useUserContext();

  return (
    <ul className="grid-container">
      {posts.map((post) => {
        const postImage =
          post?.imageUrl?.replace("/preview", "/view") ||
          "/assets/icons/profile-placeholder.svg";

        const creatorImage =
          post?.creator?.imageUrl?.replace("/preview", "/view") ||
          "/assets/icons/profile-placeholder.svg";

        return (
          <li key={post.$id} className="relative min-w-80 h-80">
            <Link to={`/posts/${post.$id}`} className="grid-post_link">
              <img
                src={postImage}
                alt="post"
                className="h-full w-full object-cover rounded-lg"
              />
            </Link>

            <div className="grid-post_user">
              {showUser && (
                <div className="flex items-center justify-start gap-2 flex-1">
                  <img
                    src={creatorImage}
                    alt="creator"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="line-clamp-1">{post.creator.name}</p>
                </div>
              )}
              {showStats && <PostStats post={post} userId={user.id} />}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default GridPostList;
