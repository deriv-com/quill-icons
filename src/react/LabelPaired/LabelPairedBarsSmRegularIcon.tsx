import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarsSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.375 5.938A.45.45 0 0 1 .813 5.5h11.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.813a.43.43 0 0 1-.438-.437m0 4.375a.45.45 0 0 1 .438-.438h11.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.813a.43.43 0 0 1-.438-.437m12.25 4.374a.45.45 0 0 1-.437.438H.813a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h11.375a.47.47 0 0 1 .437.438' />
    </g>
    <defs>
      <clipPath id='f5d31f23ce3a888e2f9865fa054500f4__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarsSmRegularIcon);
export default ForwardRef;
