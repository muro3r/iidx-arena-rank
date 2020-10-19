import { findMyRank, List } from '@/utils/arenaClass'
import testData from './testData.json'

const findMyRankFactory = (id: string | undefined = undefined) =>
  findMyRank((testData as unknown) as List[], id)

describe('arenaClass.ts', () => {
  it('without id', () => {
    expect(findMyRankFactory()).toBe(undefined)
  })

  it('when not found data', () => {
    expect(findMyRankFactory('0000-0000')).toBe(undefined)
  })

  describe('when found data', () => {
    it('rank 1 in area1', () => {
      const expected = { area: 'area1', id: '0001-0001', prefRank: 1, rank: 1 }

      expect(findMyRankFactory('0001-0001')).toStrictEqual(expected)
    })

    it('rank 1 in area2', () => {
      const expected = { area: 'area2', id: '0002-0001', prefRank: 1, rank: 3 }

      expect(findMyRankFactory('0002-0001')).toStrictEqual(expected)
    })
  })
})
