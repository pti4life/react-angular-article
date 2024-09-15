import { forwardRef } from 'react';
import LibraryButton, { LibraryButtonProps } from './library-button';
import Spinner from '../spinner';

// The button used across the project, we can easily extend and customize the library button we created previously
const ProjectButton = forwardRef<
  HTMLButtonElement,
  LibraryButtonProps & { loading?: boolean }
>(({ children, loading, ...props }, ref) => {
  return (
    <LibraryButton disabled={loading || props.disabled} ref={ref} {...props}>
      {loading ? <Spinner /> : children}
    </LibraryButton>
  );
});

export default ProjectButton;
