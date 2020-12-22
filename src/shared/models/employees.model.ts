export interface Employees {
    status:             string,
    data:               Employee[]
}

export interface Employee {
    status:             string,
    id:                 string,
    employee_name:      string,
    employee_salary:    string,
    employee_age:       string,
    profile_image:      string
}