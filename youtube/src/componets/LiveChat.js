import LiveChatMsg from "./LiveChatMsg";
import { generateRandomComment, generateName } from "../utils/helper.js";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice.js";
function LiveChat() {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.liveChat.messages);
  const [liveMessage, setLiveMessage] = useState("");
  // const chatRef = useRef(null);

  const handleSend = () => {
    dispatch(
      addMessage({
        name: "user",
        comment: liveMessage,
      })
    );
    setLiveMessage("");
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomName = generateName();
      const randomComment = generateRandomComment();

      // console.log(randomName, randomComment);
      dispatch(
        addMessage({
          name: randomName,
          comment: randomComment,
        })
      );
    }, 2500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg flex flex-col-reverse overflow-auto">
          LiveChat
          <div>
            {messages &&
              messages.map((comment, i) => (
                <LiveChatMsg key={i} data={comment} />
              ))}
          </div>
        </div>

        <div className="w-full p-2 mt-2 ml-2 border border-black">
          <form
            className="flex items-center gap-2"
            onSubmit={(e) => {
              handleSend();
              e.preventDefault();
            }}
          >
            <input
              type="text"
              className="flex-1 border border-gray-300 px-3 py-2 rounded"
              placeholder="Write a message..."
              value={liveMessage}
              onChange={(e) => setLiveMessage(e.target.value)}
            />
            <button type="submit" className="px-3 py-2 bg-gray-400 rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LiveChat;
