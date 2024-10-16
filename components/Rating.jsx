export default function Rating() {
  const predmets = ["Політика", "React", "Arduino", "ШІ"];
  const students = [
    {
      name: "Бичак Ксенія",
      points: [79, 86, 93, 88],
    },
    {
      name: "Близнюк Віталій",
      points: [80, 96, 94, 79],
    },
    {
      name: "Дешков Максим",
      points: [77, 69, 94, 74],
    },
    {
      name: "Чернець Микита",
      points: [80, 90, 91, 83],
    },
  ];

  let avgsum = [];
  students.forEach((s) => {
    let sum = 0;
    s.points.forEach((p) => (sum += p));
    avgsum.push(sum / students.length);
  });

  let sum = 0;
  avgsum.forEach((s) => {
    sum += s;
  });
  let allAvgSum = sum / avgsum.length;

  return (
    <div>
      <h2>Рейтинг</h2>
      <table>
        <tr>
          <th></th>
          {predmets.map((obj) => (
            <th>{obj}</th>
          ))}
          <th>Середній бал</th>
        </tr>
        {students.map((s) => (
          <tr>
            <th>{s.name}</th>
            {s.points.map((p) => (
              <td>{p}</td>
            ))}
            <td>{avgsum[students.indexOf(s)]}</td>
          </tr>
        ))}
      </table>
      <p>
        <b>Середній бал групи:</b>
        {allAvgSum}
      </p>
    </div>
  );
}
