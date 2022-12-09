import{test} from "@playwright/test";
import * as Excel from 'exceljs';

test("Excel",  async()=> {
    const fileName = 'PersonalData.xlsx';
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");
      
      worksheet.columns = [
       {header: 'Id', key: 'id', width: 10},
       {header: 'First Name', key: 'fn', width: 32},
       {header: 'Last Name', key: 'ln', width: 32}, 
       {header: 'D.O.B.', key: 'dob', width: 15,}
      ];
      
      worksheet.addRow({id: 1, fn: 'Prakash', ln: 'Kumar', dob: new Date(1970, 1, 1)});
      worksheet.addRow({id: 2, fn: 'Jayant', ln: 'Gowda', dob: new Date(1965, 5, 7)});
      worksheet.addRow({id: 3, fn: 'Lokesh', ln: 'Rahul', dob: new Date(1982, 12, 25)});
      worksheet.addRow({id: 4, fn: 'Neeraj', ln: 'Gupta', dob: new Date(1976, 8, 18)});
      worksheet.addRow({id: 5, fn: 'Jacob', ln: 'Chandy', dob: new Date(1963, 11, 29)});
      // save the file
      await workbook.xlsx.writeFile(fileName);
      
      //load a copy of PersonalData.xlsx
      const newWorkbook = new Excel.Workbook();
      await newWorkbook.xlsx.readFile(fileName);
      //Replace sheet name
      const newworksheet = newWorkbook.getWorksheet('My Sheet');
      //
      let row = worksheet.getRow(3);
      //console.log(row);
      row.getCell(1).value = 15;
      row.getCell(2).value = 'Suraj';
      row.getCell(3).value = 'Verma';
      row.getCell(4).value = '12/09/1991';
      row.commit();
      workbook.xlsx.writeFile(fileName);
      
      console.log("File is written");
      
     

})
