export default function Scoreboard({
  data,
  noScores,
}: {
  data: any;
  noScores: boolean;
}) {
  var score = 0;
  var totalPoints = 0;
  return (
    <div className="flex flex-col print:w-screen print:w-full">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 print:m-0">
        <div className="py-2 align-middle inline-block sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sangnummer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Tittel
                  </th>
                  {noScores ? (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Skriv dine poeng her
                    </th>
                  ) : (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Poeng
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((datapoint: any, idx: number) => (
                  <tr key={datapoint}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {idx}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {datapoint.Song}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {Object.values(datapoint).map((points: any) => {
                        if (points === parseInt(points, 10)) {
                          score = score + points;
                          totalPoints = totalPoints + 10;
                        } else {
                          totalPoints = 0;
                          score = 0;
                        }
                      })}
                      {!noScores
                        ? `${Math.round(
                            ((score - 1) / totalPoints) * 100
                          )} / 100`
                        : "             "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
