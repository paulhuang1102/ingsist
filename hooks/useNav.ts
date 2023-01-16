import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const useNav = (paths: string[]) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const { pathname } = router;
  const i = paths.indexOf(pathname);

  useEffect(() => {
    setSelectedIndex(i);
  }, [i]);

  return [selectedIndex, setSelectedIndex] as const;
};

export default useNav;
