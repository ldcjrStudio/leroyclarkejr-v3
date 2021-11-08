import Link from "next/link";

const BlogListItem = ({ post }) => {
  const lastDate = new Date(post.last_edited_time).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  const ogDate = new Date(post.created_time).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <li className="rounded-lg bg-lightGrey p-4" key={post.id}>
      <div className="title">
        <h3>{post.properties.Name.title}</h3>
      </div>

      <div className="tags">
        <Link href={`/blog/${post.id}`}>
          <a> Read post →</a>
        </Link>
      </div>
      <p>post</p>

      <div className="date">{lastDate}</div>
    </li>
  );
};

export default BlogListItem;
