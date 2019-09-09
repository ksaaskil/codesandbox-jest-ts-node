import * as http from "http";

//create a server object:
http
  .createServer(function(_: any, res: any) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
