/* 当然少不了我们可爱的 ？ 啦~ */
function getDate():Date {
  return new Date()
}
function Jump(name: string, time :Date = new Date()): void {
  console.log(`${name} is jumpping at ${time.getHours()}`)
}

Jump('Simon')

interface IBeautiful {
  sex: string
  chest: number
}

function Dance(name: string, She?: IBeautiful): string {
  console.log(`${name} is Happy! Because her chest is ${She.chest}!`)
  return 'hahaha~'
}
Dance('Simon', { sex: 'women', chest: 18 })
Dance('Simon')/* 报错了 */