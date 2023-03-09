import { useEffect,useState } from "react";
import axios from 'axios';
const Chat = () => {
  const [chats,newChats]=useState([])
  const fetchChats = async () => {
    const {data}  = await axios.get("/api/chat");
    newChats(data)
  };
  useEffect(() => {
    fetchChats();
  }, [])
  return (
    <div>
      {chats.map((c)=>(
      <div key={c._id}>{c.chatName}</div>
  ))}</div>
  );
};

export default Chat;
