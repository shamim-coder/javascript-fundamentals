var stuff1 = {
    id          : "0001",
    name        : 'Shamim Reza',
    designation : 'Computer Operator',
    joiningDate : "01/02/2022",
    company :   {
        companyName : 'Confident Group',
        location    : 'CB-10, Cantonment, Dhaka',
        isLimited   : false,
        isGroupCompany: true,
        groupQnt    : 4,
        stuffQnt    : 12
    }
}

var companyName = stuff1.company.companyName;

console.log(companyName);