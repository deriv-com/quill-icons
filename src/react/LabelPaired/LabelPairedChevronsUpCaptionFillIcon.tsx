import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpCaptionFillIcon = (
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
      <path d='m6.516 4.484 4.5 4.5a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0L6 6.08l-3.984 3.96a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l4.5-4.5a.723.723 0 0 1 1.055 0m4.5 9a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0L6 10.58l-3.984 3.96a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l4.5-4.5a.723.723 0 0 1 1.055 0z' />
    </g>
    <defs>
      <clipPath id='e856e74ec22d17467392cbc3bf396fdd__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionFillIcon);
export default ForwardRef;
