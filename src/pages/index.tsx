import HomeLayout from "@/components/layouts/HomeLayout";
import HomeTimeline from "@/components/ui/HomeTimeline";
import HomeUniverse from "@/components/ui/HomeUniverse";
import RelatedPosts from "@/components/ui/RelatedPosts";

export default function Home() {
  return (
    <HomeLayout>
      <div className="container mx-auto min-h-screen w-full max-w-full">
        <div className="container relative min-h-screen w-full items-center justify-center py-8 px-2">
          <div className="fixed w-75">
            <HomeUniverse />
          </div>
          <div className="mx-auto w-150 mr-120 ml-80">
            <HomeTimeline />
          </div>
          <div className="fixed w-110 right-4 max-h-150 overflow-auto no-scrollbar px-4 top-25">
            <RelatedPosts />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
