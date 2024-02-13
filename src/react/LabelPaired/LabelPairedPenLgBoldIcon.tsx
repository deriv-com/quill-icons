import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.406 19.602a3.3 3.3 0 0 1 .899-1.446L14.18 6.242q.78-.703 1.758-.703a2.47 2.47 0 0 1 1.757.703l1.563 1.563.312.39a2.5 2.5 0 0 1 .39 1.602 2.5 2.5 0 0 1-.702 1.523L7.383 23.195l-.156.157q-.586.507-1.329.742l-3.046.898-1.641.469q-.547.156-.938-.234t-.234-.938l.469-1.64zm1.797.507-.234.938-.664 2.148 2.148-.625.938-.273q.35-.118.664-.39l8.906-8.946-2.422-2.422-8.906 8.906-.04.04-.038.038a2 2 0 0 0-.352.586' />
    </g>
    <defs>
      <clipPath id='cd05f572250c348ec132edac0c7107a7__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLgBoldIcon);
export default ForwardRef;
