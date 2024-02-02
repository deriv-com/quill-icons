import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppleMdIcon = (
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
      <path d='M9.969 12.406q-.063.188.219 1.125.281.97 1.687 1.75-.188.594-.656 1.469a7.5 7.5 0 0 1-1.125 1.531q-.657.656-1.406.719a2.8 2.8 0 0 1-1.126-.281q-.53-.25-1.28-.282-.783.031-1.344.313-.5.22-1 .25-.78-.03-1.47-.75a7.8 7.8 0 0 1-1.187-1.625q-.5-.937-.718-1.531-.438-1.313-.438-2.531.063-2.094 1.156-3.126 1.063-1.03 2.438-1.062.78.063 1.531.375.531.22.875.25.25-.03.75-.219.405-.156.938-.312a3.1 3.1 0 0 1 1.062-.125q1.75.156 2.656 1.406-1.593.937-1.562 2.656M8.188 7.281Q7.25 8.376 6.03 8.344q-.062-1.312.782-2.25.405-.438.968-.75A2.8 2.8 0 0 1 8.938 5q.061.282-.032.875-.125.625-.719 1.406' />
    </g>
    <defs>
      <clipPath id='b4820dff21d2a086__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleMdIcon);
export default ForwardRef;
