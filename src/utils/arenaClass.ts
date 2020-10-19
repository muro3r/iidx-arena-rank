export interface ArenaClass {
  list: List[]
  play_style: number
  status: number
}

export interface List {
  area: string
  arena_class: string
  contine: string
  grade_dp: string
  grade_sp: string
  id: string
  name: string
  rank: number | string
  rival: string
  update_date: string
  prefRank?: number
}

export const findMyRank = (data: List[], id?: string): List | undefined => {
  if (!id) return

  const item = data.find((element) => element.id === id)
  if (!item) return

  const prefList = data.filter((element) => element.area === item.area)
  const prefRank = prefList.findIndex((element) => element.id === item.id)

  return {
    ...item,
    prefRank: prefRank + 1,
  }
}
