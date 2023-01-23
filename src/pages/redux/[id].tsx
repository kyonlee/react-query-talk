import { useEffect } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";

import { fetchPost } from "@/actions/post";
import {
  postSelector,
  postFailureSelector,
  postLoadingSelector,
  postSuccessSelector,
} from "@/reducers/postReducer";
import {
  createSuccessSelector,
  createLoadingSelector,
  createFailureSelector,
} from "@/reducers/loadingReducer";
import styles from "@/styles/Home.module.css";

export default function ReduxImplementation() {
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;

  const post = useSelector(postSelector);
  const loading = useSelector(postLoadingSelector);
  const success = useSelector(postSuccessSelector);
  const failure = useSelector(postFailureSelector);

  useEffect(() => {
    if (!id) {
      return;
    }

    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const renderPost = () => {
    if (loading) {
      return (
        <div className={styles.card}>
          <h2>Loading...</h2>
        </div>
      );
    }

    if (failure) {
      return (
        <div className={styles.card}>
          <h2>{post}</h2>
        </div>
      );
    }

    if (success) {
      return (
        <div className={styles.card}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
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
