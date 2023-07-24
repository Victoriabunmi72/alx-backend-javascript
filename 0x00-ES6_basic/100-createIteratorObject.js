export default function* createIteratorObject(report) {
  const departments = object.values(report.allEmployees);
    const Employees = departments.flat();
    for (const Employee of Employees) {
      yield Employee;
    }
  }
