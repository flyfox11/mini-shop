import fetch from './http'

export async function getTestData () {
  let result = await fetch('yWKj3U86390d5207ac80b2bc92aed3e38d447955aba1c82?uri=test', null, 'get')
  return result.data[0].msg
}
