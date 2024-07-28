// import { handler } from "../src/services/hello";
// import { APIGatewayProxyEvent, Context } from "aws-lambda";

// // Mock event and context
// const event: APIGatewayProxyEvent = {} as any;
// const context: Context = {} as any;

// handler(event, context).then(response => {
//     console.log(response);
// }).catch(error => {
//     console.error(error);
// });

import handler from "../src/services/hello";


handler({} as any, {} as any);
