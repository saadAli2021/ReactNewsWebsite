import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();

  if (isLoading)
    return (
      <div className="loadingdiv">
        <span className="loader"></span>
      </div>
    );
  return (
    <section className="stories">
      {hits.map((story) => {
        const { objectID, story_title, num_comments, url, points, author } =
          story;

        let text =
          story._highlightResult.comment_text &&
          story._highlightResult.comment_text.value
            ? story._highlightResult.comment_text.value
            : "No comments";

        text = text.replace(/<[^>]+>/g, "");

        // Check if story_title is not empty before rendering the article
        if (story_title) {
          return (
            <article key={objectID} className="story">
              <h3>{story_title}</h3>
              <p className="description">{text.substr(0, 150)}</p>
              <div className="stats">
                <p className="comments">{num_comments}</p>
                <p className="points">{points} </p>
                <p className="author">@{author}</p>
              </div>
              <div className="actionBtns">
                <button className="btn">Remove</button>
                <button className="btn">Details</button>
              </div>
            </article>
          );
        } else {
          return null; // Skip rendering the article if story_title is empty
        }
      })}
    </section>
  );
};

export default Stories;
