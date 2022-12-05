// A mock function to mimic making an async request for data
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function fetchCount(amount = 1) {
  return await new Promise<{ data: number }>(resolve =>
    setTimeout(() => resolve({ data: amount }), 500)
  )
}
