import Userdetails from "./userdetails";
import Personaldetails from "./personaldetails";
import Confirm from "./confirm";
import Success from "./success";

import { useState } from "react";

const Parent = () => {
  const [page, setpage] = useState(0);
  const [info, setinfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });

  // eslint-disable-next-line react/jsx-key
  const tablecomponent = [
    // eslint-disable-next-line react/jsx-key
    <Userdetails
      fonction={() => {
        setpage((prev) => prev + 1);
      }}
      info={info}
      setinfo={setinfo}
    />,
    // eslint-disable-next-line react/jsx-key
    <Personaldetails
      fonction={() => {
        setpage((prev) => prev + 1);
      }}
      fonction2={() => {
        setpage((prev) => prev - 1);
      }}
      info={info}
      setinfo={setinfo}
    />,
    // eslint-disable-next-line react/jsx-key
    <Confirm
      fonction={() => {
        setpage((prev) => prev + 1);
        alert('form submitted (check console)')
        console.log(info);
      }}
      fonction2={() => {
        setpage((prev) => prev - 1);
      }}
      info={info}
    />,

    // eslint-disable-next-line react/jsx-key
    <Success fonction={()=>{
      setpage((prev)=>prev -1)
    }} />,
  ];

  return (

    <div>
      {tablecomponent[page]}
      <div className=" h-3 w-52 my-0 mx-auto rounded-md border-2 bg-transparent  ">
        <div
          className=" h-2.5 w-52 bg-green-600 rounded-md "
          style={{
            width:
              page == 0
                ? "25%"
                : page == 1
                ? "50%"
                : page == 2
                ? "75%"
                : page == 3
                ? "100%"
                : "0%",
            transition: "all ease .5s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Parent;
