import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMinusXlBoldIcon = (
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
      <path d='M20.25 18a1.11 1.11 0 0 1-1.125 1.125H1.875C1.219 19.125.75 18.656.75 18c0-.61.469-1.125 1.125-1.125h17.25c.61 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='c62997b320d6a875d0dcb498e2b0acd2__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusXlBoldIcon);
export default ForwardRef;
