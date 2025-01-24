import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankSmRegularIcon = (
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
      <path d='m7.191 3.832 6.372 3.582a.86.86 0 0 1 .437.738.86.86 0 0 1-.875.848H.848A.85.85 0 0 1 0 8.152c0-.3.164-.574.41-.738l6.371-3.582c.137-.082.301-.082.41 0m1.176 4.293h4.676L7 4.707.93 8.125h4.675c-.109-.191-.136-.41-.136-.656 0-.82.683-1.532 1.531-1.532.82 0 1.531.711 1.531 1.532a1.3 1.3 0 0 1-.164.656M7 6.813c-.383 0-.656.3-.656.656 0 .383.273.656.656.656a.65.65 0 0 0 .656-.656c0-.356-.3-.657-.656-.657m-5.25 6.562v-3.5h.875v3.5h2.188v-3.5h.875v3.5h2.625v-3.5h.874v3.5h2.188v-3.5h.875v3.5a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H1.75a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438m-.656 1.75h11.812a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H1.094a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438m-.657 1.75h13.126a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H.438A.43.43 0 0 1 0 17.313a.45.45 0 0 1 .438-.438' />
    </g>
    <defs>
      <clipPath id='d288f0cbe98729b8715f1f92a4721505__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankSmRegularIcon);
export default ForwardRef;
