import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterProduct'
})
// ProdName
export class FilterProduct implements PipeTransform {

    transform(tabledata: any, searchByName: any): any {
        if (searchByName === undefined) {
            return tabledata;
        } else {
            return tabledata.filter(
                (x: any) => {
                    return x.name.toLowerCase()
                        .includes(searchByName.toLowerCase())
                })
        }
    }
}