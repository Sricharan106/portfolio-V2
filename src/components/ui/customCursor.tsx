import TargetCursor from "../ui/target-cursor";
import useMobileDetection from "../ui/use-mobile";

export default function CursorManager() {
  const checkMobile = useMobileDetection();

  if (checkMobile) {
    return null;
  }

  return <TargetCursor spinDuration={2} hideDefaultCursor />;
}
