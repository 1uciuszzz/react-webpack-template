import React from "react";
import "./dist.css";
export default function App() {
  return (
    <div className="h-screen grid place-items-center">
      <article className="prose">
        <h1>
          <button className="btn btn-primary">daisyui</button>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quidem
          repellat, beatae delectus nam deleniti mollitia sed qui. Obcaecati
          dolorem ipsam facilis laudantium et! Modi corporis distinctio at dolor
          consequatur!
        </p>
        <blockquote className="line-clamp-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis iusto,
          fugiat esse ipsam sapiente omnis, reiciendis fuga quisquam tempora
          architecto, quaerat quibusdam earum hic facilis! Magni laudantium
          maxime ad sit.
        </blockquote>
      </article>
    </div>
  );
}
