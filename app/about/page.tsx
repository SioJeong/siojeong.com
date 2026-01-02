import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.aboutContainer}>
      <section>
        <h2>
          안녕하세요
          <br />
          설득하고 실행하는
          <br />
          Product Maker 정상영입니다
        </h2>
      </section>
      <section>
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
      </section>
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
