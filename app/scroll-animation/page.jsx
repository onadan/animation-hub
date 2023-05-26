import Heading from "@/components/heading";
import Idan from "./animations/idan";

export default function Page() {
  return (
    <>
      <div className="px-4">
        <Heading title="Scroll animations" />

        <Idan />
      </div>
    </>
  );
}