import React from "react";

const commentsData = [
  {
    name: "alex",
    text: "Great video, learned something new.",
    replies: [
      {
        name: "maria",
        text: "Same here, especially the last part.",
        replies: [
          {
            name: "rohan",
            text: "That example was 🔥",
            replies: [
              {
                name: "anita",
                text: "Agreed, made things very clear.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "john",
    text: "Can you make a follow-up on this topic?",
    replies: [
      {
        name: "creator",
        text: "Yes, planning one soon!",
        replies: [],
      },
    ],
  },
  {
    name: "sneha",
    text: "This cleared a lot of confusion for me.",
    replies: [
      {
        name: "amit",
        text: "Same, I was stuck on this for weeks.",
        replies: [
          {
            name: "sneha",
            text: "Exactly, docs alone weren't helping.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "kevin",
    text: "Timestamp for the example?",
    replies: [
      {
        name: "lisa",
        text: "Around 6:45",
        replies: [
          {
            name: "kevin",
            text: "Thanks!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "priya",
    text: "Audio could be slightly better, but content is solid.",
    replies: [
      {
        name: "creator",
        text: "Noted, will improve in next video.",
        replies: [],
      },
    ],
  },
  {
    name: "daniel",
    text: "Why is this not getting more views?",
    replies: [
      {
        name: "harsh",
        text: "Algorithm things 😅",
        replies: [
          {
            name: "daniel",
            text: "Yeah, quality content often suffers.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "neha",
    text: "Can beginners follow this?",
    replies: [
      {
        name: "vikram",
        text: "Yes, but pause and rewatch parts.",
        replies: [
          {
            name: "neha",
            text: "Got it, thanks!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "sam",
    text: "The analogy at the start was nice.",
    replies: [
      {
        name: "tara",
        text: "Yeah, made it intuitive.",
        replies: [],
      },
    ],
  },
  {
    name: "arjun",
    text: "Please pin this comment if possible.",
    replies: [],
  },
  {
    name: "meera",
    text: "Watched till the end, worth it.",
    replies: [
      {
        name: "creator",
        text: "Appreciate that 🙌",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  return (
    <div className=" flex shadow -sm bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
      />
      <div className="px-3">
        <p className=" text-m font-bold "> {data.name}</p>
        <p>{data.text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return commentsData.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList commentsData={comment.replies} />
      </div>
    </div>
  ));
};
function CommentsContainer() {
  return (
    <div className=" m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList commentsData={commentsData} />
    </div>
  );
}

export default CommentsContainer;
