import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortCaptionBoldIcon = (
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
      <path d='M1.89 7.625h4.196L4 5.539zm2.626-3.14 3 3c.21.21.28.538.164.82a.77.77 0 0 1-.703.468H1a.77.77 0 0 1-.703-.468.76.76 0 0 1 .164-.82l3-3a.723.723 0 0 1 1.055 0m-2.625 6.89L4 13.485l2.086-2.11zm2.625 3.164a.723.723 0 0 1-1.055 0l-3-3a.76.76 0 0 1-.164-.82A.77.77 0 0 1 1 10.25h6a.76.76 0 0 1 .68.469.76.76 0 0 1-.164.82z' />
    </g>
    <defs>
      <clipPath id='e80555eb45fca417781e8090bfdf4e1e__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortCaptionBoldIcon);
export default ForwardRef;
