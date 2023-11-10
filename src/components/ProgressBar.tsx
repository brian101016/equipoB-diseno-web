// ################################ IMPORTS ################################
import styled, { css } from "styled-components";

// ################################ INTERFACES & PROPS ################################
type _Base = import("utils/classes").Base;
// ProgressBar => Rename all instances to use
type ProgressBarProps = {
  percentage: number;
  isChart?: boolean;
} & _Base;

// ################################ RENDERING COMPONENT ################################
const _ProgressBar = (props: ProgressBarProps) => {
  // ------------------------------------------------------------------------------------ RETURN
  return (
    <div className={props.className}>
      <div className="progress-bar less">
        <h3>
          {props.percentage}
          <span>%</span>
        </h3>
      </div>
    </div>
  );
};

// ################################ Styles ################################
const ProgressBar = styled(_ProgressBar)<ProgressBarProps>`
  ${(props) => css`
    ${props.isChart === true
      ? css`
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 40px;

          .progress-bar {
            position: relative;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            color: #ffffff;
            background: #b4b0b0
              linear-gradient(to right, transparent 50%, #2f8da1 0);
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
          .progress-bar h3 span {
            font-size: 1.4rem;
            font-weight: 400;
          }

          .progress-bar::before {
            content: "";
            display: block;
            height: 100%;
            margin-left: 50%;
            transform-origin: left;
            border-radius: 0 100% 100% 0/50%;
          }

          .progress-bar::after {
            content: "";
            position: absolute;
            inset: 10px;
            border-radius: 50%;
            background: #ffffff;
          }

          ${props.percentage > 50
            ? css`
                .progress-bar::before {
                  background: #2f8da1;
                  transform: rotate(
                    calc(((${props.percentage} - 50) * 0.01turn))
                  );
                }
              `
            : css`
                .progress-bar.less::before {
                  background-color: #b4b0b0;
                  transform: rotate(
                    calc(((${props.percentage} - 0) * 0.01turn))
                  );
                }
              `}
        `
      : css`
          margin: 1rem;
          flex-wrap: wrap;
          background-color: #888;
          width: 200px;
          height: 30px;
          border-radius: 8px;
          gap: 40px;

          .progress-bar {
            position: relative;
            height: 30px;
            border-radius: 8px;
            color: #ffffff;
            background: #888;
          }
          h3 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 1rem;
            z-index: 1;
            font-weight: 500;
          }
          .progress-bar h3 span {
            font-size: 0.8rem;
            font-weight: 400;
          }

          .progress-bar::before {
            content: "";
            display: block;
            height: 100%;
            transform-origin: left;
            border-radius: 8px;
          }

          ${props.percentage < 16
            ? css`
                .progress-bar {
                  background: #eb1010;
                  max-width: 16%;
                }
              `
            : props.percentage < 26
            ? css`
                .progress-bar {
                  background: #eb1010;
                  width: ${props.percentage + "%"};
                }
              `
            : props.percentage < 51
            ? css`
                .progress-bar {
                  background: #e47916;
                  width: ${props.percentage + "%"};
                }
              `
            : props.percentage < 100
            ? css`
                .progress-bar {
                  background: #cfe416;
                  width: ${props.percentage + "%"};
                }
              `
            : css`
                .progress-bar {
                  background: #059c1e;
                  width: ${props.percentage + "%"};
                }
              `}
        `}
  `}
`;

// ################################ EXPORTS ################################
export default ProgressBar;
