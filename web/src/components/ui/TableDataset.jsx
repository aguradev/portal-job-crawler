import PropsType from "prop-types";
import Button from "../element/Button";
import { Link } from "react-router-dom";

function ColumnTh({ children }) {
  return (
    <th className="p-6 font-medium text-left whitespace-nowrap font-redditSans">
      {children}
    </th>
  );
}

function ColumnTd({ children }) {
  return <td className="p-8 whitespace-nowrap">{children}</td>;
}

export default function TableDataset({ headers, dataset }) {
  return (
    <div className="overflow-x-hidden shadow-md shadow-slate-200/80 dark:shadow-zinc-950/40">
      <table className="min-w-full overflow-hidden border-collapse table-auto rounded-xl">
        <thead className="shadow-lg shadow-slate-400/30 dark:shadow-zinc-950/40 dark:bg-zinc-950/30 bg-slate-100/50">
          <tr>
            {headers.map((header, i) => (
              <ColumnTh key={i}>{header}</ColumnTh>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-300 rounded-lg bg-slate-100/10 dark:divide-neutral-800/30 dark:bg-zinc-800/10">
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
                      className="px-8 py-4 rounded-lg bg-slate-100 dark:bg-zinc-950/30"
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
