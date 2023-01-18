import styles from './Typography.module.scss';

import React from 'react';

export const H1 = (props: any) => {
  return <h1 className={styles.h1} {...props} />;
};

export const H2 = (props: any) => {
  return <h2 className={styles.h2} {...props} />;
};

export const H3 = (props: any) => {
  return <h3 className={styles.h3} {...props} />;
};

export const H4 = (props: any) => {
  return <h4 className={styles.h4} {...props} />;
};

export const P = (props: any) => {
  return <p className={styles.p} {...props} />;
};

export const CodeBlock = (props: any) => {
  return <p className={styles.code} {...props} />;
};
