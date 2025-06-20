import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionSmBoldIcon = (
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
      <path d='M.25 6.156A2.41 2.41 0 0 1 2.656 3.75h8.313c.82 0 1.531.71 1.531 1.531v3.91a4.1 4.1 0 0 0-1.312.602V5.281c0-.11-.11-.218-.22-.218H2.657a1.08 1.08 0 0 0-1.094 1.093v7.41c.247-.109.547-.191.876-.191H9v.438c0 .3.027.601.055.874H2.438a.88.88 0 0 0-.876.876c0 .492.383.874.876.874h7.328c.328.52.765.985 1.257 1.313H2.438A2.16 2.16 0 0 1 .25 15.563V6.156m3.5 1.313c0-.356.273-.657.656-.657H9.22c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H4.406a.63.63 0 0 1-.656-.656m0 2.187c0-.355.273-.656.656-.656H9.22c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H4.406a.63.63 0 0 1-.656-.656m6.125 4.156c0-2.16 1.75-3.937 3.938-3.937 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m2.188-1.257v.164c0 .246.19.437.437.437a.45.45 0 0 0 .438-.437v-.164c0-.137.109-.274.246-.274h1.12c.192 0 .383.192.383.383 0 .164-.082.274-.218.356l-.875.437a.48.48 0 0 0-.219.41v.383c0 .246.191.438.438.438a.45.45 0 0 0 .437-.438v-.137l.629-.328c.41-.219.684-.656.684-1.12 0-.684-.575-1.231-1.258-1.231h-1.121c-.63 0-1.121.492-1.121 1.12m1.093 3.226c0 .383.274.656.656.656a.65.65 0 0 0 .657-.656c0-.355-.301-.656-.656-.656-.383 0-.657.3-.657.656' />
    </g>
    <defs>
      <clipPath id='23006952f26156e2152aea27fee35f29__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionSmBoldIcon);
export default ForwardRef;
