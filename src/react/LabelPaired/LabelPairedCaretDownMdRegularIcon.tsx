import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownMdRegularIcon = (
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
      <path d='m5.188 14.938 3.75-3.563A.21.21 0 0 0 9 11.219.244.244 0 0 0 8.781 11H1.22a.244.244 0 0 0-.219.219q0 .093.063.156l3.75 3.563A.34.34 0 0 0 5 15q.094 0 .188-.062m.687.718Q5.5 16.001 5 16q-.5 0-.875-.344l-3.75-3.531A1.24 1.24 0 0 1 0 11.219q0-.531.344-.875T1.219 10H8.78q.531.03.875.375.345.344.344.844 0 .531-.375.906z' />
    </g>
    <defs>
      <clipPath id='ad6aa9ffd297548d93df264ded6395dc__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownMdRegularIcon);
export default ForwardRef;
