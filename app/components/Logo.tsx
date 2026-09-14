import styles from "./Logo.module.css";

export function Logo({
  full = false,
  hideWordOnMobile = false,
}: {
  full?: boolean;
  hideWordOnMobile?: boolean;
}) {
  return (
    <span className={styles.logo}>
      <svg
        className={styles.mark}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 50V27L32 12L52 27V50"
          stroke="var(--brass)"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M25 50V34H39V50"
          stroke="var(--brass)"
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`${styles.word} ${hideWordOnMobile ? styles.wordHideOnMobile : ""}`}>
        <span className={styles.line1}>Welcome Home</span>
        {full && <span className={styles.line2}>Properties</span>}
      </span>
    </span>
  );
}
