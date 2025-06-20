import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.008 5.281 1.37 12.5h6.754V7.688a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438V12.5h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H9v3.063a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.036H.66a.43.43 0 0 1-.355-.218.5.5 0 0 1-.028-.438l3.938-7.875c.11-.219.383-.3.601-.191.22.11.301.383.192.601' />
    </g>
    <defs>
      <clipPath id='ba628503de9d80f1d781384ed2f699b4__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourSmRegularIcon);
export default ForwardRef;
