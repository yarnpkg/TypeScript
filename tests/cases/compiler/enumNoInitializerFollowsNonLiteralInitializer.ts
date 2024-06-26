// @isolatedModules: true
// @noTypesAndSymbols: true

// @filename: ./helpers.ts
export const foo = 2;

// @filename: ./bad.ts
import { foo } from "./helpers";
enum A {
    a = foo,
    b,
}

// @filename: ./good.ts
import { foo } from "./helpers";
enum A {
    a = foo,
    b = 3,
}
enum B {
    a = 1 + 1,
    b,
}
enum C {
    a = +2,
    b,
}
enum D {
    a = (2),
    b,
}
