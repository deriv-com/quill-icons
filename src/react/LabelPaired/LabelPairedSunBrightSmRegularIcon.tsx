import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightSmRegularIcon = (
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
      <path d='M7 3.75a.47.47 0 0 1 .438.438v2.187A.45.45 0 0 1 7 6.813a.43.43 0 0 1-.437-.438V4.188A.45.45 0 0 1 7 3.75m-7 7a.45.45 0 0 1 .438-.437h2.187a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438H.438A.43.43 0 0 1 0 10.75m10.938 0a.45.45 0 0 1 .437-.437h2.188a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-2.188a.43.43 0 0 1-.437-.438M7 14.688a.47.47 0 0 1 .438.437v2.188A.45.45 0 0 1 7 17.75a.43.43 0 0 1-.437-.437v-2.188A.45.45 0 0 1 7 14.688M2.05 5.8a.43.43 0 0 1 .602 0l1.559 1.558c.164.164.164.438 0 .63a.463.463 0 0 1-.629 0l-1.531-1.56c-.192-.163-.192-.437 0-.628m0 9.898a.387.387 0 0 1 0-.601l1.532-1.559a.463.463 0 0 1 .629 0 .463.463 0 0 1 0 .629l-1.559 1.531a.387.387 0 0 1-.601 0m7.712-7.71c-.164-.192-.164-.466 0-.63l1.558-1.558c.164-.164.438-.164.63 0 .163.191.163.465 0 .629l-1.56 1.558c-.163.164-.437.164-.628 0m0 5.55c.191-.164.465-.164.629 0l1.558 1.559a.43.43 0 0 1 0 .601c-.191.192-.465.192-.629 0l-1.558-1.531a.463.463 0 0 1 0-.629m-.575-2.789c0-.766-.437-1.477-1.093-1.887-.684-.383-1.531-.383-2.188 0-.683.41-1.093 1.121-1.093 1.887 0 .793.41 1.504 1.093 1.914.657.383 1.504.383 2.188 0 .656-.41 1.094-1.121 1.094-1.914m-5.25 0A3 3 0 0 1 5.47 8.125a2.94 2.94 0 0 1 3.062 0c.93.547 1.531 1.531 1.531 2.625a3.07 3.07 0 0 1-1.53 2.652 2.94 2.94 0 0 1-3.063 0 3.01 3.01 0 0 1-1.532-2.652' />
    </g>
    <defs>
      <clipPath id='4f0c7837b0d6efa76b131d9732bf81c4__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightSmRegularIcon);
export default ForwardRef;
