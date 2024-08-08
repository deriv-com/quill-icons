import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownCaptionBoldIcon = (
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
      <path d='m4 13.484 2.086-2.109H1.89zm-.54 1.055-3-3a.76.76 0 0 1-.163-.82A.77.77 0 0 1 1 10.25h6c.305 0 .563.188.68.469a.76.76 0 0 1-.164.82l-3 3a.723.723 0 0 1-1.055 0' />
    </g>
    <defs>
      <clipPath id='2301d2caeced4389d76b41353e6a45e8__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownCaptionBoldIcon);
export default ForwardRef;
