import { PostCard, UserCard } from "@/components/shared";
import {
  useGetRecentPosts,
  useGetUsers,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { Loader } from "lucide-react";
import UserName from "@/components/shared/UserName";
import { useUserContext } from "@/Context/AuthContext";

const Home = () => {
   const { user } = useUserContext();
  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  const {
    data: creators,
    isLoading: isUserLoading,
    isError: isErrorCreators,
  } = useGetUsers(10);

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
        <div className="home-creators">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <div>
            {isUserLoading && !creators ? (
              <Loader />
            ) : (
              <ul className="flex gap-2 overflow-x-auto no-scrollbar w-full">
                {creators?.documents.map((creator) => (
                  <li
                    key={creator?.$id}
                    className="flex-shrink-0 w-20 text-center whitespace-normal break-words"
                  >
                    <UserName user={creator} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <h2 className="h3-bold md:h2-bold text-left w-full">Home Story</h2>

          {/* <HomeStory /> */}
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h3 className="h3-bold text-light-1">Top Creators</h3>
        {isUserLoading && !creators ? (
          <Loader />
        ) : (
          <ul className="grid 2xl:grid-cols-2 gap-6">
            {/* {creators?.documents.map((creator) => ( */}
             {creators?.documents
              .filter((creator) => creator.$id !== user.id)
              .map((creator) => (
              <li key={creator?.$id}>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
