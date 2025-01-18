import React from "react";
import "./table.css";

const Table = (props) => {
  const { data } = props;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>
            <div className="d-flex align-items-center justify-content-start">
              <div className="table-head-img">
                <img src="/text.svg" alt="" />
              </div>
              <div>Input Column</div>
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center justify-content-start">
              <div className="table-head-img">
                <img src="/chat.svg" alt="" />
              </div>
              <div>Action Column</div>{" "}
            </div>
          </th>
          <th>
            <div className="d-flex align-items-center justify-content-start">
              <div className="table-head-img">
                <img src="/apolo.svg" alt="" />
              </div>
              <div>Enrich Company</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th className="td-width" scope="row">
              {index + 1}
            </th>
            <td className="td-width">
              <img src="/play.svg" alt="" />
            </td>
            <td>
              <i className={item.inputIcon} style={{ marginRight: "5px" }}></i>
              {item.inputColumn}
            </td>
            <td>
              <img
                src={`${item.actionColumn.icon}`}
                alt=""
                style={{ marginRight: "0.3rem" }}
              />
              {item.actionColumn.type === "link" ? (
                <a
                  href={item.actionColumn.value}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.actionColumn.value}
                </a>
              ) : (
                <span>{item.actionColumn.value}</span>
              )}
            </td>
            <td>
              <i className={item.enrichIcon} style={{ marginRight: "5px" }}></i>
              {item.enrichCompany}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
