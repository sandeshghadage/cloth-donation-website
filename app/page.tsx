import FlowByteButton from "./ui/button";
import FlowByteCarousel from "./ui/carousel";
import FlowByteTimeline from "./ui/timeLIne";
import FlowByteModal from "./ui/modal";
import FlowByteDropdown from "./ui/dropdown";
import FlowByteNewsletter from "./ui/newsletter";
import Link from "next/link";

export default function MyPage() {
  return (
    <>
      <FlowByteCarousel />
      <div className="flex w-full justify-center gap-3 p-3">
        {/* <FlowByteDropdown /> */}
        <Link href="/form">Schedule Pickup</Link>
      </div>
      <div className="w-2/4 ml-auto mr-auto">
        <FlowByteTimeline />
      </div>
      <FlowByteNewsletter />
    </>
  );
}
