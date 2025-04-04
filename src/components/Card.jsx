import { useEffect } from "react";
import { useState } from "react";

export default function Card() {
  const [title, setTitle] = useState(null);
  const [info, setInfo] = useState(null);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        setTitle(data.title);
        setInfo(data.body);
        setId(data.id);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <div className="card">
      <div className="card_img">
        <img src="background-image.jpg" alt="배경 이미지" />
      </div>

      <div className="info">
        <span>{title}</span>
        <p>{info}</p>
      </div>

      <div className="profile_content">
        <div className="profile_img">
          <img src="profile-image.jpg" alt="프로필" />
        </div>
        <div className="user">
          <span>by</span>
          <span className="nickname">{id}</span>
        </div>
      </div>
    </div>
  );
}
