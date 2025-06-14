import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingSmRegularIcon = (
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
      <path d='M9.066 3.832a.433.433 0 0 1 .602.137L12.621 9h2.817a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-.657l-1.64 6.563a1.756 1.756 0 0 1-1.696 1.312h-6.89c-.82 0-1.504-.547-1.723-1.312L1.219 9.875H.562a.43.43 0 0 1-.437-.437A.45.45 0 0 1 .563 9h2.789l2.953-5.031a.433.433 0 0 1 .601-.137c.192.11.274.383.137.602L4.363 9h7.246L8.93 4.434a.433.433 0 0 1 .137-.602M2.121 9.875l1.586 6.344c.082.383.438.656.848.656h6.89a.9.9 0 0 0 .848-.656l1.586-6.344zm4.129 2.188v2.624a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438M8 11.625a.47.47 0 0 1 .438.438v2.624a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.437v-2.626A.45.45 0 0 1 8 11.626m2.625.438v2.624a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437v-2.626a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438' />
    </g>
    <defs>
      <clipPath id='7f72925eefa011b59ee47860591059c1__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingSmRegularIcon);
export default ForwardRef;
