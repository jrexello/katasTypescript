export function reverseString (str: string): string {
    return str.split("").reverse().join("");
}

console.log(reverseString("1234567"))