import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpMdRegularIcon = (
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
      <path d='m4.813 9.063-3.75 3.562a.21.21 0 0 0-.063.156q.03.188.219.219H8.78A.244.244 0 0 0 9 12.781a.21.21 0 0 0-.062-.156l-3.75-3.562A.34.34 0 0 0 5 9a.34.34 0 0 0-.187.063m-.688-.72Q4.5 8.002 5 8q.5 0 .875.344l3.75 3.562q.375.345.375.875 0 .531-.344.875-.343.345-.875.344H1.22q-.531 0-.875-.344T0 12.781t.375-.906z' />
    </g>
    <defs>
      <clipPath id='0f0774e589925e25__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpMdRegularIcon);
export default ForwardRef;
