import fs from 'fs';
import csv from "csvtojson";
import {PATH} from '../common/constant.js';

export default class CsvParser {
    run0() {
        csv().fromFile(PATH.CSV).then((jsonArray) => {
            let jsonString = JSON.stringify(jsonArray, null, '\t');
            fs.writeFile(PATH.JSON_TXT, jsonString, (err) => {
                if (err) {
                    return console.log(err);
                }
            });
        })
    }

    run1() {
        let writeText = fs.createWriteStream(PATH.JSON_TXT1);
        fs.createReadStream(PATH.CSV)
            .pipe(csv())
            .on('data', (data) => writeText.write(data));
    }
}