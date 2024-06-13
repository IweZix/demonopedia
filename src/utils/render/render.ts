const clearPage = (): void => {
  const main = document.querySelector('main') as HTMLElement | null;
  if (main !== null) {
    main.innerHTML = '';
  }
};

const renderPageTitle = (title: string): void => {
  if (!title) return;
  window.document.title = title;
};

export { clearPage, renderPageTitle };
