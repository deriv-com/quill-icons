import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.512 4.297 1.066 1.066a1.766 1.766 0 0 1 0 2.489l-1.312 1.312L8.71 5.61l1.312-1.312a1.766 1.766 0 0 1 2.489 0M1.71 12.609l6.371-6.37 3.555 3.554-6.371 6.371a2.4 2.4 0 0 1-1.012.602l-3.309.957a.56.56 0 0 1-.629-.164.56.56 0 0 1-.164-.63l.957-3.308c.11-.383.329-.738.602-1.012m5.195 3.829h8.313c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H6.906a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' />
    </g>
    <defs>
      <clipPath id='c19254045eecf7d07872a6334790a9bc__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineSmFillIcon);
export default ForwardRef;
