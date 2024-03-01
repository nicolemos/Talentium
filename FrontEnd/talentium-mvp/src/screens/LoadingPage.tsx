const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-royal-blue-500">
      <div className="text-center">
        <svg viewBox="0 0 200 200" className="w-24 h-24 mx-auto">
          <circle
            cx="35"
            cy="100"
            r="15"
            fill="#fff"
            stroke="#fff"
            strokeWidth="15"
          >
            <animate
              attributeName="cx"
              begin="0"
              calcMode="spline"
              dur="1.1"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              values="35;165;165;35;35"
            />
          </circle>
          <circle
            cx="35"
            cy="100"
            r="15"
            fill="#fff"
            stroke="#fff"
            strokeWidth="15"
            opacity=".8"
          >
            <animate
              attributeName="cx"
              begin=".05"
              calcMode="spline"
              dur="1.1"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              values="35;165;165;35;35"
            />
          </circle>
          <circle
            cx="35"
            cy="100"
            r="15"
            fill="#fff"
            stroke="#fff"
            strokeWidth="15"
            opacity=".6"
          >
            <animate
              attributeName="cx"
              begin=".1"
              calcMode="spline"
              dur="1.1"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              values="35;165;165;35;35"
            />
          </circle>
          <circle
            cx="35"
            cy="100"
            r="15"
            fill="#fff"
            stroke="#fff"
            strokeWidth="15"
            opacity=".4"
          >
            <animate
              attributeName="cx"
              begin=".15"
              calcMode="spline"
              dur="1.1"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              values="35;165;165;35;35"
            />
          </circle>
          <circle
            cx="35"
            cy="100"
            r="15"
            fill="#fff"
            stroke="#fff"
            strokeWidth="15"
            opacity=".2"
          >
            <animate
              attributeName="cx"
              begin=".2"
              calcMode="spline"
              dur="1.1"
              keySplines="0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1"
              repeatCount="indefinite"
              values="35;165;165;35;35"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default LoadingPage;
