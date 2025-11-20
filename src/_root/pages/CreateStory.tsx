import PostStory from "@/components/forms/PostStory";

const CreateStory = () => {
  return (
    <div className="flex flex-1 justify-center">
      <div className="common-container ">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/add-post.svg"
            width={36}
            height={36}
            alt="add"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Create Story
          </h2>
        </div>
        <PostStory   />
               
      </div>
    </div>
  );
};

export default CreateStory;
