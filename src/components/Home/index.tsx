import * as S from './styles'

export type HomeProps = {
  name?: string
}

const Home = ({ name = 'Next Boilerlate' }: HomeProps) => (
  <S.Wrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="#DFDEDE" />
      <g stroke="#DFDEDE" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>

    <div>
      <h1>{name}</h1>
      <a
        href="https://github.com/melquisedecfelipe/next"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/melquisedecfelipe/next
      </a>
    </div>
  </S.Wrapper>
)

export default Home
