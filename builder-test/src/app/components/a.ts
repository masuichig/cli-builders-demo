//import { ClassB } from "./b";
import { ClassB } from "@components/b";

export class ClassA {
  call() {
    console.log("Called ClassA::call()");
    const b = new ClassB();
    b.call();
  }
}
