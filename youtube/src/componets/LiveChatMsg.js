function LiveChatMsg({ data }) {
  return (
    <div className=" flex flex-row shadow -sm bg-gray-100 p-1 my-2 rounded-lg">
      <img
        className="w-10 h-10"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR81iX4Mo49Z3oCPSx-GtgiMAkdDop2uVmVvw&s"
      />
      <div className="px-3 flex items-center gap-1 ">
        <p className=" text-m font-bold "> {data.name}</p>
        <p className="font-normal text-center">{data.comment}</p>
      </div>
    </div>
  );
}

export default LiveChatMsg;
