const useScroll = () => {
  const scrollToSection = (id) => {
    if (!id) return;

    const section = document.getElementById(id);

    if (!section) {
      throw new Error("the section does not exist to which you want to scroll");
    }

    const navbarHeight = window.innerHeight * 0.12;

    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };

  return { scrollToSection };
};

export default useScroll;
