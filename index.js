var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};
<<<<<<< HEAD
handle["/home"] = requestHandlers.home;
=======
>>>>>>> 980dbf95ee6e4fe794169ff71ec89a710fe5b83f
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
