const app = require("./src/app");

const PORT = 7050;

app.listen(PORT, () => {
    console.log(`Estamos trabalhando na porta: ${PORT}`);
});