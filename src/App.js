import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import "./styles.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "0",
          tagKey: "Amit aujaa",
          tagDisplayName: "Aug 9",
          description: "Urgent",
          isLpogged: false
        },
        {
          id: "1",
          tagKey: "Ketan kor",
          status: "",
          tagDisplayName: "Aug 10",
          description: "Heigh"
        },
        {
          id: "3",
          tagKey: "Radhuvir singh",
          status: "Integer",
          tagDisplayName: "Aug 11",
          description: "Medium"
        },
        {
          id: "4",
          tagKey: "Mohan alane",
          status: "Integer",
          tagDisplayName: "Aug 12",
          description: "Low"
        },
        {
          id: "5",
          tagKey: "Shameera rothor",
          status: "Integer",
          tagDisplayName: "Aug 13",
          description: "all is well"
        }
      ],
      disabled: true,
      editedId: "-1",
      editImageSrc:
        "https://image.shutterstock.com/image-vector/edit-text-icon-sign-symbol-260nw-1237672183.jpg",
      contentEditable: "true",
      showStore: true,
      hidden: true,
      hideAddDialog: true,
      hideupdateDialog: true,
      hideDeletePopup: true,
      hideDeleteSuccessPopup: true,
      successResp: true,
      pageNum: null
    };

    this.saveImageSrc = (
      <img alt="df" src="https://img.icons8.com/fluent/2x/save.png" />
    );
    this.editImageSrc = "./assets/images/edit2.png";

    this.valueTypeVar = [];
  }

  //--------------COMPONENTDIDMOUNT--------------------------------------------------------------------------

  componentDidMount() {
    this.loadData();
  }

  refreshData = (id) => {
    var refreshContent = this;
    refreshContent = this.state.editedId = id;
    this.loadData();
    this.setState({ disabled: true });
  };

  loadData = () => {
    var KpiController = this;
    KpiController.setState({
      id: "1",
      tagKey: "Book_table",
      tagDisplayName: "book a table",
      status: "Integer",
      description: "all is well",
      // valueType: ["Int", "float", "bool"],
      successResp: true
    });
  };

  handleChange = (e) => {
    this.setState({ selectValue: e.target.value });
  };
  //------------------------------------------------------------------------------------------------

  //----------------------------------------------------------------------------------------------
  onPageChange = (e) => {
    this.setState({ pageNum: e });
  };
  //------------------------------------------------------------------------------------------------
  handleColor = () => {
    this.setState({
      isLpogged: true
    });
  };
  render() {
    const { data, isLpogged } = this.state;
    const columns = [
      {
        Header: "Id",
        accessor: "id",
        show: true,
        Cell: (props) => (
          <div name="id" id={"id" + props.index}>
            {props.original.id}
          </div>
        )
      },

      {
        Header: () => <b>Things to do</b>,
        accessor: "tagKey",
        Cell: (props) => (
          <div name="tagKey">
            <div
              className="textarea"
              style={{
                background: "white",
                resize: "none",
                width: "98%",
                paddingLeft: "2px",
                paddingTop: "6px",
                height: "3rem"
              }}
              id={"tagKey" + props.index}
              class="form-control"
              rows="1"
              maxlength="250"
            >
              {props.original.tagKey}
            </div>
          </div>
        )
      },
      {
        Header: () => <b>Owner</b>,
        accessor: "owner",
        Cell: (props) => (
          <div name="owner">
            <div
              className="textarea"
              style={{
                background: "white",
                resize: "none",
                width: "98%",
                paddingLeft: "2px",
                paddingTop: "6px"
              }}
              id={"owner" + props.index}
              class="form-control"
              rows="1"
              maxlength="250"
            >
              {/* {props.original.owner} */}
              <img
                class="center"
                height="35rem"
                width="30%"
                alt="userimage"
                src="https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179856.jpg"
              />
            </div>
          </div>
        )
      },

      {
        Header: <b>Status</b>,
        textAlign: "screenLeft",
        accessor: "status",
        Cell: (props) => {
          return (
            <div className="container-fluid" style={{ textAlign: "right" }}>
              <select
                style={{
                  backgroundColor: isLpogged ? "green" : "grey",
                  width: "100%",
                  height: "3rem"
                }}
              >
                <option
                  id="option"
                  style={{ backgroundColor: "yellow" }}
                  value="AB"
                >
                  {" "}
                  Working on it
                </option>
                <option style={{ backgroundColor: "red" }} value="AC">
                  {" "}
                  Stuck
                </option>
                <option style={{ backgroundColor: "grey" }} value="AD">
                  {" "}
                  Waiting for review
                </option>
                <option style={{ backgroundColor: "green" }} value="AE">
                  {" "}
                  Done
                </option>
                <option style={{ backgroundColor: "red" }} value="AF">
                  {" "}
                  Stuck
                </option>
                <option style={{ backgroundColor: "green" }} value="AG">
                  {" "}
                  Done
                </option>
                <option style={{ backgroundColor: "purple" }} value="AH">
                  {" "}
                  Progress
                </option>
              </select>
            </div>
          );
        }
      },
      {
        Header: () => <b>Due Date</b>,
        accessor: "tagDisplayName",
        Cell: (props) => (
          <div name="tagDisplayName">
            <div
              className="textarea"
              style={{
                background: "white",
                resize: "none",
                width: "98%",
                paddingLeft: "2px",
                paddingTop: "6px",
                height: "3rem"
              }}
              id={"tagDisplayName" + props.index}
              class="form-control"
              rows="1"
              maxlength="250"
            >
              {props.original.tagDisplayName}
            </div>
          </div>
        )
      },
      {
        Header: () => <b>Priority</b>,
        accessor: "description",
        Cell: (props) => (
          <div name="description">
            <div
              className="textarea"
              style={{
                background: "white",
                resize: "none",
                width: "98%",
                paddingLeft: "2px",
                paddingTop: "6px",
                height: "3rem"
              }}
              id={"description" + props.index}
              class="form-control"
              rows="1"
              maxlength="250"
            >
              {props.original.description}
            </div>
          </div>
        )
      }
    ];
    return (
      <div style={{ marginRight: "1%" }}>
        <div
          style={{
            background: "#F9F9FB",
            display: this.state.successResp ? "block" : "none"
          }}
        >
          {/* for reactTable */}
          <link
            rel="stylesheet"
            href="assets/css/React_Table_CSS/react-table.css"
          />
          <title> Xcelpros </title>
          {/* Font Awesome Icons */}
          <link
            rel="stylesheet"
            href="plugins/font-awesome/css/font-awesome.min.css"
          />
          {/* IonIcons */}
          <link
            rel="stylesheet"
            href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/gijgo@1.9.6/css/gijgo.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="plugins/select2/select2.min.css" />
          <div
            className="row"
            style={{ marginTop: "-30px", textAlign: "center" }}
          >
            <div className="col-sm-12">
              <h4
                className="nav-item"
                style={{ color: "#282a65", marginTop: "60px" }}
              >
                Add board description
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <div className="d-flex flex-row-reverse pt-2">
                <button
                  style={{ marginLeft: "91%" }}
                  className="btn action-button"
                  id="addMsg"
                  title=" Add "
                >
                  <img
                    height="25 rem"
                    alt="jhj"
                    src="https://image.shutterstock.com/image-vector/add-button-icon-vector-on-600w-1684959127.jpg"
                  />
                </button>

                <button
                  style={{ marginLeft: "2%" }}
                  title="Refresh"
                  onClick={this.refreshData}
                  type="button"
                  className="btn action-button"
                >
                  <img
                    height="25 rem"
                    alt="jhj"
                    src="https://image.shutterstock.com/image-vector/reload-arrow-icon-260nw-1155959929.jpg"
                  ></img>
                </button>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginLeft: "11px" }}>
            <div className="col-lg-12 ">
              <div className="card">
                <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={10}
                  pageSizeOptions={[5, 10, 15]}
                  onPageChange={this.onPageChange}
                  page={this.state.pageNum}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

