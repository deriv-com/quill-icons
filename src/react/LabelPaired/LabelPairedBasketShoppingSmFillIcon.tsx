import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingSmFillIcon = (
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
      <path d='M7.043 4.734 4.801 9h6.37L8.93 4.734a.694.694 0 0 1 .273-.902.694.694 0 0 1 .902.273L12.648 9H15a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875l-1.422 5.688a1.756 1.756 0 0 1-1.695 1.312H4.117c-.82 0-1.504-.547-1.722-1.312L1 10.75a.864.864 0 0 1-.875-.875C.125 9.41.508 9 1 9h2.324l2.543-4.895a.694.694 0 0 1 .903-.273c.3.164.437.574.273.902m-1.668 7.329a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v2.624c0 .247.191.438.438.438a.45.45 0 0 0 .437-.437zM8 11.625a.45.45 0 0 0-.437.438v2.624c0 .247.19.438.437.438a.45.45 0 0 0 .438-.437v-2.626A.47.47 0 0 0 8 11.626m3.5.438a.47.47 0 0 0-.437-.438.45.45 0 0 0-.438.438v2.624c0 .247.191.438.438.438a.45.45 0 0 0 .437-.437z' />
    </g>
    <defs>
      <clipPath id='a11e65e1c3be2f6fa63510cddc8f34fa__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingSmFillIcon);
export default ForwardRef;
