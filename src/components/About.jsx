import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            About
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            This is about page with Users
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            A simple React app showing reusable components, hooks, and
            router-based pages.
          </p>
          <div className="mt-6">
            <User />
          </div>
          <div className="mt-6">
            <UserClass />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
