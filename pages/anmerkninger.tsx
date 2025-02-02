import { NextPage } from "next";
import Head from "next/head";
import {
  SoeleAnmerkning,
  TidsAnmerkning,
  TreningsAnmerkning,
} from "../components/Visualizations/helpers/Anmerkning";
import { getAnmerkninger } from "../lib/sheets";

const Marks: NextPage = ({ anmerkninger }: any) => {
  return (
    <>
      <Head>
        <title>Anmerkninger</title>
      </Head>
      <div>
        <table className="divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Navn
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tidsanmerkning
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Treningsanmerkning
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Søleanmerkning
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Totalt
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {anmerkninger.map((data: any) => (
              <tr key={data.data[0]}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {data.data[0]}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <TidsAnmerkning number={parseInt(data.data[1], 10)} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <TreningsAnmerkning number={parseInt(data.data[2], 10)} />
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <SoeleAnmerkning number={parseInt(data.data[3], 10)} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {parseInt(data.data[1], 10) +
                    parseInt(data.data[2], 10) +
                    parseInt(data.data[3], 10)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await getAnmerkninger();
  const anmerkninger = res.slice(1, res.length);
  return {
    props: { anmerkninger },
    revalidate: 1,
  };
}

export default Marks;
