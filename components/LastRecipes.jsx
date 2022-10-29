import { Card } from "./Card";

export default function LastRecipes({ data }) {
  return (
    <section>
      <ul className="md:flex md:max-w-6xl mx-auto flex-wrap">
        {data.map(({ img, date, title, subtitle, id }) => (
          <li className="md:w-2/4" key={id}>
            <Card
              date={date}
              title={title}
              subtitle={subtitle}
              img={img}
              id={id}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
