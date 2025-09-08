import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { fetchUserData } from "../services/userServices";
import Loading from "./Loading";

const ChatWithOurBot = () => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

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
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
          <Loading />
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          minHeight: "80vh",
          width: "100%",
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
          onLoad={() => setLoading(false)}
        ></iframe>
      </div>
    </Layout>
  );
};

export default ChatWithOurBot;
