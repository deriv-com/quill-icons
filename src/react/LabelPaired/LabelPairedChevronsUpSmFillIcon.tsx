import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.602 4.898 5.25 5.25a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L7 6.759l-4.648 4.62a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l5.25-5.25a.843.843 0 0 1 1.23 0m5.25 10.5a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0L7 12.009l-4.648 4.62a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l5.25-5.25a.843.843 0 0 1 1.23 0z' />
    </g>
    <defs>
      <clipPath id='1de3a533583e3b6b188dbe7e267e72bf__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpSmFillIcon);
export default ForwardRef;
