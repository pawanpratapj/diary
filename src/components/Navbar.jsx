import GearIcon from "../assets/GearIcon";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-3">
      <h1 className="text-xl font-medium">
        Note Diary
      </h1>
      <button>
        <GearIcon />
      </button>
    </nav>
  )
}

export default NavBar;