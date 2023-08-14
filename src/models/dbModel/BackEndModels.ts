import { StaticImageData } from "next/image"

export interface IUser {
  id: number
  userName: string
  email: string
  avatar?: string | StaticImageData
}