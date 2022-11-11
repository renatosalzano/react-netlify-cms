import { forwardRef } from "react";

interface Props {
  classNameWrapper: string;
  onOpenMediaLibrary: any;
}

const TestControl = forwardRef<any, Props>(
  ({ classNameWrapper, onOpenMediaLibrary }, ref) => {
    function onClick(e: any) {
      e.preventDefault();
      onOpenMediaLibrary({
        controlID: "asdasdadasdad",
        forImage: false,
      });
    }
    return (
      <div ref={ref} className={classNameWrapper}>
        <button onClick={onClick}>CLICK ME</button>
      </div>
    );
  }
);

export default TestControl;
