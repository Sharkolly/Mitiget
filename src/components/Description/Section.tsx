import { IoMdNotifications } from "react-icons/io";

export default function Section() {
  return (
    <div>
      <div className="px-5 mt-8">
        <div className=" items-center flex gap-1 border-1 border-gray-200 w-[40%] max-xl:w-[30%] max-md:w-[45%]">
          <div className="w-3 h-8 bg-primary "></div>
          <div className="flex flex-col gap-2 ml-">
            <div className="w-0.5 h-0.5 rounded-full bg-gray-600"></div>
            <div className="w-0.5 h-0.5 rounded-full bg-gray-600"></div>
            <div className="w-0.5 h-0.5 rounded-full bg-gray-600"></div>
          </div>
          <h2 className="text-lg text-center w-full">Summary</h2>
        </div>

        <div className="flex flex-col gap-3 mt-3 text-sm">
          <p>
            This policy establishes the principles, procedures, and internal
            controls governing the organization’s payroll processing activities.
          </p>
          <p>
            It ensures that all employee compensation, including salaries,
            wages, bonuses, allowances, and statutory deductions, are calculated
            accurately, processed promptly, and disbursed in compliance with
            applicable labor laws, tax regulations, and organizational
            standards.
          </p>

          <p>
            The policy sets forth clear responsibilities for the Human Resources
            (HR) and Finance departments. HR is responsible for maintaining
            up-to-date employee records, validating attendance and leave data,
            and ensuring compliance with employment contracts and labor
            regulations.
          </p>
        </div>
      </div>
      <div className="px-5 mt-5">
        <div className=" items-center flex gap-1 border-1 border-gray-200 w-[40%] max-xl:w-[30%] max-md:w-[45%]">
          <div className="w-3 h-8 bg-primary "></div>
          <div className="flex flex-col gap-2 ml-">
            <div className="w-0.5 h-0.5 rounded-full bg-gray-600"></div>
            <div className="w-0.5 h-0.5 rounded-full bg-gray-600"></div>
            <div className="w-0.5 h-0.5 rounded-full bg-gray-600"></div>
          </div>
          <h2 className="text-lg text-center w-full">Objectives</h2>
        </div>

        <div className="flex flex-col gap-3 mt-3 text-sm">
          <p>
            The effective implementation of this Payroll Processing Policy
            requires coordinated efforts across multiple departments, with
            clearly defined rules and accountability to ensure compliance,
            accuracy, and operational integrity.
          </p>
        </div>

        <div className="text-sm">
          <ol className="list-decimal pl-3 mt-3 space-y-3">
            <li>
              <div className="flex flex-col">
                <strong>Human Resources [HR] Department</strong>
                <ul className="list-none pl-2">
                  <li>
                    - Maintain comprehensive and up-to-date employee records,
                    including contracts, salary structures, benefits and leave
                    balances.
                  </li>
                  <li>
                    - Validate and approve timesheets, attendance, overtime, and
                    leave data before submitting to Finance.
                  </li>
                  <li>
                    - Communicate payroll-related policy updates or changes to
                    all employees
                  </li>
                  <li>
                    - Ensure compliance with labor laws and internal employment
                    agreements.
                  </li>
                  <li>
                    - Support investigators and resolve discrepancies raised by
                    employees regarding payroll matters.
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <strong>Finance Department</strong>
                <ul className="list-none pl-2">
                  <li>
                    - Maintain comprehensive and up-to-date employee records,
                    including contracts, salary structures, benefits and leave
                    balances.
                  </li>
                  <li>
                    - Validate and approve timesheets, attendance, overtime, and
                    leave data before submitting to Finance.
                  </li>
                  <li>
                    - Communicate payroll-related policy updates or changes to
                    all employees
                  </li>
                  <li>
                    - Ensure compliance with labor laws and internal employment
                    agreements.
                  </li>
                  <li>
                    - Support investigators and resolve discrepancies raised by
                    employees regarding payroll matters.
                  </li>
                </ul>
              </div>
            </li>
          </ol>

          <div className="mt-5 pb-8 ">
            <button className='flex gap-2 items-center rounded-lg pl-4 pr-9 py-2 bg-primary text-white '>
              <span>
                <IoMdNotifications />
              </span>
              <span>Revise</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
