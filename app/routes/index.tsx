import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <button onClick={() => setCount(count + 1)}>
          Click this button to update the count. Now change this text, you will
          see the new text without browser reload while the value of count is
          preserved. Count is :{count}
        </button>
      </ul>
    </div>
  );
}
