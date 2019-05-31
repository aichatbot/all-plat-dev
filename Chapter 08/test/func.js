const printTable = (file) => {
    for (var sheet of file) {//迭代所有工作表
        console.log(sheet.name);//打印工作表名
        for (var row of sheet.data) {//迭代每个工作表的行
            console.log(row);//打印行的内容
        }
    }
}

module.exports.printTable = printTable;