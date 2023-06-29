import Navbar from "./navbar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./userdetails.css";

// import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Userdetails = ({info, setinfo, fonction} ) => {
  const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    emailadress: yup.string().email().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onsubmit = (data) => {
    console.log(data);
  };

  //  const [first, setfirst] = useState('')
  // const [last , setlast ]= useState('')
  // const   [email,setemail] = useState('');
  return (
    <>
      <Navbar title="user details" />
      <div className=" w-full h-72  flex place-content-center items-center border-2 p-2 shadow-lg shadow-green-300  flex-col ">
        <form
          action=""
          onSubmit={handleSubmit(onsubmit)}
          className="  flex flex-col h-max w-max"
        >
          <input
            type="text"
            placeholder="enter first name"
            {...register("firstname")}
            className="  pl-1  input1 focus:outline-none border-b-2 "
            // eslint-disable-next-line react/prop-types
            value={info.firstname}
            onChange={(event)=>{
                   setinfo({...info,firstname:event.target.value})
            }}
            
          />
          <label htmlFor="" className="label1">
            first name
          </label>
          <p>{errors.lastname?.message} </p>

          <input
            type="text"
            placeholder="enter last name"
            {...register("lastname")}
            className="pl-1 focus:outline-none input2 border-b-2"
            // eslint-disable-next-line react/prop-types
            value={info.lastname}
            onChange={(event) => {
              setinfo({...info,lastname:event.target.value})

            }}
          />
          <label htmlFor="" className="label2">
            last name
          </label>

          <input
            type="email"
            placeholder="enter email adress"
            {...register("emailadress")}
            className="  pl-1 focus:outline-none input3 border-b-2"
            // eslint-disable-next-line react/prop-types
            value={info.email}
            onChange={(event) => {
              setinfo({...info,email:event.target.value})

            }}
          />
          <label htmlFor="" className="label3">
            email
          </label>

          <button
            type="submit"
            className="bg-green-500 w-20 mx-auto text-white py-1 rounded-md "
            onClick={fonction}
            
          >
            continue
          </button>
        </form>
      </div>
    </>
  );
};

export default Userdetails;
