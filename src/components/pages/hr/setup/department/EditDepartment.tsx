import { useCallback, useEffect, useState } from "react";
interface PrevData {
  departmentName: string;
}
const EditDepartment = (props: any) => {
  const id = props.deptId;
  console.log("pp", Number(id));
  const accessToken = localStorage.getItem("accessToken");
  const [previousData, setPreviousData] = useState<PrevData>({
    departmentName: "",
  });
  const previouseDataInfo = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/department/byId/${Number(id)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
        .then((response) => response.json())
        .then((data) => setPreviousData(data))
        .catch((error) => console.error("Error fetching data : ", error));
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  useEffect(() => {
    previouseDataInfo();
  }, []);
  console.log("previousData", previousData);

  const handleChange = () => {};

  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div></div>
        <div className="mb-6">
          <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Serial
          </label>
          <input
            type="text"
            name="serialNo"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="departmentName"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-left mb-2 text-sm  font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <input
            type="text"
            name="departmentDes"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-left mb-2 text-sm  font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <select
            name="orgId"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="1">Organization1</option>
            <option value="2">Organization2</option>
            <option value="3">Organization3</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default EditDepartment;
