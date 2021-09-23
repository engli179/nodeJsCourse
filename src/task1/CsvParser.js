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
        let writeText;
        try {
            writeText = fs.createWriteStream(PATH.JSON_TXT1);
        } catch (error) {
            console.error(error)
            return;
        }

        fs.createReadStream(PATH.CSV)
            .pipe(csv())
            .on('data', (data) => writeText.write(data))
            .on('error', (err) => {
                console.error(err);
            });
    }
}