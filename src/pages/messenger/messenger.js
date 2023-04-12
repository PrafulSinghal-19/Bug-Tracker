import React, { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import "./messenger.css";
import Icon from "../../components/icon";
import Conversation from "../conversation/conversation";
import Message from "../message/message";
import TextField from "@mui/material/TextField";
import Button from "react-bootstrap/Button";
import axios from "../../API/axios";

const Messenger = () => {
  const [conversation, setConversation] = useState([]);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();
  const [newMessage, setNewMessage] = useState("");
  //   const [searchParams, setSearchParams] = useSearchParams();
  const { projectId, id } = useParams();

  const navigate = useNavigate();

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

  const handleSubmit = async(e) => {
      e.preventDefault();
      try {
          const res = await axios.post(`/message/?id=${id}`, { text: newMessage });
          setNewMessage("");
          setMessages([...messages,res.data]);
      }  
      catch (err) {
          
      }

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
                <Message message={m} user={user} />
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
