import { Routes, Route } from "react-router-dom";
import { Home } from "./_root/pages";
import AllUsers from "./_root/pages/AllUsers";
import CreatePost from "./_root/pages/CreatePost";
import EditPost from "./_root/pages/EditPost";
import Explore from "./_root/pages/Explore";
import PostDetails from "./_root/pages/PostDetails";
import Profile from "./_root/pages/Profile";
import Saved from "./_root/pages/Saved";
import UpdateProfile from "./_root/pages/UpdateProfile";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupFrom from "./_auth/forms/SignupFrom";
import { Toaster, } from "./components/ui/toaster";
import "./global.css";
import CreateStory from "./_root/pages/CreateStory";


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Route */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupFrom />} />
        </Route>

        {/* Private Route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />


          {/* NEW FILE */}
          <Route path="create-story" element={<CreateStory/>}/>
         

        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
