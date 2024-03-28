import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 5.5V6c0 .281-.25.5-.5.5h-3A.494.494 0 0 1 4 6v-.5H3c-.562 0-1 .469-1 1v11c0 .563.438 1 1 1h6c.531 0 1-.437 1-1v-11c0-.531-.469-1-1-1zm-7.5 1C.5 5.125 1.594 4 3 4h6c1.375 0 2.5 1.125 2.5 2.5v11c0 1.406-1.125 2.5-2.5 2.5H3a2.47 2.47 0 0 1-2.5-2.5z' />
    </g>
    <defs>
      <clipPath id='e1a6a7bc6c01bf2a715699a1d3884469__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchMdBoldIcon);
export default ForwardRef;
