const defaultFormat = /(\d{1,4})/g

const cards = [
  {
    type: 'maestro',
    patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
    format: defaultFormat,
    length: [12, 13, 14, 15, 16, 17, 18, 19],
    cvcLength: [3],
    luhn: true,
    number: ''
  }, {
    type: 'forbrugsforeningen',
    patterns: [600],
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true,
    number: ''
  }, {
    type: 'dankort',
    patterns: [5019],
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true,
    number: ''
  }, {
    type: 'visa',
    patterns: [4],
    format: defaultFormat,
    length: [13, 16],
    cvcLength: [3],
    luhn: true,
    number: ''
  }, {
    type: 'mastercard',
    patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true,
    number: ''
  }, {
    type: 'amex',
    patterns: [34, 37],
    format: /(\d{1,4})(\ \d{1,6})?(\ \d{1,5})?/g,
    length: [15],
    cvcLength: [3, 4],
    luhn: true,
    number: ''
  }, {
    type: 'dinersclub',
    patterns: [30, 36, 38, 39],
    format: /(\d{1,4})(\ \d{1,6})?(\ \d{1,4})?/g,
    length: [14],
    cvcLength: [3],
    luhn: true,
    number: ''
  }, {
    type: 'discover',
    patterns: [60, 64, 65, 622],
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true,
    number: ''
  }, {
    type: 'unionpay',
    patterns: [62, 88],
    format: defaultFormat,
    length: [16, 17, 18, 19],
    cvcLength: [3],
    luhn: false,
    number: ''
  }, {
    type: 'jcb',
    patterns: [35],
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true,
    number: ''
  }, {
    type: 'elo',
    patterns: [4011, 438935, 451416, 4576, 504175, 506699, 5067, 50904, 509040, 509042, 509043, 509045, 509046, 509047, 509048, 509049, 509050, 509051, 509052, 509064, 509066, 509067, 509068, 509069, 509074, 636297, 636368],
    format: defaultFormat,
    length: [16],
    cvcLength: [3],
    luhn: true,
    number: ''
  }
]

const revalidDuplicate = (list, numberCard, cvv) => {
  for (var n = 0; n < list.length; n++) {
    var card = list[n]
    var patterns = card.patterns
    if (patterns.find(x => x.toString().length >= 4)) {
      for (var x = 0; x < patterns.length; x++) {
        var pattern = patterns[x]
        var p = pattern.toString()
        if (numberCard.substr(0, p.length) === p) {
          if (card.length.find(l => l === numberCard.toString().length) && card.cvcLength.find(cv => cv === cvv.toString().length)) {
            return card
          }
        }
      }
    }
  }
}

const formatNumber = (card, str) => {
  return card
}

const validaCards = (numberCard, cvv) => {
  var list = []
  for (var n = 0; n < cards.length; n++) {
    var card = cards[n]
    var patterns = card.patterns
    for (var x = 0; x < patterns.length; x++) {
      var pattern = patterns[x]
      var p = pattern.toString()
      if (numberCard.substr(0, p.length) === p) {
        list.push(card)
      }
    }
  }
  if (list.length >= 2) {
    return formatNumber(revalidDuplicate(list, numberCard, cvv), numberCard)
  }
  else {
    return formatNumber(list[0], numberCard)
  }
}

export default { validaCards }
