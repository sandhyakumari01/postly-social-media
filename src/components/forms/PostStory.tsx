import { useState, useEffect } from "react";
import Stories from "react-insta-stories";
import { Button } from "../ui";

// Define the story item type
type StoryItem = {
  url: string;
  type: "image" | "video";
  timestamp: number;
};

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [story, setStory] = useState<StoryItem[]>([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Create a story from the selected file
  const createStory = () => {
    if (selectedFile) {
      const newStoryItem: StoryItem = {
        url: URL.createObjectURL(selectedFile),
        type: selectedFile.type.startsWith("image") ? "image" : "video",
        timestamp: Date.now(),
      };

      setStory((prev) => [...prev, newStoryItem]);
      setSelectedFile(null); // Clear after adding
    }
  };

  // Filter out stories older than 24 hours
  const filterStories = (stories: StoryItem[]): StoryItem[] => {
    const currentTime = Date.now();
    return stories.filter(
      (s) => currentTime - s.timestamp <= 24 * 60 * 60 * 1000
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && currentStoryIndex < story.length - 1) {
        setCurrentStoryIndex((prev) => prev + 1);
      } else if (event.key === "ArrowLeft" && currentStoryIndex > 0) {
        setCurrentStoryIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentStoryIndex, story]);

  return (
    <div className="container mx-auto mt-10 px-4 lg:px-0">
      <h2 className="text-lg font-semibold mb-4">Select an Image or Video</h2>

      {/* File Input */}
      <input
        type="file"
        accept="image/*, video/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      {/* Create Story Button */}
      <Button
        onClick={createStory}
        type="button"
        className="shad-button_primary whitespace-nowrap"
      >
        Create Story
      </Button>

      {/* Selected File Preview */}
      {selectedFile && (
        <div className="mt-8">
          <p className="text-lg font-semibold mb-2">
            Selected File: {selectedFile.name}
          </p>
          {selectedFile.type.startsWith("image") ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected"
              className="max-w-full h-auto"
            />
          ) : (
            <video controls className="max-w-full h-auto">
              <source
                src={URL.createObjectURL(selectedFile)}
                type={selectedFile.type}
              />
            </video>
          )}
        </div>
      )}

      {/* Stories Preview */}
      {story.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Preview Story</h2>
          <Stories
            stories={filterStories(story)}
            defaultInterval={1500}
            width="100%"
            height="auto"
            currentIndex={currentStoryIndex}
            onAllStoriesEnd={() => setCurrentStoryIndex(0)}
          />
        </div>
      )}
    </div>
  );
}

export default FileUpload;
