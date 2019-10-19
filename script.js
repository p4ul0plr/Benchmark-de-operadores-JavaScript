const t_studant = [
    [3.0777, 4.1653, 6.3138, 12.7062, 31.8763],
    [1.8856, 2.2819, 2.9200, 4.3027, 6.9646],
    [1.6377, 1.9243, 2.3534, 3.1824, 4.5407],
    [1.5332, 1.7782, 2.1318, 2.7764, 3.7469],
    [1.4759, 1.6994, 2.0150, 2.5706, 3.3649],
    [1.4398, 1.6502, 1.9432, 2.4469, 3.1427],
    [1.4149, 1.6166, 1.8946, 2.3646, 2.9980],
    [1.3968, 1.5922, 1.8595, 2.3060, 2.8965],
    [1.3830, 1.5737, 1.8331, 2.2622, 2.8214],
    [1.3722, 1.5592, 1.8125, 2.2281, 2.7638],
    [1.3634, 1.5476, 1.7959, 2.2010, 2.7181],
    [1.3562, 1.5380, 1.7823, 2.1788, 2.6810],
    [1.3502, 1.5299, 1.7709, 2.1604, 2.6503],
    [1.3450, 1.5231, 1.7613, 2.1448, 2.6245],
    [1.3406, 1.5172, 1.7531, 2.1314, 2.6025],
    [1.3368, 1.5121, 1.7459, 2.1199, 2.5835],
    [1.3334, 1.5077, 1.7396, 2.1098, 2.5669],
    [1.3304, 1.5037, 1.7341, 2.1009, 2.5524],
    [1.3277, 1.5002, 1.7291, 2.0930, 2.5395],
    [1.3253, 1.4970, 1.7247, 2.0860, 2.5280],
    [1.3232, 1.4942, 1.7207, 2.0796, 2.5176],
    [1.3212, 1.4916, 1.7171, 2.0739, 2.5083],
    [1.3195, 1.4893, 1.7139, 2.0687, 2.4999],
    [1.3178, 1.4871, 1.7109, 2.0639, 2.4922],
    [1.3163, 1.4852, 1.7081, 2.0595, 2.4851],
    [1.3150, 1.4834, 1.7056, 2.0555, 2.4786],
    [1.3137, 1.4817, 1.7033, 2.0518, 2.4727],
    [1.3125, 1.4801, 1.7011, 2.0484, 2.4671],
    [1.3114, 1.4787, 1.6991, 2.0452, 2.4620],
    [1.3104, 1.4774, 1.6973, 2.0423, 2.4573],
    [1.3095, 1.4761, 1.6955, 2.0395, 2.4528],
    [1.3086, 1.4749, 1.6939, 2.0369, 2.4487],
    [1.3077, 1.4738, 1.6924, 2.0345, 2.4448],
    [1.3070, 1.4728, 1.6909, 2.0322, 2.4411],
    [1.3062, 1.4718, 1.6896, 2.0301, 2.4377],
    [1.3055, 1.4709, 1.6883, 2.0281, 2.4345],
    [1.3049, 1.4701, 1.6871, 2.0262, 2.4314],
    [1.3042, 1.4692, 1.6860, 2.0244, 2.4286],
    [1.3036, 1.4685, 1.6849, 2.0227, 2.4258],
    [1.3031, 1.4677, 1.6839, 2.0211, 2.4233],
    [1.3025, 1.4670, 1.6829, 2.0195, 2.4208],
    [1.3020, 1.4664, 1.6820, 2.0181, 2.4185],
    [1.3016, 1.4657, 1.6811, 2.0167, 2.4163],
    [1.3011, 1.4651, 1.6802, 2.0154, 2.4141],
    [1.3006, 1.4645, 1.6794, 2.0141, 2.4121],
    [1.3002, 1.4640, 1.6787, 2.0129, 2.4102],
    [1.2998, 1.4635, 1.6779, 2.0117, 2.4083],
    [1.2994, 1.4629, 1.6772, 2.0106, 2.4066],
    [1.2991, 1.4625, 1.6766, 2.0096, 2.4049],
    [1.2987, 1.4620, 1.6759, 2.0086, 2.4033],
    [1.2984, 1.4615, 1.6753, 2.0076, 2.4017],
    [1.2980, 1.4611, 1.6747, 2.0066, 2.4002],
    [1.2977, 1.4607, 1.6741, 2.0057, 2.3988],
    [1.2974, 1.4603, 1.6736, 2.0049, 2.3974],
    [1.2971, 1.4599, 1.6730, 2.0040, 2.3961],
    [1.2969, 1.4596, 1.6725, 2.0032, 2.3948],
    [1.2966, 1.4592, 1.6720, 2.0025, 2.3936],
    [1.2963, 1.4589, 1.6716, 2.0017, 2.3924],
    [1.2961, 1.4585, 1.6711, 2.0010, 2.3912],
    [1.2958, 1.4582, 1.6706, 2.0003, 2.3901],
    [1.2956, 1.4579, 1.6702, 1.9996, 2.3890],
    [1.2954, 1.4576, 1.6698, 1.9990, 2.3880],
    [1.2951, 1.4573, 1.6694, 1.9983, 2.3870],
    [1.2949, 1.4570, 1.6690, 1.9977, 2.3860],
    [1.2947, 1.4567, 1.6686, 1.9971, 2.3851],
    [1.2945, 1.4565, 1.6683, 1.9966, 2.3842],
    [1.2943, 1.4562, 1.6679, 1.9960, 2.3833],
    [1.2941, 1.4560, 1.6676, 1.9955, 2.3824],
    [1.2939, 1.4557, 1.6672, 1.9949, 2.3816],
    [1.2938, 1.4555, 1.6669, 1.9944, 2.3808],
    [1.2936, 1.4553, 1.6666, 1.9939, 2.3800],
    [1.2934, 1.4551, 1.6663, 1.9935, 2.3793],
    [1.2933, 1.4548, 1.6660, 1.9930, 2.3785],
    [1.2931, 1.4546, 1.6657, 1.9925, 2.3778],
    [1.2929, 1.4544, 1.6654, 1.9921, 2.3771],
    [1.2928, 1.4542, 1.6652, 1.9917, 2.3764],
    [1.2926, 1.4540, 1.6649, 1.9913, 2.3758],
    [1.2925, 1.4538, 1.6646, 1.9908, 2.3751],
    [1.2924, 1.4537, 1.6644, 1.9905, 2.3745],
    [1.2922, 1.4535, 1.6641, 1.9901, 2.3739],
    [1.2921, 1.4533, 1.6639, 1.9897, 2.3733],
    [1.2920, 1.4531, 1.6636, 1.9893, 2.3727],
    [1.2918, 1.4530, 1.6634, 1.9890, 2.3721],
    [1.2917, 1.4528, 1.6632, 1.9886, 2.3716],
    [1.2916, 1.4527, 1.6630, 1.9883, 2.3710],
    [1.2915, 1.4525, 1.6628, 1.9879, 2.3705],
    [1.2914, 1.4524, 1.6626, 1.9876, 2.3700],
    [1.2912, 1.4522, 1.6624, 1.9873, 2.3695],
    [1.2911, 1.4521, 1.6622, 1.9870, 2.3690],
    [1.2910, 1.4519, 1.6620, 1.9867, 2.3685]
]
const column_t_studant = {
    '0.900': 0,
    '0.925': 1,
    '0.950': 2,
    '0.975': 3,
    '0.995': 4
}
let tab = {
    't_head': '',
    't_body': ''
}
const valores = [
    [
        'Quantidade de operações por segundo',
        'O número de vezes que um teste foi executado',
        'Quantidade de execuções amostradas',
        'O desvio padrão da amostra',
        'A média aritmética da amostra (segundos)',
        'A margem de erro',
        'A margem de erro relativa',
        'O erro padrão da média',
        'A variação da amostra',
        'alfa 1% - Limite inferior',
        'alfa 1% - Limite superior',
        'alfa 5% - Limite inferior',
        'alfa 5% - Limite superior'
    ]
]
let op1 = getRandomIntInclusive(0, 400000)
let op2 = getRandomIntInclusive(0, 400000)
let op3 = getRandomIntInclusive(-400000, 400000)
let op4 = getRandomIntInclusive(-400000, 400000) + 1
let op5 = getRandomIntInclusive(1, 400000)
let opBool1 = getRandomBoolean()
let opBool2 = getRandomBoolean()
let suite = new Benchmark.Suite
let ang = getRandomIntInclusive(0, 360) * (Math.PI / 180)

