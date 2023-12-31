class zipCodeService {
  isValidZipCode(zipCode) {
    const validZipCodes = {
      "07059": 7,
      "07069": 7,
      "07920": 7,
      "07921": 7,
      "07924": 7,
      "07931": 7,
      "07934": 7,
      "07938": 7,
      "07939": 7,
      "07977": 7,
      "07978": 7,
      "08502": 3,
      "08504": 7,
      "08528": 3,
      "08553": 3,
      "08558": 7,
      "08805": 7,
      "08807": 7,
      "08821": 7,
      "08823": 3,
      "08835": 7,
      "08836": 7,
      "08844": 7,
      "08853": 7,
      "08869": 7,
      "08873": 3,
      "08875": 3,
      "08876": 7,
      "08880": 7,
      "08890": 7,
      "07001": 7,
      "07008": 7,
      "07064": 7,
      "07067": 7,
      "07077": 7,
      "07080": 7,
      "07095": 7,
      "08512": 7,
      "08536": 7,
      "08810": 7,
      "08812": 7,
      "08816": 7,
      "08817": 7,
      "08818": 7,
      "08820": 7,
      "08824": 3,
      "08828": 7,
      "08830": 7,
      "08831": 7,
      "08832": 7,
      "08837": 7,
      "08840": 7,
      "08846": 7,
      "08850": 7,
      "08852": 3,
      "08854": 7,
      "08855": 7,
      "08857": 7,
      "08859": 7,
      "08861": 7,
      "08862": 7,
      "08863": 7,
      "08871": 7,
      "08872": 7,
      "08879": 7,
      "08882": 7,
      "08884": 7,
      "08899": 7,
      "08901": 7,
      "08902": 3,
      "08903": 7,
      "08904": 7,
      "08906": 7,
      "08520": 7,
      "08525": 7,
      "08534": 7,
      "08540": 7,
      "08542": 7,
      "08543": 7,
      "08550": 7,
      "08560": 7,
      "08561": 7,
      "08601": 7,
      "08602": 7,
      "08603": 7,
      "08604": 7,
      "08605": 7,
      "08606": 7,
      "08607": 7,
      "08608": 7,
      "08609": 7,
      "08610": 7,
      "08611": 7,
      "08618": 7,
      "08619": 7,
      "08620": 7,
      "08625": 7,
      "08628": 7,
      "08629": 7,
      "08638": 7,
      "08648": 7,
      "08650": 7,
      "08690": 7,
      "08691": 7,
      "07002": 7,
      "07029": 7,
      "07030": 7,
      "07032": 7,
      "07047": 7,
      "07086": 7,
      "07087": 7,
      "07093": 7,
      "07094": 7,
      "07096": 7,
      "07302": 7,
      "07303": 7,
      "07304": 7,
      "07305": 7,
      "07306": 7,
      "07307": 7,
      "07308": 7,
      "07309": 7,
      "07310": 7,
      "07311": 7,
    };

    return validZipCodes[zipCode];
  }
}

export default new zipCodeService();
