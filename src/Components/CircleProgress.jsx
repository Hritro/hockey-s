function CircleProgress({strk, ofst,percentage}) {
  return (
    <div>
      <svg
        width="200"
        height="200"
        viewBox="-25 -25 250 250"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{transform: 'rotate(-90deg)'}}
      >
        <circle
          r="90"
          cx="100"
          cy="100"
          fill="transparent"
          stroke="#e0e0e0"
          strokeWidth="16px"
        ></circle>
        <circle
          r="90"
          cx="100"
          cy="100"
          stroke={strk}
          strokeWidth="16px"
          strokeLinecap="round"
          strokeDashoffset={ofst}
          fill="transparent"
          strokeDasharray="565.48px"
        ></circle>
        <text
          x="53px"
          y="117px"
          fill="#000"
          fontSize="52px"
          fontWeight="bold"
          style={{transform: 'rotate(90deg) translate(0px,-196px)'}}
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}

export default CircleProgress;