function criarTabela(conteudo) {
    var tabela = document.createElement("table")
    var thead = document.createElement("thead")
    var tbody = document.createElement("tbody")
    var maior = conteudo.t_body[0].length

    for (let i = 0; i < conteudo.t_head.length; i++) {
        if (i == 0) {
            var tr = document.createElement("tr")
        }
        let th = document.createElement("th")
        let texto = document.createTextNode(conteudo.t_head[i])
        th.appendChild(texto)
        tr.appendChild(th)
        thead.appendChild(tr)
    }

    for (let i = 0; i < conteudo.t_body.length; i++) {
        if (conteudo.t_body[i].length > maior) {
            maior = conteudo.t_body[i].length
        }
    }

    var tr = []

    for (let i = 0; i < maior; i++) {
        tr.push(document.createElement("tr"))
    }

    for (let j = 0; j < conteudo.t_body.length; j++) {
        for (let k = 0; k < maior/* conteudo.t_body[j].length */; k++) {
            var td = document.createElement("td")
            var texto = document.createTextNode(conteudo.t_body[j][k] || '')
            td.appendChild(texto)
            tr[k].appendChild(td)
            thead.appendChild(tr[k])
        }
    }
    tabela.appendChild(thead)
    tabela.appendChild(tbody)
    return tabela
}

