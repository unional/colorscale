import test from 'ava'

import { createColors } from './createColors'

test('match colormap output', t => {
  const actual = createColors([0, 0, 255], [0, 255, 128], 72)

  t.deepEqual(actual, [[0, 0, 255, 1],
  [0, 4, 253, 1],
  [0, 7, 251, 1],
  [0, 11, 250, 1],
  [0, 14, 248, 1],
  [0, 18, 246, 1],
  [0, 22, 244, 1],
  [0, 25, 242, 1],
  [0, 29, 241, 1],
  [0, 32, 239, 1],
  [0, 36, 237, 1],
  [0, 40, 235, 1],
  [0, 43, 234, 1],
  [0, 47, 232, 1],
  [0, 50, 230, 1],
  [0, 54, 228, 1],
  [0, 57, 226, 1],
  [0, 61, 225, 1],
  [0, 65, 223, 1],
  [0, 68, 221, 1],
  [0, 72, 219, 1],
  [0, 75, 217, 1],
  [0, 79, 216, 1],
  [0, 83, 214, 1],
  [0, 86, 212, 1],
  [0, 90, 210, 1],
  [0, 93, 208, 1],
  [0, 97, 207, 1],
  [0, 101, 205, 1],
  [0, 104, 203, 1],
  [0, 108, 201, 1],
  [0, 111, 200, 1],
  [0, 115, 198, 1],
  [0, 119, 196, 1],
  [0, 122, 194, 1],
  [0, 126, 192, 1],
  [0, 129, 191, 1],
  [0, 133, 189, 1],
  [0, 136, 187, 1],
  [0, 140, 185, 1],
  [0, 144, 183, 1],
  [0, 147, 182, 1],
  [0, 151, 180, 1],
  [0, 154, 178, 1],
  [0, 158, 176, 1],
  [0, 162, 175, 1],
  [0, 165, 173, 1],
  [0, 169, 171, 1],
  [0, 172, 169, 1],
  [0, 176, 167, 1],
  [0, 180, 166, 1],
  [0, 183, 164, 1],
  [0, 187, 162, 1],
  [0, 190, 160, 1],
  [0, 194, 158, 1],
  [0, 198, 157, 1],
  [0, 201, 155, 1],
  [0, 205, 153, 1],
  [0, 208, 151, 1],
  [0, 212, 149, 1],
  [0, 215, 148, 1],
  [0, 219, 146, 1],
  [0, 223, 144, 1],
  [0, 226, 142, 1],
  [0, 230, 141, 1],
  [0, 233, 139, 1],
  [0, 237, 137, 1],
  [0, 241, 135, 1],
  [0, 244, 133, 1],
  [0, 248, 132, 1],
  [0, 251, 130, 1],
  [0, 255, 128, 1]])
})

test('Uses alpha in from/to', t => {
  const actual = createColors([0, 0, 0, .2], [1, 1, 1, .8], 2)
  t.deepEqual(actual, [[0, 0, 0, .2], [1, 1, 1, .8]])
})

test('alpha in from but not in to, will use alpha in from', t => {
  const actual = createColors([0, 0, 0, .2], [1, 1, 1], 2)
  t.deepEqual(actual, [[0, 0, 0, .2], [1, 1, 1, .2]])
})

test('alpha in `to` but not in `from`, will use alpha in `to`', t => {
  const actual = createColors([0, 0, 0], [1, 1, 1, .5], 2)
  t.deepEqual(actual, [[0, 0, 0, .5], [1, 1, 1, .5]])
})


