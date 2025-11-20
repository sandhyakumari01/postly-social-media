// // MusicList.tsx

// import React from "react";

// type Song = {
//   id: number;
//   name: string;
//   url: string;
// };

// type MusicListProps = {
//   songs: Song[];
//   onSelect: (song: Song) => void;
// };

// const MusicList: React.FC<MusicListProps> = ({ songs, onSelect }) => {
//   return (
//     <div>
//       <h2>Select Music</h2>
//       <ul>
//         {songs.map((song) => (
//           <li key={song.id} onClick={() => onSelect(song)}>
//             {song.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MusicList;

// MusicSelectionPage.tsx


// MusicSelectionPage.tsx

// import React, { useState } from "react";
// import { Song } from ".";
// import 

// type MusicSelectionPageProps = {
//   songs: Song[];
//   onSelect: (song: Song) => void;
// };

// const ITEMS_PER_PAGE = 10; // Adjust this as per your requirement

// const MusicSelectionPage: React.FC<MusicSelectionPageProps> = ({
//   songs,
//   onSelect,
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const endIndex = currentPage * ITEMS_PER_PAGE;

//   const paginatedSongs = songs.slice(startIndex, endIndex);

//   const totalPages = Math.ceil(songs.length / ITEMS_PER_PAGE);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   return (
//     <div className="bg-white p-8">
//       <h2 className="text-2xl font-semibold mb-4">Select Music</h2>
//       <ul>
//         {paginatedSongs.map((song) => (
//           <li
//             key={song.id}
//             className="cursor-pointer mb-2"
//             onClick={() => onSelect(song)}
//           >
//             {song.name}
//           </li>
//         ))}
//       </ul>
//       <div className="flex justify-between mt-4">
//         <button
//           className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50"
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span className="text-gray-600">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           className="bg-gray-200 px-4 py-2 rounded-md disabled:opacity-50"
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MusicSelectionPage;

// CreateStory.js
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function MusicList() {
//   const [storyContent, setStoryContent] = useState('');
//   const [file, setFile] = useState(null);
//   const history = useHistory();

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleCreateStory = () => {
//     // Logic to save the story content and file (image/video)
//     // Once saved, navigate back to the home page
//     history.push('/');
//   };

//   return (
//     <div>
//       <h1>Create Story</h1>
//       <textarea
//         value={storyContent}
//         onChange={(e) => setStoryContent(e.target.value)}
//         placeholder="Write your story here..."
//       />
//       <input type="file" accept="image/*, video/*" onChange={handleFileChange} /> {/* For uploading images and videos */}
//       <button onClick={handleCreateStory}>Post Story</button>
//     </div>
//   );
// }

// export default MusicList;


