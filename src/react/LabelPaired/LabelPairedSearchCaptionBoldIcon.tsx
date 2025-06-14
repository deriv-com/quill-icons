import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSearchCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.625 8.375c0-1.336-.727-2.555-1.875-3.234a3.7 3.7 0 0 0-3.75 0 3.72 3.72 0 0 0-1.875 3.234A3.73 3.73 0 0 0 3 11.633c1.148.68 2.578.68 3.75 0a3.78 3.78 0 0 0 1.875-3.258m-.727 3.844a4.9 4.9 0 0 1-3.023 1.031A4.87 4.87 0 0 1 0 8.375C0 5.703 2.18 3.5 4.875 3.5c2.672 0 4.875 2.203 4.875 4.875a4.95 4.95 0 0 1-1.055 3.047l3.14 3.117c.212.234.212.586 0 .797-.233.234-.585.234-.796 0z' />
    </g>
    <defs>
      <clipPath id='94eb71d8539c17ef477017aa83fba1e8__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSearchCaptionBoldIcon);
export default ForwardRef;
