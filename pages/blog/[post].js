import React from "react";

function post() {
  return (
    <div>
      <p>post</p>
    </div>
  );
}

export default post;

// export const getStaticProps = async () => {
//   const database = await getDatabase(databaseId);
//   console.log(database[0]);
//   return {
//     props: {
//       posts: database,
//     },
//     revalidate: 1,
//   };
// };
