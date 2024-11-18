interface Dog {
  kind: string;
  weight: number;
}

let dog1: Dog;
let dog2: Dog;

dog1 = {
  kind: "mammal",
  weight: 10
};

dog2 = {
  kind: true,
  weight: 10
};

function baby(dog1: Dog, dog2: Dog): Dog {
  return {
    kind: dog1.kind,
    weight: (dog1.weight + dog2.weight) / 4
  } as Dog;
}
