// Generator
function *foo() {
  yield 1;
  console.log(yield);
  return 6;
}

// Use generator
var a = foo(5); 
a.next(3)
a.next()
a.throw()
a.return()

// Use generator as iterator
for (let v of foo()) {
  console.log(v);
}
