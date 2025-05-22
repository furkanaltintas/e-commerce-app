"use client";
import Avatar from "../general/Avatar";

const Comment = ({ prd }: { prd: any }) => {
  return (
    <div className="border border-slate-300 w-full md:w-1/2 p-4 rounded-lg mb-4">
      <div className="flex items-center gap-1">
        <Avatar image={prd?.user?.image} />
        <div>{prd?.user?.name}</div>
      </div>
      <div className="mt-1">
        <p className="text-slate-500">{prd?.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
