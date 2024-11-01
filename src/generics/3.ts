function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const merged = merge({ name: 'Olha' }, { age: 28 });
merged.name;
