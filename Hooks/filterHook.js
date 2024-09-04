
export function useFilter(data ,myQuery, region,) {
  return data.filter(
    (country) =>
      country.name.common.toLowerCase().includes(myQuery) &&
      country.region.includes(region)
  );
}
