import React from "react";

import Image from "next/image";
import styles from './Help.module.scss';

export const Help = () => {

  return <section className={styles.help}>
    <h2 className={styles.title}>What we can help with</h2>
    <div className={styles.treatments}>
      <article className={styles.treatment} data-treatment="1">
        <div className={styles.image}>
          <Image src="/photo1.jpg" alt="back of man's head with bald patch" width="370" height="445" />
        </div>
        <div className={styles.info}>
          <div className={styles.content}>
            <p className={styles.treatmentTitle}>HAIR LOSS</p>
            <h3 className={styles.subtitle}>Hair loss needn’t be irreversible. We can help!</h3>
            <p className={styles.description}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
          </div>
        </div>
      </article>
      <article className={styles.treatment} data-treatment="2">
        <div className={styles.info}>
          <div className={styles.content}>
            <p className={styles.treatmentTitle}>ERECTILE DYSFUNCTION</p>
            <h3 className={styles.subtitle}>Erections can be a tricky thing. But no need to feel down!</h3>
            <p className={styles.description}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
          </div>
        </div>
        <div className={styles.image}>
          <Image src="/photo2.jpg" alt="smiling man with beard" width="370" height="445" />
        </div>
      </article>
    </div>
  </section>
}