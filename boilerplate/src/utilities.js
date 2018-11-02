// named export
const add = (a, b) => a + b

const name = 'Vinnie'

//default export (maximum 1)
const square = (x) => x * x
// export default square


export { add, name, square as default}
