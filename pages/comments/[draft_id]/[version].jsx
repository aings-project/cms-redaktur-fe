import { useRouter } from "next/router";
import CommentsLayout from "../../../components/comments/CommentsLayout";

export default function Comments() {
  const router = useRouter();
  const { draft_id, version } = router.query;

  return <CommentsLayout />;
}
