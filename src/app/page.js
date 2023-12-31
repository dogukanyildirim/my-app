import "bulma/css/bulma.css";
import Course from "@/components/Course";

import Breakfast from "@/images/breakfast.jpg";
import Cherry from "@/images/cherry.jpg";
import Coffee from "@/images/coffee.jpg";
import Donut from "@/images/donut.jpg";
import Macaron from "@/images/macaron.jpg";
import Plumb from "@/images/plumb.jpg";

export default function Home() {
  return (
    <main className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Fruits Project</p>
        </div>
      </section>
      <div className="container">
      <section className="section">
        <div className="columns">
          <div className="column">
            <Course
              image={Breakfast}
              title="breakfast"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p"
            />
          </div>
          <div className="column">
            <Course
              image={Cherry}
              title="cherry"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p"
            />
          </div>
          <div className="column">
            <Course
              image={Coffee}
              title="coffee"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p"
            />
          </div>
          <div className="column">
            <Course
              image={Donut}
              title="donut"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p"
            />
          </div>
          <div className="column">
            <Course
              image={Macaron}
              title="macaron"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p"
            />
          </div>
          <div className="column">
            <Course
              image={Plumb}
              title="plumb"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop p"
            />
          </div>
        </div>
      </section>
      </div>
      
    </main>
  );
}
