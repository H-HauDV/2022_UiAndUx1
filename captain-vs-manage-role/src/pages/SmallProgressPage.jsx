import React from "react";
import "../scss/progresspage.scss";
import ProgressCard from "../components/ProgressCard";
import WorkingProgressGeneral from "../components/WorkingProgressGeneral";

export default function ProgressPage() {
  return (
    <div>
      <div className="captain-progress-page-wrapper">
        <div className="progress-page-container">
          <div className="progress-page-upper">
            <div className="progress-page-title">Tiến độ công việc</div>
            <div className="progress-page-description">
              Tiến độ đến thời điểm hiện tại (30/05/2022 - 30/06/2022)
            </div>
          </div>
          <div className="progress-page-down">
            <div className="progress-page-general">
              <div className="chart-wrapper">
                <WorkingProgressGeneral
                  title="Tiến độ tổng"
                  percent={80}
                  work={"4/5"}
                />
              </div>

              <div className="prog-card-wrapper-1">
                <ProgressCard
                  title="Cắt tỉa cây từ hết đường Đại Cồ Việt đến hết Lê Duẩn"
                  percent={100}
                  min={10}
                  max={10}
                />
                <ProgressCard
                  title="Cắt tỉa cây từ phố đi bộ đến hết Bà Triệu"
                  percent={100}
                  min={10}
                  max={10}
                />
              </div>
            </div>
            <div className="progress-page-small">
              <ProgressCard
                title="Cắt tỉa cây từ hết đường Đại Cồ Việt đến hết Lê Duẩn"
                percent={100}
                min={10}
                max={10}
              />
              <ProgressCard
                title="Cắt tỉa cây từ phố đi bộ đến hết Bà Triệu"
                percent={100}
                min={10}
                max={10}
              />
              <ProgressCard
                title="Cắt tỉa cây từ phố đi bộ đến hết Bà Triệu"
                percent={100}
                min={10}
                max={10}
              />
              <ProgressCard
                title="Cắt tỉa cây từ phố đi bộ đến hết Bà Triệu"
                percent={100}
                min={10}
                max={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
