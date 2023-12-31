import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
const SubmitBtn = () => {
    const {pending}=  useFormStatus()
    return (
    <button
      type="submit"
      disabled={pending}
      className="hover:bg-gray-950 active:scale-105 focus:scale-110 hover:scale-110 group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all disabled:scale-100 disabled:bg-opacity-65"
    >{
        pending ? <div className="h-5 w-5 animate-spin border-b-2 border-white rounded-full"/>:(<>
        Submit{" "}
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
    )}
    </button>
  );
};

export default SubmitBtn;
