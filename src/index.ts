
import * as express from "express";
import * as swagger from "swagger-ui-express";

import * as swaggerDoc from "./swagger.json";
import { router } from "./routes";

//config app
const app = express();
app.use(express.json());
app.use(router);
app.use('/docs', swagger.serve, swagger.setup(swaggerDoc));

app.listen(3000, () => console.log("Its running in port 3000"));
