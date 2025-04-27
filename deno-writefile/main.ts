const text = 'jaca'
const file = ('data.txt')
await Deno.writeTextFile(file, text);
const data = await Deno.readTextFile(file)
console.log(data)