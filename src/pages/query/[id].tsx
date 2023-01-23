import { useRouter } from "next/router";
import axios from "axios";

import styles from "@/styles/Home.module.css";
import { useQuery } from "react-query";

const fetchPost = (id) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(({ data }) => data);
};

export default function ReactQueryImplementation() {
  const router = useRouter();
  const id = typeof router.query?.id === "string" ? router.query.id : "";

  const { isSuccess, data, isLoading, isError } = useQuery(
    ["postData", id],
    () => fetchPost(id),
    {
      enabled: id.length > 0,
    }
  );

  const renderPost = () => {
    if (isLoading) {
      return (
        <div className={styles.card}>
          <h2>Loading...</h2>
        </div>
      );
    }

    if (isError) {
      return (
        <div className={styles.card}>
          <h2>We couldn't find post: {id}</h2>
        </div>
      );
    }

    if (isSuccess) {
      return (
        <div className={styles.card}>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      );
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.grid}>{renderPost()}</div>
    </main>
  );
}
