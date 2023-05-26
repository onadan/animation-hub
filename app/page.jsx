import { Heading, Card, GridDesign } from "@/components";

const data = [
  { title: "Miscellanous", link: "/misc" },
  { title: "Idan", link: "/idan" },
  { title: "", link: "" },
  
];

export default function Page() {
  return (
    <>
      <main className="px-5">
        <Heading title="👋" />

        <div className="my-2 w-full py-10">
          <div className="grid gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {/* Card Component */}
            {data.map((data, idx) => (
              <div key={idx}>
                <Card title={data.title} link={data.link} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Layout Design Element */}
      <GridDesign />
    </>
  );
}
