const useScroll = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      throw new Error("the section does not exist to which you want to scroll");
    }

    const navbarHeight = 200;
    window.scrollTo({
      top: section.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  };

  return { scrollToSection };
};

export default useScroll;
