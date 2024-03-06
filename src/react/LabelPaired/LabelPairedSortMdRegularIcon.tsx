import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortMdRegularIcon = (
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
      <path d='M1.063 9.625A.21.21 0 0 0 1 9.781q.03.188.219.219H8.78A.244.244 0 0 0 9 9.781a.21.21 0 0 0-.062-.156l-3.75-3.562A.34.34 0 0 0 5 6a.34.34 0 0 0-.187.063zm-.688-.75 3.75-3.531Q4.5 5 5 5t.875.344l3.75 3.562q.375.345.375.875 0 .531-.344.875-.343.345-.875.344H1.22q-.531 0-.875-.344T0 9.781t.375-.906m.688 5.5 3.75 3.563A.34.34 0 0 0 5 18q.094 0 .188-.062l3.75-3.563A.21.21 0 0 0 9 14.219.244.244 0 0 0 8.781 14H1.22a.244.244 0 0 0-.219.219q0 .093.063.156m-.688.75A1.24 1.24 0 0 1 0 14.219q0-.531.344-.875T1.219 13H8.78q.531 0 .875.344.345.343.344.875 0 .531-.375.906l-3.75 3.531Q5.5 19.001 5 19q-.5 0-.875-.344z' />
    </g>
    <defs>
      <clipPath id='17b05103148948a81383b070b6ee1866__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortMdRegularIcon);
export default ForwardRef;
