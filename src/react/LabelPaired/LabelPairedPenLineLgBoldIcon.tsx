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
      <path d='m.758 22.648.898-3.046a3.4 3.4 0 0 1 .86-1.446L14.39 6.281a2.523 2.523 0 0 1 3.554 0l1.524 1.524c.117.117.234.273.312.39a2.49 2.49 0 0 1-.312 3.164L7.594 23.234c-.04.04-.117.078-.157.157a4.2 4.2 0 0 1-1.289.703l-3.046.898-1.68.469a.8.8 0 0 1-.899-.234.8.8 0 0 1-.234-.899zm2.422-1.601-.625 2.148 2.148-.625.899-.273c.273-.078.468-.195.664-.39l8.945-8.946-2.422-2.422-8.945 8.945c-.04 0-.04.04-.078.078-.157.157-.235.352-.313.586zm6.758 2.578h11.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H9.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938' />
    </g>
    <defs>
      <clipPath id='743aa598da41d9553a24482b0ca1ae16__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineLgBoldIcon);
export default ForwardRef;
