const result = people.map(({ name, address: { city, street: { name: streetName } } }) =>
  `${name} lives in ${city} on ${streetName}`
);
