import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeSmBoldIcon = (
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
      <path d='M.656 4.625c.356 0 .657.3.657.656V16.22c0 .383-.301.656-.657.656A.63.63 0 0 1 0 16.219V5.28c0-.355.273-.656.656-.656m2.407 0a.47.47 0 0 1 .437.438v11.375a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V5.063a.45.45 0 0 1 .438-.438m1.968 0c.356 0 .657.3.657.656V16.22c0 .383-.301.656-.657.656a.63.63 0 0 1-.656-.656V5.28c0-.355.273-.656.656-.656m3.063 0c.355 0 .656.3.656.656V16.22c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.28c0-.355.273-.656.656-.656m4.594.656c0-.355.273-.656.656-.656.355 0 .656.3.656.656V16.22c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656zm-1.75-.218a.45.45 0 0 1 .437-.438.47.47 0 0 1 .438.438v11.375a.45.45 0 0 1-.438.437.43.43 0 0 1-.437-.437z' />
    </g>
    <defs>
      <clipPath id='8231010de8cab3a132b854052ef3c0fc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeSmBoldIcon);
export default ForwardRef;
