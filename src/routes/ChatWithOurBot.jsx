import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { fetchUserData } from "../services/userServices";

const ChatWithOurBot = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUserData();

      if (userData && userData._id) {
        setUserId(userData._id);
      }
    };

    loadUser();
  }, []);

  const baseUrl = import.meta.env.VITE_CHATBOT_URL;

  const iframeUrl =
    userId && baseUrl ? `${baseUrl}/?userId=${userId}` : "about:blank";

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src={iframeUrl}
          title="VedaBot Chat"
          style={{
            width: "95%",
            height: "80vh",
            border: "none",
            borderRadius: "10px",
            marginBottom: "4px",
          }}
          allowFullScreen
        ></iframe>
      </div>
    </Layout>
  );
};

export default ChatWithOurBot;
