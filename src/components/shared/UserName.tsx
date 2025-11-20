import { Models } from "appwrite";
import { Link } from "react-router-dom";


type UserCardProps = {
  user: Models.Document;
};



const UserName = ({ user }: UserCardProps) => {
 
  return (
    <Link to={`/profile/${user.$id}`} className="profileLink" >
      <div className=" profile2">
        <div className="imageProfile">
        <img
          src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="creator"
          className="rounded-full w-14 h-14 mr-6 imgPofile"
          id="imageBorder"
        />
         </div>
        <p className="text-xs mr-6 ">{user.name}</p>
      </div>
      {/* <p className="small-regular text-light-3 line-clamp-1">
        @{user.username}
      </p> */}
    </Link>
  
  );
};

export default UserName;
