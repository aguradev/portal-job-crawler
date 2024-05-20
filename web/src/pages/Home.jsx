import Stat from "@/components/element/Stat";
import DefaultLayout from "@/components/layouts/Default";
import Hero from "@/components/ui/Hero";
import TableDataset from "@/components/ui/TableDataset";
import { useState } from "react";

export default function Home() {
  const [latestJobs, setLatestJob] = useState([
    {
      no: 1,
      company: "Google",
      position: "Software Engineer",
      references: "linkedin",
    },
    {
      no: 2,
      company: "Google",
      position: "Software Engineer",
      references: "linkedin",
    },
    {
      no: 3,
      company: "Google",
      position: "Software Engineer",
      references: "linkedin",
    },
    {
      no: 4,
      company: "Google",
      position: "Software Engineer",
      references: "linkedin",
    },
    {
      no: 5,
      company: "Google",
      position: "Software Engineer",
      references: "linkedin",
    },
  ]);

  return (
    <DefaultLayout>
      <Hero />

      <section className="grid grid-cols-2 gap-5 mb-14 lg:grid-cols-4">
        <Stat count={3000} category={`Web developer`} />
        <Stat count={200} category={`Data analysis`} />
        <Stat count={1500} category={`Devops`} />
        <Stat count={800} category={`Marketing`} />
      </section>

      <section className="mb-8 z-[99]">
        <TableDataset
          headers={["Company", "Position", "References", ""]}
          dataset={latestJobs}
        />
      </section>
    </DefaultLayout>
  );
}
