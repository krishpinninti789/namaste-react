import { useContext, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../contexts/UserContext";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);

  const items = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="flex items-center gap-3">
          <span
            className={`hidden rounded-full px-3 py-1 text-xs font-semibold sm:inline-flex ${
              onlineStatus
                ? "bg-emerald-100 text-emerald-700"
                : "bg-rose-100 text-rose-700"
            }`}
          >
            {onlineStatus ? "Online" : "Offline"}
          </span>

          <ul className="flex items-center gap-1 text-sm font-medium text-slate-600">
            <li>
              <Link
                className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                to="/"
              >
                LoggedIn UserName : {userName}
              </Link>
            </li>
            <li>
              <Link
                className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900"
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="hidden rounded-full px-4 py-2 text-slate-600 md:block">
              Contact
            </li>
            <li className="flex flex-row rounded-full px-4 py-2 text-slate-600 relative">
              <ShoppingCart className="relative" />{" "}
              <span className="absolute bg-blue-950 text-white rounded-full py-1 px-2 right-2 -top-2">
                {items.length}
              </span>
            </li>
            <li>
              <button
                className="rounded-full bg-slate-900 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-slate-700"
                onClick={() =>
                  btnName === "login"
                    ? setBtnName("logout")
                    : setBtnName("login")
                }
              >
                {btnName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
