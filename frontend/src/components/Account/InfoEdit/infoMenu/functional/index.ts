export function changeColor(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  const btn = e.target as HTMLElement;
  if (!btn.classList.contains('infoBtnClicked')) {
    document.querySelectorAll('.chatsBtn').forEach((eachBtn) => {
      eachBtn.classList.remove('infoBtnClicked');
      btn.classList.add('infoBtnClicked');
    });
  }
}
