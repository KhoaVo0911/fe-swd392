import PropTypes from 'prop-types';
import "./style.scss";
import { Button, Card, Input, Table } from "antd";
import { AddOutlined } from "@mui/icons-material";
import { debounce } from "@mui/material";

const TableLayout = ({
  tableColumns,
  tableDataSource,
  onchangeSearch,
  addNewAction,
  actionName,
  viewProductDetail,
}) => {
  return (
    <div className="table-container">
      <Card size="small">
        <div className="table-filter">
          <Input.Search
            placeholder="Search..."
            className="input-search"
            onChange={debounce(onchangeSearch, 500)}
          />
          <Button type="primary" icon={<AddOutlined />} onClick={addNewAction}>
            {actionName}
          </Button>
        </div>
      </Card>

      <Card size="small">
        <Table
          columns={tableColumns({
            viewProductDetail,
          })}
          dataSource={tableDataSource()}
        />
      </Card>
    </div>
  );
};

TableLayout.propTypes = {
  tableColumns: PropTypes.func.isRequired,
  tableDataSource: PropTypes.func.isRequired,
  onchangeSearch: PropTypes.func.isRequired,
  addNewAction: PropTypes.func.isRequired,
  actionName: PropTypes.string.isRequired,
  viewProductDetail: PropTypes.func.isRequired,
};

export default TableLayout;
