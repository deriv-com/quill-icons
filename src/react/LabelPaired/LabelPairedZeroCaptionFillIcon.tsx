import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedZeroCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8A3.746 3.746 0 0 1 4 4.25 3.76 3.76 0 0 1 7.75 8v3A3.746 3.746 0 0 1 4 14.75 3.73 3.73 0 0 1 .25 11zM4 5.75A2.25 2.25 0 0 0 1.75 8v3a2.25 2.25 0 0 0 4.5 0V8A2.25 2.25 0 0 0 4 5.75' />
    </g>
    <defs>
      <clipPath id='7a424c0355a2bb681744d29292b0c72a__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedZeroCaptionFillIcon);
export default ForwardRef;
