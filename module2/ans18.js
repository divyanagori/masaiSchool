//a
// 20
// ReferenceError: x is not defined



//b
console.log(profile.user?.details?.email);


//c

const user = {
  name: "John",
  // profile is missing
};

// Without optional chaining → ❌ runtime error
// console.log(user.profile.details.email);  // ERROR

// With optional chaining → ✅ safely returns undefined
console.log(user.profile?.details?.email);