

const Navbar = (props) => {
  return (
  <>
  <nav className=" bg-green-400 h-14 flex place-content-center items-center w-full">
    <h1 className=" text-2xl font-semibold text-white capitalize"> {props.title} </h1>
  </nav>
  </>
  );
}

export default Navbar;

