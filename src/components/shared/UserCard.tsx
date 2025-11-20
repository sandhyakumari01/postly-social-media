import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="user-card flex flex-col items-center gap-3 p-3">
      <Link to={`/profile/${user.$id}`} className="flex flex-col items-center gap-2">
        <img
          src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="creator"
          className="rounded-full w-14 h-14 object-cover"
        />

        <div className="flex flex-col items-center gap-1">
          <p className="base-medium text-light-1 text-center line-clamp-1">
            {user.name}
          </p>
          <p className="small-regular text-light-3 text-center line-clamp-1">
            @{user.username}
          </p>
        </div>
      </Link>

      <Button type="button" size="sm" className="shad-button_primary px-5">
        Follow
      </Button>
    </div>
  );
};

export default UserCard;
