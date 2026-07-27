import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Banglore",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/krishpinninti789");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("Hello unmount");
  }

  render() {
    if (!this.state.userInfo) {
      return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-lg font-semibold text-slate-900">Loading...</h1>
        </div>
      );
    }

    const { name, location, avatar_url, html_url } = this.state.userInfo;
    return (
      <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
          <img
            className="h-28 w-28 rounded-3xl object-cover ring-4 ring-slate-100"
            src={avatar_url}
            alt="profile"
          />

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
            <p className="text-sm text-slate-500">Location: {location}</p>
            <a
              className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              rel="noopener noreferrer"
              href={html_url}
              target="_blank"
            >
              Check my profile
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default UserClass;