function getT_Studant(nQ, key) {
    return t_studant[nQ - 1][column_t_studant[key]]
}

function lowerLimit(mean, variance, sampleLength, alfa) {
    return mean - getT_Studant(sampleLength, String(1 - (alfa / 2))) * Math.sqrt(variance / sampleLength)
}

function upperLimit(mean, variance, sampleLength, alfa) {
    return mean + getT_Studant(sampleLength - 1, String(1 - (alfa / 2))) * Math.sqrt(variance / sampleLength)
}

function getRandomIntInclusive(minimo, maximo) {
    let min = Math.ceil(minimo)
    let max = Math.floor(maximo)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomBoolean() {
    return Math.random() >= 0.5 ? true : false
}

suite
    .add('And', () => {
        opBool1 && opBool2
    })
    .add('Or', () => {
        opBool1 || opBool2
    })
    .add('Soma', () => {
        op1 + op2
    })
    .add('Subtração', () => {
        op1 - op2
    })
    .add('Multiplicação', () => {
        op3 * op4
    })
    .add('Divisão', () => {
        op3 / op4
    })
    .add('Resto da Divisão', () => {
        op3 % op4
    })
    .add('Exponencial', () => {
        Math.exp(op3)
    })
    .add('Logaritmo', () => {
        Math.log(op5)
    })
    .add('Seno', () => {
        Math.sin(ang)
    })
    .add('Cosseno', () => {
        Math.cos(ang)
    })
    .add('Tangente', () => {
        Math.tan(ang)
    })
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'))
    })
    .run()

let maior = suite[String(0)].stats.sample.length

for (let i = 0; i <= 11; i++) {
    if (suite[String(i)].stats.sample.length > maior) {
        maior = suite[String(i)].stats.sample.length
    }
}

let n = []

for (let i = 1; i <= maior; i++) {
    n.push(String(i))
}

let lines = []
lines.push(n)
let columns = ['n']

for (let i = 0; i <= 11; i++) {
    columns.push(suite[String(i)].name)

    var vect = []

    for (let j = 0; j < suite[String(i)].stats.sample.length; j++) {
        vect.push(String(suite[String(i)].stats.sample[j].toPrecision(5)).replace('.', ','))
    }

    lines.push(vect)

    valores.push(
        [
            suite[String(i)].hz.toFixed(4).replace('.', ','),
            suite[String(i)].count,
            suite[String(i)].stats.sample.length,
            suite[String(i)].stats.deviation.toPrecision(5).replace('.', ','),
            suite[String(i)].stats.mean.toPrecision(5).replace('.', ','),
            suite[String(i)].stats.moe.toPrecision(5).replace('.', ','),
            ('±' + suite[String(i)].stats.rme.toPrecision(5) + '%').replace('.', ','),
            suite[String(i)].stats.sem.toPrecision(5).replace('.', ','),
            suite[String(i)].stats.variance.toPrecision(5).replace('.', ','),
            lowerLimit(
                suite[String(i)].stats.mean, 
                suite[String(i)].stats.variance, 
                suite[String(i)].stats.sample.length, 
                0.01
            ).toPrecision(5).replace('.', ','),
            upperLimit(
                suite[String(i)].stats.mean, 
                suite[String(i)].stats.variance, 
                suite[String(i)].stats.sample.length, 
                0.01
            ).toPrecision(5).replace('.', ','),
            lowerLimit(
                suite[String(i)].stats.mean, 
                suite[String(i)].stats.variance, 
                suite[String(i)].stats.sample.length, 
                0.05
            ).toPrecision(5).replace('.', ','),
            upperLimit(
                suite[String(i)].stats.mean, 
                suite[String(i)].stats.variance, 
                suite[String(i)].stats.sample.length, 
                0.05
            ).toPrecision(5).replace('.', ',')
        ]
    )
}    

const newColumns = columns.map(function(item, index) {
    return index != 0 ? item + ' (s)': item
})

tab.t_head = newColumns
tab.t_body = lines
document.getElementById("tabela").appendChild(criarTabela(tab))
columns[0] = 'Informações'
tab.t_head = columns
tab.t_body = valores
document.getElementById("valores").appendChild(criarTabela(tab))