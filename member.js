function skillsMember() {
  const member = document.querySelector('.member');
  const memberBtn = document.querySelector('.member__btn');
  const memberClose = document.querySelector('.member__close');
  const memberList = document.querySelector('.member__list');

  if (memberBtn) {
    memberBtn.addEventListener('click', () => {
      member.classList.add('member--active');
      memberList.classList.add('member__list--active');
    });
  }

  if (memberClose) {
    memberClose.addEventListener('click', () => {
      member.classList.remove('member--active');
      memberList.classList.remove('member__list--active');
    });
  }
}