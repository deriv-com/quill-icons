import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m7.3 3.832 6.208 3.445c.3.164.492.465.492.793 0 .52-.437.93-.957.93H.93C.41 9 0 8.59 0 8.07c0-.328.164-.629.465-.793l6.207-3.445a.64.64 0 0 1 .629 0M6.235 7.688c-.082-.11-.109-.274-.109-.438 0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875.76.76 0 0 1-.137.438h3.828L7 5.172 2.406 7.688zM1.75 9.875h1.313v4.375h1.75V9.875h1.312v4.375h1.75V9.875h1.313v4.375h1.75V9.875h1.312v4.375h.219c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H1.75a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656zm-.875 6.563h12.469c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.875a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' />
    </g>
    <defs>
      <clipPath id='6024b7e4f813044774887416436f6f04__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankSmBoldIcon);
export default ForwardRef;
