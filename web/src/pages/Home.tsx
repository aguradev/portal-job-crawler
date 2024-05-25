import Button from "@/components/element/Button";
import Stat from "@/components/element/Stat";
import DefaultLayout from "@/components/layouts/Default";
import Hero from "@/components/ui/Hero";
import TableDataset from "@/components/ui/TableDataset";
import { useState } from "react";

interface latestJobState {
  no: number;
  company: string;
  position: string;
  references: string;
}

export default function Home() {
  const [latestJobs, _] = useState<latestJobState[]>([
    {
      no: 1,
      company: "Google",
      position: "Software Engineer",
      references: "linkedin",
    },
    {
      no: 2,
      company: "Facebook",
      position: "Data Engineer",
      references: "linkedin",
    },
    {
      no: 3,
      company: "Tokopedia",
      position: "Backend Engineer Intern",
      references: "linkedin",
    },
    {
      no: 4,
      company: "Google",
      position: "Lead Manager",
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
        <Stat count={3000} category={`Software Engineer`} />
        <Stat count={200} category={`Data Engineer`} />
        <Stat count={1500} category={`Devops / Infra`} />
        <Stat count={800} category={`Intern Dev`} />
      </section>

      <section className="mb-8 z-[99]">
        <TableDataset
          headers={["Company", "Position", "References", ""]}
          dataset={latestJobs}
        />
        <div className="mt-12 text-center">
          <Button
            attribute={{ type: "button" }}
            colorType={`primary`}
            classBtn={`font-semibold px-8`}
          >
            More
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
