import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsFilterXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 10.125C0 9.515.469 9 1.125 9h18.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 11.25 0 10.781 0 10.125m3 7.5c0-.61.469-1.125 1.125-1.125h12.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H4.125C3.469 18.75 3 18.281 3 17.625m10.5 7.5a1.11 1.11 0 0 1-1.125 1.125h-3.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='aefc90e64f3acb17af36c6d458065134__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsFilterXlBoldIcon);
export default ForwardRef;
