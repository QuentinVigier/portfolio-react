import { useState } from "react";
import Project from "../components/Project";
import Nav from "../components/Nav";

export default function Skills() {
    const listSkills = [
        {
            name: 'Symfony',
            image: "https://api.iconify.design/logos:symfony.svg?color=%23ffffff",
            desc: "Framework PHP for modern ans robust web applications",
        },
        {
            name: 'Adonis JS',
            image: "https://api.iconify.design/logos:adonisjs-icon.svg?color=%23ffffff",
            desc: "Node Fullstack Framework for modern and robust web applications",
        },
        {
            name: 'React',
            image: "https://api.iconify.design/logos:react.svg?color=%23ffffff",
            desc: "JS Library for building UI Web applications",
        },
        {
            name: 'DevOps',
            image: "https://api.iconify.design/logos:git-icon.svg?color=%23ffffff",
            desc: "CI/CD with GitHub Action, VPS mounting and administration",
        },
    ]
    const [choice, setChoice] = useState("All");
  return (
    <>
    <Nav />
    <section className="flex gap-5 px-5 py-10">
      <div className="w-1/3">
        <h1 className="mb-5 text-3xl font-bold text-white">Skillset</h1>
        <p className="leading-relaxed text-slate-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eius
          placeat alias deleniti nesciunt illo eligendi hic, esse sit ducimus
          excepturi, qui delectus dolorem? Quod eligendi cumque provident
          perferendis sit praesentium, veritatis, accusantium voluptate error
          odio culpa maiores ducimus. Quos natus veritatis distinctio
          consectetur officiis provident iure temporibus, quibusdam cupiditate!
        </p>
      </div>
        <ul className="grid w-2/3 grid-cols-2">
        {
        listSkills.map((skill) => (
            <li className="cursor-pointer" key={ skill.name } data-choice={ skill.name } onClick={() => setChoice(skill.name) }>
          <img src={ skill.image } alt={ skill.name + "logo" } width={ 32 } className="transition ease-in-out hover:scale-125"/>
          <h3 className="text-lg text-white font semibold">{ skill.name }</h3>
          <p className="text-slate-600">
            { skill.desc }
          </p>
        </li>
        ))
    }
        </ul>
      </section>
      <section>
      <Project prop={choice} />
      </section>
    </>
  );
}
