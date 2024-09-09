import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMoonSmFillIcon = (
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
      <path d='M6.348 4.625v.027h.52c.19.028.355.164.382.356a.39.39 0 0 1-.191.465 4.802 4.802 0 0 0 2.352 8.996c.273 0 .546 0 .82-.055.19-.027.382.055.464.219.082.191.055.383-.082.52a6.08 6.08 0 0 1-4.265 1.722C2.984 16.875.25 14.141.25 10.75c0-3.363 2.734-6.125 6.098-6.125' />
    </g>
    <defs>
      <clipPath id='80f9fa4718a1dac465d0cff612606809__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMoonSmFillIcon);
export default ForwardRef;
