import React from "react";
import Link from "next/link";
import { parseISO, format } from "date-fns";

export default function PostList({ posts }) {
  return (
    <div className="postlist">
      {posts.map(post => (
        <Link href="/b/[slug]" as={`/b/${post.slug}`}>
          <a className="postlist-item-link">
            <div className="row postlist-item" key={post.slug}>
              <div className="col-sm postlist-first-column">
                <time className="postlist-date">
                  {format(parseISO(post.date), "yyyy MMM, d")}
                </time>
              </div>
              <div className="col-sm">
                <h4 className="post-list-title">
                <div >
                  <span dangerouslySetInnerHTML={{ __html: post.title }} />
                </div>
                </h4>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
