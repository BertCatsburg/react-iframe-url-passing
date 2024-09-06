export interface MyError extends Error {
    code?: number | undefined
    info?: string | undefined
}

export type LinkType = string

export interface PeopleInterface {
    name: string
    height: string
    mass: string
    hair_color: string
    skin_color: string
    birth_year: string
    eye_color: string
    gender: string
    homeworld: LinkType
    starshipts: LinkType[]
    url: LinkType
    vehicles: LinkType[]
}
