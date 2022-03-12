import { motion } from "framer-motion";
import "./userProfile.scss";

export default function UserProfile({
  user: {
    message,
    avatar_url,
    bio,
    created_at,
    followers,
    name,
    location,
    following,
    public_repos,
    login,
    twitter_username,
    blog,
    company,
  },
}) {
  if (message == "Not Found") return null;

  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
  }).format(new Date(created_at));

  return (
    <motion.div
      className="userProfile"
      key="card"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
    >
      <img src={avatar_url} alt={name} className="userProfile__photo" />
      <div className="userProfile__header">
        <div className="userProfile__title">
          <h2>{name}</h2>
          <p>{login}</p>
        </div>
        <p>Joined at {date}</p>
      </div>
      <p className="userProfile__description">
        {bio || "Not description available"}
      </p>
      <ul className="userProfile__stats">
        <li>
          <p>Repos</p>
          <span>{public_repos}</span>
        </li>
        <li>
          <p>Follower</p>
          <span>{followers}</span>
        </li>
        <li>
          <p>Following</p>
          <span>{following}</span>
        </li>
      </ul>
      <ul className="userProfile__links">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location || "Not available"}
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          {twitter_username || "Not available"}
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          {blog || "Not available"}
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {company || "Not available"}
        </li>
      </ul>
    </motion.div>
  );
}
