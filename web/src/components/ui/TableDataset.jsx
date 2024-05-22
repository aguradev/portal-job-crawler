import PropsType from "prop-types";
import Button from "../element/Button";
import { Link } from "react-router-dom";

function ColumnTh({ children }) {
  return (
    <th className="p-6 font-bold text-left whitespace-nowrap font-redditSans">
      {children}
    </th>
  );
}

function ColumnTd({ children }) {
  return <td className="p-8 font-medium whitespace-nowrap">{children}</td>;
}

export default function TableDataset({ headers, dataset }) {
  return (
    <div className="overflow-x-hidden shadow-lg shadow-slate-300/80 dark:shadow-zinc-950/40">
      <table className="min-w-full overflow-hidden border-collapse table-auto rounded-xl">
        <thead className="shadow-lg shadow-slate-400/30 dark:shadow-zinc-950/40 dark:bg-zinc-950/30 bg-slate-100/50">
          <tr>
            {headers.map((header, i) => (
              <ColumnTh key={i}>{header}</ColumnTh>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y rounded-lg divide-gray-300/30 bg-slate-300/20 dark:divide-neutral-800/30 dark:bg-zinc-800/10">
          {dataset.map(
            ({
              no: no,
              company: company,
              position: position,
              references: references,
            }) => (
              <tr
                key={no}
                className="hover:shadow-lg dark:hover:shadow-zinc-950/50 dark:hover:bg-zinc-950/30"
              >
                <ColumnTd>{company}</ColumnTd>
                <ColumnTd>{position}</ColumnTd>
                <ColumnTd>{references}</ColumnTd>
                <ColumnTd>
                  <div className="text-center">
                    <Link
                      to={`/`}
                      className="px-8 py-4 font-semibold rounded-lg bg-slate-300/40 dark:bg-zinc-950/30"
                    >
                      Apply
                    </Link>
                  </div>
                </ColumnTd>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

TableDataset.propTypes = {
  headers: PropsType.array,
  dataset: PropsType.arrayOf(PropsType.object),
};
