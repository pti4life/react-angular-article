// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useRef } from 'react';
import LibraryButton from '../buttons/library-button';
import styles from './app.module.scss';
import ProjectButton from '../buttons/project-button';

export function App() {
  /**✅ We have direct reference to the button */
  const btn = useRef<HTMLButtonElement>(null);

  /**✅ We have direct reference to the native html button through ProjectButton => LibraryButton component, good job react👍 */
  const projectBtn = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.container}>
      {/*✅ We have an extended button, we can pass all the properties we have on the native html button  */}
      <LibraryButton ref={btn} aria-label="my button">
        Library button
      </LibraryButton>
      <ProjectButton
        loading={false}
        ref={projectBtn}
        aria-describedby="description"
      >
        Project button
      </ProjectButton>
    </div>
  );
}

export default App;
