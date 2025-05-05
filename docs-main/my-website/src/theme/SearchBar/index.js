
import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function SearchBarWrapper() {
  const history = useHistory();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchButton = document.querySelector('.DocSearch-Button');
        if (searchButton) {
          searchButton.click();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [history]);

  return null;
}
