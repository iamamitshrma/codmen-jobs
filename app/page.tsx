import Feed from "@/components/Feed";
import FeedPost from "@/components/FeedPost";

export default function Home() {
  return (
    <div className="">
      <FeedPost />
      {
        [...new Array(6)].map((item) => {
          return <Feed />
        })
      }
    </div>
  );
}
