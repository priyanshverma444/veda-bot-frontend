import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./routes/Login";
import Signup from "./routes/SignUp";
import Profile from "./routes/Profile";
import { fetchUserData } from "./services/userServices";
import NotFound from "./routes/NotFound";
import Loading from "./routes/Loading";
import Home from "./routes/Home";
import NearByDoctors from "./routes/NearByDoctors";
import Blogs from "./routes/Blogs";
import YogaAyurveda from "./routes/blogs/YogaAyurveda";
import AyurvedicHerbs from "./routes/blogs/AyurvedicHerbs";
import AyurvedicDiet from "./routes/blogs/AyurvedicDiet";
import HolisticHealing from "./routes/blogs/HolisticHealing";
import SeasonalAyurvedicPractices from "./routes/blogs/SeasonalAyurvedicPractices";
import ManagingStressWithAyurveda from "./routes/blogs/ManagingStressWithAyurveda";
import Panchakarma from "./routes/blogs/Panchakarma";
import AyurvedicBeautySecrets from "./routes/blogs/AyurvedicBeautySecrets";
import ChatWithOurBot from "./routes/ChatWithOurBot";
import ForgotPassword from "./routes/ForgotPassword";
import ResetPassword from "./routes/ResetPassword";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData()
      .then((data) => {
        if (data) {
          setLoggedIn(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/chatwithbot" element={<ChatWithOurBot />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/yoga-ayurveda" element={<YogaAyurveda />} />
              <Route path="/ayurvedic-herbs" element={<AyurvedicHerbs />} />
              <Route path="/ayurvedic-diet" element={<AyurvedicDiet />} />
              <Route path="/holistic-healing" element={<HolisticHealing />} />
              <Route
                path="/seasonal-ayurvedic-practices"
                element={<SeasonalAyurvedicPractices />}
              />
              <Route
                path="/managing-stress-with-ayurveda"
                element={<ManagingStressWithAyurveda />}
              />
              <Route path="/panchakarma" element={<Panchakarma />} />
              <Route
                path="/ayurvedic-beauty-secrets"
                element={<AyurvedicBeautySecrets />}
              />
              <Route path="/nearbydoctors" element={<NearByDoctors />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/chatwithbot" element={<Login />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/yoga-ayurveda" element={<YogaAyurveda />} />
              <Route path="/ayurvedic-herbs" element={<AyurvedicHerbs />} />
              <Route path="/ayurvedic-diet" element={<AyurvedicDiet />} />
              <Route path="/holistic-healing" element={<HolisticHealing />} />
              <Route
                path="/seasonal-ayurvedic-practices"
                element={<SeasonalAyurvedicPractices />}
              />
              <Route
                path="/managing-stress-with-ayurveda"
                element={<ManagingStressWithAyurveda />}
              />
              <Route path="/panchakarma" element={<Panchakarma />} />
              <Route
                path="/ayurvedic-beauty-secrets"
                element={<AyurvedicBeautySecrets />}
              />
              <Route path="/nearbydoctors" element={<Login />} />
              <Route path="/profile" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
