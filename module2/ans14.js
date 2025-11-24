const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};