test('match actual colors', t => {
  let actual = createColors([150, 0, 90], [0, 0, 200], 72, [0, 1])

  t.deepEqual(actual, [[150, 0, 90, 0],
  [148, 0, 92, 0.014084507042253521],
  [146, 0, 93, 0.028169014084507043],
  [144, 0, 95, 0.04225352112676056],
  [142, 0, 96, 0.056338028169014086],
  [139, 0, 98, 0.07042253521126761],
  [137, 0, 99, 0.08450704225352113],
  [135, 0, 101, 0.09859154929577466],
  [133, 0, 102, 0.11267605633802817],
  [131, 0, 104, 0.1267605633802817],
  [129, 0, 105, 0.14084507042253522],
  [127, 0, 107, 0.15492957746478875],
  [125, 0, 109, 0.16901408450704225],
  [123, 0, 110, 0.18309859154929578],
  [120, 0, 112, 0.1971830985915493],
  [118, 0, 113, 0.2112676056338028],
  [116, 0, 115, 0.22535211267605634],
  [114, 0, 116, 0.23943661971830987],
  [112, 0, 118, 0.2535211267605634],
  [110, 0, 119, 0.26760563380281693],
  [108, 0, 121, 0.28169014084507044],
  [106, 0, 123, 0.29577464788732394],
  [104, 0, 124, 0.3098591549295775],
  [101, 0, 126, 0.323943661971831],
  [99, 0, 127, 0.3380281690140845],
  [97, 0, 129, 0.35211267605633806],
  [95, 0, 130, 0.36619718309859156],
  [93, 0, 132, 0.38028169014084506],
  [91, 0, 133, 0.3943661971830986],
  [89, 0, 135, 0.4084507042253521],
  [87, 0, 136, 0.4225352112676056],
  [85, 0, 138, 0.4366197183098592],
  [82, 0, 140, 0.4507042253521127],
  [80, 0, 141, 0.4647887323943662],
  [78, 0, 143, 0.47887323943661975],
  [76, 0, 144, 0.49295774647887325],
  [74, 0, 146, 0.5070422535211268],
  [72, 0, 147, 0.5211267605633803],
  [70, 0, 149, 0.5352112676056339],
  [68, 0, 150, 0.5492957746478874],
  [65, 0, 152, 0.5633802816901409],
  [63, 0, 154, 0.5774647887323944],
  [61, 0, 155, 0.5915492957746479],
  [59, 0, 157, 0.6056338028169014],
  [57, 0, 158, 0.619718309859155],
  [55, 0, 160, 0.6338028169014085],
  [53, 0, 161, 0.647887323943662],
  [51, 0, 163, 0.6619718309859155],
  [49, 0, 164, 0.676056338028169],
  [46, 0, 166, 0.6901408450704225],
  [44, 0, 167, 0.7042253521126761],
  [42, 0, 169, 0.7183098591549296],
  [40, 0, 171, 0.7323943661971831],
  [38, 0, 172, 0.7464788732394366],
  [36, 0, 174, 0.7605633802816901],
  [34, 0, 175, 0.7746478873239436],
  [32, 0, 177, 0.7887323943661972],
  [30, 0, 178, 0.8028169014084507],
  [27, 0, 180, 0.8169014084507042],
  [25, 0, 181, 0.8309859154929577],
  [23, 0, 183, 0.8450704225352113],
  [21, 0, 185, 0.8591549295774648],
  [19, 0, 186, 0.8732394366197184],
  [17, 0, 188, 0.8873239436619719],
  [15, 0, 189, 0.9014084507042254],
  [13, 0, 191, 0.9154929577464789],
  [11, 0, 192, 0.9295774647887324],
  [8, 0, 194, 0.943661971830986],
  [6, 0, 195, 0.9577464788732395],
  [4, 0, 197, 0.971830985915493],
  [2, 0, 198, 0.9859154929577465],
  [0, 0, 200, 1]])
  actual = createColors([150, 0, 90], [0, 0, 200], 72)
  t.deepEqual(actual, [[150, 0, 90, 1], [148, 0, 92, 1], [146, 0, 93, 1], [144, 0, 95, 1], [142, 0, 96, 1], [139, 0, 98, 1], [137, 0, 99, 1], [135, 0, 101, 1], [133, 0, 102, 1], [131, 0, 104, 1], [129, 0, 105, 1], [127, 0, 107, 1], [125, 0, 109, 1], [123, 0, 110, 1], [120, 0, 112, 1], [118, 0, 113, 1], [116, 0, 115, 1], [114, 0, 116, 1], [112, 0, 118, 1], [110, 0, 119, 1], [108, 0, 121, 1], [106, 0, 123, 1], [104, 0, 124, 1], [101, 0, 126, 1], [99, 0, 127, 1], [97, 0, 129, 1], [95, 0, 130, 1], [93, 0, 132, 1], [91, 0, 133, 1], [89, 0, 135, 1], [87, 0, 136, 1], [85, 0, 138, 1], [82, 0, 140, 1], [80, 0, 141, 1], [78, 0, 143, 1], [76, 0, 144, 1], [74, 0, 146, 1], [72, 0, 147, 1], [70, 0, 149, 1], [68, 0, 150, 1], [65, 0, 152, 1], [63, 0, 154, 1], [61, 0, 155, 1], [59, 0, 157, 1], [57, 0, 158, 1], [55, 0, 160, 1], [53, 0, 161, 1], [51, 0, 163, 1], [49, 0, 164, 1], [46, 0, 166, 1], [44, 0, 167, 1], [42, 0, 169, 1], [40, 0, 171, 1], [38, 0, 172, 1], [36, 0, 174, 1], [34, 0, 175, 1], [32, 0, 177, 1], [30, 0, 178, 1], [27, 0, 180, 1], [25, 0, 181, 1], [23, 0, 183, 1], [21, 0, 185, 1], [19, 0, 186, 1], [17, 0, 188, 1], [15, 0, 189, 1], [13, 0, 191, 1], [11, 0, 192, 1], [8, 0, 194, 1], [6, 0, 195, 1], [4, 0, 197, 1], [2, 0, 198, 1], [0, 0, 200, 1]])
})
