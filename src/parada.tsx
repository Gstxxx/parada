export default function Logo() {
  return (
    <svg
      width="1000"
      height="200"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[400px]"
    >
      {/* Background circle */}
      <circle cx="200" cy="70" r="45" fill="#E87B5A" opacity="0.2" />

      {/* Octagon */}
      <path
        d="M220 35H180L165 50L165 90L180 105H220L235 90V50L220 35Z"
        fill="#B22222"
      />

      {/* Food icons */}
      <path
        d="M185 65C185 65 190 60 195 60C200 60 205 65 205 65"
        stroke="#FFD700"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M190 75C190 75 195 70 200 70C205 70 210 75 210 75"
        stroke="#FFD700"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M180 55C180 55 182 52 185 52C188 52 190 55 190 55"
        stroke="#FFD700"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  )
}

