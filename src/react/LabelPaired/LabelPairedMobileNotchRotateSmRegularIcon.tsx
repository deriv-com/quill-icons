import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileNotchRotateSmRegularIcon = (
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
      <path d='M1 5.5c0-.957.766-1.75 1.75-1.75H8c.957 0 1.75.793 1.75 1.75v4.047a1.3 1.3 0 0 0-.191.082 1.5 1.5 0 0 0-.684-.547V5.5A.9.9 0 0 0 8 4.625h-.875v.438c0 .492-.41.875-.875.875H4.5a.864.864 0 0 1-.875-.875v-.438H2.75a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875h5.441c.192.219.41.465.657.656a1.8 1.8 0 0 1-.875.219H2.75C1.766 17.75 1 16.984 1 16zm3.5-.875v.438h1.75v-.438zM8 10.313a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v1.039a3.86 3.86 0 0 1 3.063-1.477c1.64 0 3.062 1.04 3.636 2.46.082.247-.027.493-.246.575-.219.11-.465 0-.574-.246a3.02 3.02 0 0 0-2.816-1.914c-1.04 0-1.97.52-2.516 1.313h1.203a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438H8.438A.43.43 0 0 1 8 12.5zm.273 4.976a.425.425 0 0 1 .247-.547c.218-.11.464 0 .574.219.437 1.148 1.558 1.914 2.844 1.914 1.039 0 1.94-.52 2.488-1.312H13.25a.43.43 0 0 1-.437-.438.45.45 0 0 1 .437-.437h2.188a.47.47 0 0 1 .437.437v2.188a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V16.3a3.92 3.92 0 0 1-3.062 1.449 3.92 3.92 0 0 1-3.665-2.46' />
    </g>
    <defs>
      <clipPath id='f85ba77ab08f8973b2d75222c36f0a51__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileNotchRotateSmRegularIcon);
export default ForwardRef;
