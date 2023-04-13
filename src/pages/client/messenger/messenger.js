import React, { useState, useEffect, useRef } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import "./messenger.css";
import Icon from "../../../components/icon";
import Conversation from "../conversation/conversation";
import Message from "../message/message";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import axios from "../../../API/axios";
import { io } from "socket.io-client";

const Messenger = () => {
  const [conversation, setConversation] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  const socket = useRef();

  const { projectId, id } = useParams();

  const ScrollRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
    socket?.current.on("getUsers", users => {});
    socket?.current.on("getMessage", data => {
      const arrivedMessage = {
        senderId: data.userId,
        text: data.text,
        createdAt:Date.now()
      }
      setMessages((prev)=>[...prev, arrivedMessage]);
    });
    return () => {
      socket?.current.disconnect();
    }
  }, []);

  useEffect(() => {
    if (user != null) {
      socket?.current.emit("addUser", user._id, id);
    }  
  }, [socket?.current, user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`/admin/project/${projectId}`);
        setConversation(res.data[0].users);
      } catch (err) {}
    };

    const getMessages = async () => {
      try {
        const res = await axios.get(`/message/?id=${id}`);
        setMessages(res.data);
      } catch (err) {}
    };

    const fetchData = async () => {
      try {
        const res = await axios.get("/auth/login/success");
        setUser(res.data.user);
      } catch {
        navigate("/login");
      }
    };

    fetchData();
    getConversations();
    getMessages();
  }, []);

  useEffect(() => {
    ScrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    socket?.current.emit("sendMessage", { userId: user._id, room: id, text: newMessage });

    try {
      const res = await axios.post(`/message/?id=${id}`, { text: newMessage });
      setNewMessage("");
      setMessages([...messages, res.data]);
    } catch (err) {}
  };

  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <TextField
              id="standard-basic"
              label={<Icon />}
              variant="standard"
              className="searchBar"
              autoComplete="off"
            />
            {conversation.map((c) => (
              <Conversation conversation={c} />
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              {messages.map((m) => (
                <div ref={ScrollRef}>
                  <Message message={m} user={user} />
                </div>
              ))}
            </div>
            <div className="chatBoxBottom">
              <textarea
                name=""
                id=""
                className="chatMessageInput"
                placeholder="write something...."
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              ></textarea>
              <Button variant="primary" onClick={handleSubmit}>
                Submit form
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
