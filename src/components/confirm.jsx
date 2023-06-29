import Navbar from "./navbar";

// eslint-disable-next-line react/prop-types
const Confirm = ({ info, fonction, fonction2 }) => {
  return (
    <>
      <Navbar title="confirm" />
      <div className=" border-2 p-2 shadow-lg shadow-green-300 flex flex-col items-center">
        <h2>first name </h2>

        <p className=" text-green-400 text-2xl"> {info.firstname} </p>
        <h2>last name </h2>

        <p className=" text-green-400 text-2xl"> {info.lastname} </p>
        <h2>email </h2>
        <p className=" text-green-400 text-2xl"> {info.email} </p>
        <h2>occupation </h2>
        <p className=" text-green-400 text-2xl"> {info.occupation} </p>
        <h2>city </h2>
        <p className=" text-green-400 text-2xl"> {info.city} </p>
        <h2>bio</h2>
        <p className=" text-green-400 text-2xl"> {info.bio} </p>

        <div className="  flex content-between  w-full">
          <button
            className="bg-green-500 w-20 mx-auto text-white py-1 rounded-md "
            onClick={fonction}
          >
            submit
          </button>
          <button onClick={fonction2}>back</button>
        </div>
      </div>
    </>
  );
};

export default Confirm;
