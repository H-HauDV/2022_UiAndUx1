import React, { useEffect, useState } from "react";
import Widget from "../../../../components/widget";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import { Slider, Form, DatePicker } from "antd";
import "./detail.scss";

const info = {
  name: "Report Name",
  code: "Report Code",
  description: "Report Description",
  comment: "Report Comment",
  progress: 30,
  timeStart: moment("2022-06-02"),
  expectedTime: moment("2022-12-25"),
};

export default function ReportDetail() {
  const [comment, setComment] = useState(info.comment);
  const [progress, setProgress] = useState(info.progress);
  const [expectedTime, setExpectedTime] = useState(info.expectedTime);
  const [editComment, setEditComment] = useState(false);
  const [editProgress, setEditProgress] = useState(false);
  const [editExpectedTime, setEditExpectedTime] = useState(false);

  const { RangePicker } = DatePicker;

  return (
    <div>
      <div className="dashBoard">
        <div className="widgets">
          <Widget>
            <div className="form form-edit">
              <h1 className="title">{info.name}</h1>
              <form>
                <div className="formInput" key="0">
                  <h3 className="section">Work's code</h3>
                  <div>
                    <span>{info.code}</span>
                  </div>
                  <br />
                  <h3 className="section">Work's description</h3>
                  <p>{info.description}</p>
                </div>
                <div className="formInput" key="2">
                  <h3 className="section">Report</h3>
                  <div className="section-subtitle">
                    <label>Comment of worker</label>
                    {!editComment ? (
                      <EditIcon
                        onClick={() => {
                          setEditComment(true);
                          setEditProgress(false);
                          setEditExpectedTime(false);
                        }}
                      />
                    ) : null}
                  </div>

                  <input
                    type="text"
                    placeholder="Can be empty"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={!editComment}
                  />
                  {editComment ? (
                    <div className="btn-action">
                      <button>Update</button>{" "}
                      <button onClick={() => setEditComment(!editComment)}>
                        Cancel
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="formInput" key="3">
                  <div className="section-subtitle">
                    <label>Progress</label>
                    {!editProgress ? (
                      <EditIcon
                        onClick={() => {
                          setEditProgress(true);
                          setEditComment(false);
                          setEditExpectedTime(false);
                        }}
                      />
                    ) : null}
                  </div>

                  <Slider
                    value={progress}
                    disabled={!editProgress}
                    marks={{
                      0: "",
                      30: "Ongoing",
                      50: "Halfway",
                      80: "Almost done",
                      100: "Done",
                    }}
                    onChange={(newValue) => setProgress(newValue)}
                  />
                  {editProgress ? (
                    <div className="btn-action">
                      <button>Update</button>{" "}
                      <button onClick={() => setEditProgress(false)}>
                        Cancel
                      </button>
                    </div>
                  ) : null}
                </div>

                <div className="formInput" key="4">
                  <div className="section-subtitle">
                    <label>Estimate working day</label>

                    {!editExpectedTime ? (
                      <EditIcon
                        onClick={() => {
                          setEditExpectedTime(true);
                          setEditProgress(false);
                          setEditComment(false);
                        }}
                      />
                    ) : null}
                  </div>

                  <RangePicker
                    defaultValue={[info.timeStart, expectedTime]}
                    onChange={(dates, dateStrings) => {
                      setExpectedTime(dateStrings[1]);
                      //   if (dates) {
                      //     console.log("From: ", dates[0], ", to: ", dates[1]);
                      //     console.log(
                      //       "From: ",
                      //       dateStrings[0],
                      //       ", to: ",
                      //       dateStrings[1]
                      //     );
                      //   } else {
                      //     console.log("Clear");
                      //   }
                    }}
                    disabled={[true, !editExpectedTime]}
                  />
                  {editExpectedTime ? (
                    <div className="btn-action">
                      <button>Update</button>{" "}
                      <button
                        onClick={() => {
                          setEditExpectedTime(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : null}
                </div>
                <div className="formInput" key="5"></div>
              </form>
            </div>
          </Widget>
        </div>
      </div>
    </div>
  );
}
