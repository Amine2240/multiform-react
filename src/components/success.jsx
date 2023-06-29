// eslint-disable-next-line react/prop-types
const Success = ({fonction}) => {
  return (
    <div className="flex items-center">
      <h1 className=" font-bold text-2xl my-0 mx-auto w-52">fin avec succes</h1>
      <button onClick={fonction}>modifier</button>
    </div>
  );
};

export default Success;
