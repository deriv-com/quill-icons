import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.758 22.648.898-3.046a3.3 3.3 0 0 1 .899-1.446L14.43 6.242a2.47 2.47 0 0 1 1.758-.703q.975 0 1.757.703l1.563 1.563q.156.156.312.39a2.5 2.5 0 0 1 .39 1.602 2.5 2.5 0 0 1-.702 1.523L7.633 23.195l-.156.157q-.586.507-1.329.742l-3.046.898-1.641.469q-.547.156-.938-.234-.351-.39-.234-.938zm2.46-1.601-.663 2.148 2.148-.625.938-.273q.35-.118.664-.39l8.906-8.946-2.422-2.422-8.906 8.906-.078.078a2 2 0 0 0-.352.586zm6.72 2.578h11.875q.858.078.937.938-.079.858-.937.937H9.938q-.86-.079-.938-.937.078-.86.938-.938' />
    </g>
    <defs>
      <clipPath id='23a70fc4ee3c6ff9__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineLgBoldIcon);
export default ForwardRef;
