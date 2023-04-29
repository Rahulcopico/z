import { Bard } from "googlebard";

let bot = new Bard(`YOUR_COOKIES`);
let response = await bot.ask("Hello?");
console.log(response);
