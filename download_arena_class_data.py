import json
from typing import List, Dict

import requests
from requests.models import Response


class ListElement:
    area: str
    arena_class: str
    contine: int
    grade_dp: str
    grade_sp: str
    id: str
    name: str
    rank: int
    rival: str
    update_date: str

    def __init__(self, data):
        for key in data:
            setattr(self, key, data[key])


class ArenaClass:
    list: List[ListElement]
    play_style: int
    status: int

    def __init__(self, response: Dict[str, str]) -> None:
        for key in response:
            setattr(self, key, response[key])


URL = 'https://p.eagate.573.jp/game/2dx/27/ranking/json/arena_class.html'

if __name__ == '__main__':
    for play_style, play_style_str in enumerate(['SP', 'DP']):
        page = 0

        datum: List[ListElement] = []

        print(f'start: {play_style_str}.json')

        # 取得上限件数が 18_000 件までで，超えても末尾の件数を返し続けるだけなので処理終了
        while page < 6:
            print(f'start: {play_style_str} - {page}')
            res: Response = requests.get(
                URL,
                params={
                    "grade_id": 0,
                    "play_style": play_style,
                    "page": page,
                    "limit": 3000,
                })

            arena_class = ArenaClass(res.json())

            if arena_class.status == -1:
                break

            datum += arena_class.list

            page += 1

        print(f'write: {play_style_str}.json')
        with open(f'src/assets/{play_style_str}.json', 'w', encoding='utf-8') as f:
            f.write(json.dumps(datum, ensure_ascii=False, indent=2))
