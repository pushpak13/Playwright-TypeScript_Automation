import{test} from "@playwright/test";
import * as Excel from 'exceljs';
import * as path from 'path';

test("Write to Excel", async() =>{
  const workbook = new Excel.Workbook();
  const filePath = 'C:/Users/pushpak.madhavan/Desktop/Employee Sample Data.xlsx'
  await workbook.xlsx.readFile(filePath)
    .then(function() {
        const worksheet = workbook.getWorksheet(1);
        //const row = worksheet.getRow(5);
        //row.getCell(1).value = 5; // A5's value set to 5
        //row.commit();
        return workbook.xlsx.writeFile('EmployeeData.xlsx');
    })
  

})


