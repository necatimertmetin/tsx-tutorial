import { Stack } from "@mui/material";
import { Post } from "../../../../components/post/Post";

export interface comment {
  user: string;
  text: string;
}

export interface Post {
  id: number;
  username: string;
  profilePic?: string;
  image: string;
  caption: string;
  likes: number;
  comments: comment[];
  timestamp: string;
}

const posts: Post[] = [
  {
    id: 1,
    username: "jane.doe",
    image: "https://picsum.photos/1080/1350",
    caption: "Günün sonunda deniz kenarı 🌊",
    likes: 124,
    comments: [
      { user: "john.smith", text: "Harika bir manzara!" },
      { user: "wanderlust22", text: "Orası neresi?" },
    ],
    timestamp: "2 saat önce",
  },
  {
    id: 2,
    username: "tech.guy",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    image: "https://picsum.photos/1080/1350",
    caption: "Yeni setup 🔥 #battlestation",
    likes: 342,
    comments: [{ user: "keyboardqueen", text: "Klavye çok iyiymiş!" }],
    timestamp: "5 saat önce",
  },
  {
    id: 3,
    username: "chef.mia",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
    image: "https://picsum.photos/1080/1350",
    caption: "Bugünkü tarifim: Ev yapımı ramen 🍜",
    likes: 276,
    comments: [{ user: "hungry.boy", text: "Tarifi paylaşır mısın?" }],
    timestamp: "1 gün önce",
  },
];

export const Flow = () => {
  return (
    <Stack spacing={5} direction={"column"} alignItems={"center"} sx={{ p: 3 }}>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </Stack>
  );
};
