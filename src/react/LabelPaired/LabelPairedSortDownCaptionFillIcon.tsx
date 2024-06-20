import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownCaptionFillIcon = (
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
      <path d='M4.516 14.54a.723.723 0 0 1-1.055 0l-3-3a.76.76 0 0 1-.164-.821A.77.77 0 0 1 1 10.25h6a.76.76 0 0 1 .68.469.76.76 0 0 1-.164.82z' />
    </g>
    <defs>
      <clipPath id='4e6321cab895651c722c604115c08db5__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownCaptionFillIcon);
export default ForwardRef;
