import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingSmBoldIcon = (
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
      <path d='M6.77 3.832c.3.164.437.574.273.902L4.801 9h6.37L8.93 4.734a.694.694 0 0 1 .273-.902.694.694 0 0 1 .902.273L12.648 9h2.571c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-.547l-1.531 6.126a1.756 1.756 0 0 1-1.696 1.312h-6.89c-.82 0-1.504-.547-1.723-1.312l-1.504-6.125H.781a.63.63 0 0 1-.656-.657C.125 9.301.398 9 .781 9h2.543l2.543-4.895a.694.694 0 0 1 .903-.273m-4.102 6.48 1.45 5.797a.44.44 0 0 0 .437.328h6.89a.44.44 0 0 0 .41-.328l1.45-5.797zm3.582 1.97v2.187c0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656V12.28c0-.355.274-.656.657-.656.355 0 .656.3.656.656M8 11.624c.355 0 .656.3.656.656v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V12.28c0-.355.273-.656.656-.656m3.063.656v2.188c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656V12.28c0-.355.273-.656.656-.656.356 0 .656.3.656.656' />
    </g>
    <defs>
      <clipPath id='1dfa5afa00ff85ebf1d81364f4d44dde__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingSmBoldIcon);
export default ForwardRef;
