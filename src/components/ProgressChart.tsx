export default function Progress_Chart(props) {
  return (
    <>
      <div className="container-chart">
        <div className="progress-chart less">
          <h3>
            {props.percentage}
            <span>%</span>
          </h3>
        </div>
      </div>
    </>
  );
}
