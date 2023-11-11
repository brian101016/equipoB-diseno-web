// ################################ IMPORTS ################################
import styled, { css } from "styled-components";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// ProgressChart => Rename all instances to use
type ProgressChartProps = {
  percentage: number;
  className?: string;
} & _Base;

// ################################ RENDERING COMPONENT ################################
const _ProgressChart = (props: ProgressChartProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <div className="progress-chart less">
        <h3>
          {props.percentage}
          <span>%</span>
        </h3>
      </div>
    </div>
  );
};

// ################################ STYLES ################################
const ProgressChart = styled(_ProgressChart)<ProgressChartProps>`
  ${(props) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;

    .progress-chart {
      position: relative;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      color: #ffffff;
      background: #b4b0b0 linear-gradient(to right, transparent 50%, #2f8da1 0);
    }
    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.5rem;
      z-index: 1;
      font-weight: 500;
    }
    .progress-chart h3 span {
      font-size: 1.4rem;
      font-weight: 400;
    }

    .progress-chart::before {
      content: "";
      display: block;
      height: 100%;
      margin-left: 50%;
      transform-origin: left;
      border-radius: 0 100% 100% 0/50%;
    }

    .progress-chart::after {
      content: "";
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      background: #ffffff;
    }

    ${props.percentage > 50
      ? css`
          .progress-chart::before {
            background: #2f8da1;
            transform: rotate(calc(((${props.percentage} - 50) * 0.01turn)));
          }
        `
      : css`
          .progress-chart.less::before {
            background-color: #b4b0b0;
            transform: rotate(calc(((${props.percentage} - 0) * 0.01turn)));
          }
        `}
  `}
`;

// ################################ EXPORTS ################################
export default ProgressChart;
