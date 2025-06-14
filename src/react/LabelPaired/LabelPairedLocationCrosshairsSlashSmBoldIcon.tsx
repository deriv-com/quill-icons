import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashSmBoldIcon = (
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
      <path d='M1.29 3.914 5.28 7.031c.82-.793 1.86-1.34 3.063-1.476V4.406c0-.355.273-.656.656-.656.355 0 .656.3.656.656v1.149a5.28 5.28 0 0 1 4.54 4.539h1.148c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.149a4.8 4.8 0 0 1-.71 2.051l3.992 3.145c.3.218.355.628.109.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903.604.604 0 0 1 .903-.109m5.058 3.938 1.039.82A2.73 2.73 0 0 1 9 8.125a2.626 2.626 0 0 1 2.625 2.625c0 .383-.082.738-.219 1.066l1.04.82c.3-.546.492-1.202.492-1.886 0-2.16-1.778-3.937-3.938-3.937-1.04 0-1.969.41-2.652 1.039m3.937 3.09v-.192c0-.71-.574-1.312-1.312-1.312-.164 0-.328.054-.465.109zm.164 3.472 1.121.902a4.7 4.7 0 0 1-1.914.657v1.12c0 .384-.3.657-.656.657a.63.63 0 0 1-.656-.656v-1.121c-2.38-.301-4.266-2.188-4.567-4.54h-1.12A.65.65 0 0 1 2 10.778c0-.382.273-.656.656-.656h1.121c.028-.3.082-.547.164-.82l1.149.902c-.027.192-.027.383-.027.547A3.92 3.92 0 0 0 9 14.688a3.8 3.8 0 0 0 1.45-.274' />
    </g>
    <defs>
      <clipPath id='5b5ea8c808b025bc4abbb3df99c158f3__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashSmBoldIcon);
export default ForwardRef;
