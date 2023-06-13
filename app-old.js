const http = require('http');

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'application/json'
  // });

  // const person = {
  //   id: 1,
  //   name: "Daniel",
  //   age: 39
  // }

  // res.write(JSON.stringify(person));

  res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
  res.writeHead(200, {
    'Content-Type': 'application/csv'
  });

  res.write("id, nombre\n");
  res.write("1, Daniel\n");
  res.write("2, Maria\n");
  res.write("3, Victoria\n");

  res.end();
});

server.listen(8080);

console.log("Listening port ", 8080);
