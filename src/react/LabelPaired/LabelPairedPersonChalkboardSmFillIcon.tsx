import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPersonChalkboardSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.5 6.375a1.31 1.31 0 0 1-1.148-.656c-.247-.383-.247-.903 0-1.313.246-.383.656-.656 1.148-.656.465 0 .875.273 1.121.656.246.41.246.93 0 1.313-.246.41-.656.656-1.121.656m-.219 10.5c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-6.098l-.793 1.313a.885.885 0 0 1-1.203.3.885.885 0 0 1-.3-1.203L2.82 8.535A2.67 2.67 0 0 1 5.09 7.25H9V5.063c0-.711.574-1.313 1.313-1.313h6.124c.711 0 1.313.602 1.313 1.313v6.125c0 .738-.602 1.312-1.312 1.312h-6.125A1.296 1.296 0 0 1 9 11.188V9.875h1.75v.875H16V5.5h-5.25v1.75h.438a.9.9 0 0 1 .874.875c0 .492-.41.875-.874.875H7.469v7.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-3.5H5.28z' />
    </g>
    <defs>
      <clipPath id='40739860b16ead46de6a694335800885__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPersonChalkboardSmFillIcon);
export default ForwardRef;
