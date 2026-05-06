import { Suspense } from "react";
import EmployeeCard from "./EmployeeCard";
import { supabase } from "@/lib/supabaseClient";

// Fetch employees from Supabase with error handling.
const getEmployees = async () => {
  if (!supabase) return [];

  try {
    const { data: employees, error } = await supabase
      .from("employees")
      .select("*")
      .order("employee_name", { ascending: true });

    if (error) {
      return [];
    }

    return employees || [];
  } catch {
    return [];
  }
};

const EmployeeListContainer = async () => {
  const employees = await getEmployees();

  return (
    <section>
      <Suspense fallback={<p>Loading employees...</p>}>
        <h2>Medarbejdere</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              image={employee.employee_picture}
              name={employee.employee_name}
              position={employee.employee_title}
              email={employee.employee_mail}
              phone={employee.employee_phone}
            />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default EmployeeListContainer;
