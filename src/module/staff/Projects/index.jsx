import  { useRef } from "react";
import TableLayout from "../../../layouts/TableLayout";
import { PROJECT_COLUMNS, PROJECT_DATA_SOURCE } from "./constant";
import ProjectModal from "../Projects/ProjectModel";

const StaffProjects = () => {
  const projectActionModal = useRef();

  const searchStaffProject = () => {};

  return (
    <>
      <ProjectModal ref={projectActionModal} />

      <TableLayout
        tableColumns={PROJECT_COLUMNS}
        tableDataSource={PROJECT_DATA_SOURCE}
        actionName={"New Project"}
        onchangeSearch={searchStaffProject}
        addNewAction={() => projectActionModal.current.openModal()}
      />
    </>
  );
};

export default StaffProjects;
