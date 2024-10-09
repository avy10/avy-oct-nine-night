import { FC } from "react";

import Container from "@mui/material/Container";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Home: FC = () => {
  return (
    <Container
      maxWidth="lg"
      className="app"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Facebook feed</h1>
      <p>
        {" "}
        <ArrowDropDownIcon
          sx={{
            color: "#09436d",
            border: "1px solid red",
          }}
        />
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum
        aliquam ratione debitis eveniet sunt quaerat, necessitatibus, eos
        nostrum incidunt id atque ad sit suscipit maiores veniam culpa dicta
        omnis deleniti minus facilis iusto optio ipsam repellat. Similique
        suscipit rerum eveniet deserunt aliquid. Nihil quibusdam, illum
        consequatur error, reprehenderit harum inventore quas obcaecati ex
        perspiciatis accusantium facilis sequi. Omnis magnam sint obcaecati
        distinctio, corrupti odit tempora ab quos cum ipsa quis, sed consectetur
        vero. Officia tenetur vel beatae incidunt placeat qui suscipit animi
        sunt possimus? Eius, quia ipsa rem officia commodi natus accusamus
        soluta nulla quibusdam incidunt culpa aliquam doloribus quas consectetur
        est eum suscipit numquam facere fugiat aperiam? Fugiat nobis eum
        expedita architecto modi eos veritatis totam sit quidem aut consequatur
        voluptate quod, excepturi et inventore, est recusandae! Perferendis modi
        harum animi repellendus culpa. Laboriosam minus placeat at officia,
        ducimus ratione mollitia fugit temporibus autem beatae esse tempore?
        Accusantium dolorem suscipit incidunt itaque vel, consequatur fugiat
        quis id harum, assumenda doloremque unde eius similique alias. Dolorum
        vitae explicabo molestiae recusandae eligendi odio, atque magnam
        adipisci porro voluptatem fugiat asperiores blanditiis quod ut? Ipsum
        natus amet rerum perferendis voluptate dolorem molestiae error quos
        veniam necessitatibus eveniet reiciendis, aspernatur rem mollitia, unde
        dicta vero quod quae hic quia nobis dolores odit? Dolor ducimus eligendi
        optio quaerat voluptates reprehenderit delectus officia dolorum nostrum
        repudiandae facilis dolores a unde distinctio totam eveniet sint,
        necessitatibus sequi aliquam similique commodi quam ipsa esse. Velit
        corporis odit delectus nam fugit at praesentium in repudiandae minus
        voluptatibus!
      </p>
    </Container>
  );
};

export default Home;
