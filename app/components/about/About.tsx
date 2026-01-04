import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.aboutContainer}>
      <section className={styles.introSection}>
        <section>
          <h2>설득하고 실행합니다</h2>
        </section>
        <p>
          <strong>읽는 사람이 덜 헷갈리게 쓰는 법</strong>을 꽤 집요하게
          연습해왔습니다. 26년에는 제품을 만들면서의 생각을 정리하고 가끔은 내가
          왜 이런 기준으로 일하는지 기록하고 싶습니다. 결국 내가 만든 것들이{' '}
          <strong>누군가에게 효용으로 남길</strong> 바랍니다.
        </p>
        <p>
          저는 문제를 풀기 전에 <strong>문제를 먼저 제대로 잡는 것</strong>에
          시간을 씁니다. 지금 우리가 풀어야 하는 게 뭔지부터 정리해야 결과가
          흔들리지 않더라구요. 그래서 How로 바로 달리기보다 What을 여러 번
          묻습니다. 사용자가 실제로 막히는 지점이 어디인지, 팀이 진짜로 바꾸고
          싶은 게 뭔지, 그걸 한 문장으로 말할 수 있을 때까지요.
        </p>
        <p>
          개발은 무기 중 하나지만 항상 첫 번째 선택은 아닙니다. 오히려 코드 없이
          해결되는 부분을 먼저 찾습니다. 제 성향은{' '}
          <strong>디테일로 설득하는 사람</strong>에 가깝습니다. 문장 한 줄, 버튼
          위치 하나가 문제를 끝내는 경우가 많더라구요. 저는 기준을 세우고, 그
          기준을 팀이 납득할 수 있게 설명하는 과정까지가 일이라고 생각합니다.
        </p>
      </section>
      {/* <section>
        <h2>resume & portfolio</h2>
        <ul>
          <li>
            <a
              href="https://foremost-pasta-075.notion.site/Frontend-Engineer-146778bc7a0180729cdcf1d428d77d80"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notion
            </a>
          </li>
        </ul>
      </section> */}
      <section>
        <h2>contact</h2>
        <ul>
          <li>jeongsangyoung.dev@gmail.com</li>
          <li>
            <a
              href="https://github.com/SioJeong"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jeongsangyoung"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
