import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortDownMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.813 17.938A.34.34 0 0 0 5 18q.094 0 .188-.062l3.75-3.563A.21.21 0 0 0 9 14.219.244.244 0 0 0 8.781 14H1.22a.244.244 0 0 0-.219.219q0 .093.063.156zm-.688.718-3.75-3.531A1.24 1.24 0 0 1 0 14.219q0-.531.344-.875T1.219 13H8.78q.531 0 .875.344.345.343.344.875 0 .531-.375.906l-3.75 3.531Q5.5 19.001 5 19q-.5 0-.875-.344' />
    </g>
    <defs>
      <clipPath id='47879d4e7b0a8441__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortDownMdRegularIcon);
export default ForwardRef;
