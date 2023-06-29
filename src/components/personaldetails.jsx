import Navbar from "./navbar";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
// import {  useState } from "react";

// eslint-disable-next-line react/prop-types
const Personaldetails = ({ fonction, fonction2, info, setinfo }) => {
  const schema = yup.object().shape({
    occupation: yup.string().required(),
    city: yup.string().required(),
    bio: yup.string().required(),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => {
    console.log(data);
  };
  // const [occup, setoccup] = useState("");
  // const [city, setcity] = useState("");
  // const [bio, setbio] = useState("");

  return (
    <>
      <Navbar title="personal details" />
      <div className=" w-full h-72  flex place-content-center items-center  border-2 p-2 shadow-lg shadow-green-300  flex-col ">
        <form
          action=""
          onSubmit={handleSubmit(onsubmit)}
          className="  flex flex-col h-max w-max"
        >
          <input
            type="text"
            placeholder="enter occupation"
            {...register("occupation")}
            className="  pl-1  input1 focus:outline-none "
            // eslint-disable-next-line react/prop-types
            value={info.occupation}
            onChange={(event) => {
              setinfo({ ...info, occupation: event.target.value });
            }}
            // onChange={(event) => {
            //   setoccup(event.target.value);
            // }}
          />
          <label htmlFor="" className="label1">
            occupation
          </label>

          <input
            type="text"
            placeholder="enter city"
            {...register("city")}
            className="  pl-1 focus:outline-none input2"
            // eslint-disable-next-line react/prop-types
            value={info.city}
            onChange={(event) => {
              setinfo({ ...info, city: event.target.value });
            }}
          
          />
          <label htmlFor="" className="label2">
            city
          </label>

          <input
            type="text"
            placeholder="enter bil"
            {...register("bio")}
            className="  pl-1 focus:outline-none input3"
            // eslint-disable-next-line react/prop-types
            value={info.bio}
            onChange={(event) => {
              setinfo({ ...info, bio: event.target.value });
            }}
          />
          <label htmlFor="" className="label3">
            bio
          </label>

          <div className="  flex content-between  w-full">
            <button
              type="submit"
              className="bg-green-500 w-20 mx-auto text-white py-1 rounded-md "
              onClick={fonction}
            >
              continue
            </button>
            <button onClick={fonction2}>back</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Personaldetails;
