import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { fetchUserData } from "../services/userServices";

const ChatWithOurBot = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUserData();

      // Use _id instead of id
      if (userData && userData._id) {
        setUserId(userData._id);
      }
    };

    loadUser();
  }, []);

  // Construct the iframe URL with the user ID
  const iframeUrl = userId
    ? `https://veda-bot.streamlit.app/?embedded=true&userId=${userId}` // Replace with your deployed bot URL
    : "about:blank"; // Empty until user ID is loaded

  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <iframe
          src={iframeUrl}
          title="VedaBot Chat"
          style={{
            width: "95%",
            height: "85vh",
            border: "none",
            borderRadius: "10px",
          }}
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  );
};

export default ChatWithOurBot;
