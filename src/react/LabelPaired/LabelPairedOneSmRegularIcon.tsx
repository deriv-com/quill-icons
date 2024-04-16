import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.938 5.063V16h2.625a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.438A.43.43 0 0 1 0 16.438.45.45 0 0 1 .438 16h2.625V5.883l-1.97 1.312a.42.42 0 0 1-.6-.136.42.42 0 0 1 .136-.602l2.625-1.75a.5.5 0 0 1 .437-.027c.137.082.247.246.247.383' />
    </g>
    <defs>
      <clipPath id='7f39a454a75aa290caa32ccb3122f9fe__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneSmRegularIcon);
export default ForwardRef;
