import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpMdRegularIcon = (
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
      <path d='m4.813 6.063-3.75 3.562A.21.21 0 0 0 1 9.781q.03.188.219.219H8.78A.244.244 0 0 0 9 9.781a.21.21 0 0 0-.062-.156l-3.75-3.562A.34.34 0 0 0 5 6a.34.34 0 0 0-.187.063m-.688-.72Q4.5 5.002 5 5q.5 0 .875.344l3.75 3.531q.375.375.375.906t-.344.875q-.343.345-.875.344H1.22q-.531 0-.875-.344T0 9.781t.375-.906z' />
    </g>
    <defs>
      <clipPath id='64827aad5c63dabc__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpMdRegularIcon);
export default ForwardRef;
