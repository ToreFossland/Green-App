
export default interface IUser {
  email: string,
  id: BigInteger,
  is_active: boolean,
  is_superuser: boolean,
  points: BigInteger
  company: string,
  first_name: string,
  last_name: string,
}