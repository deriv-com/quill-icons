import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornSmBoldIcon = (
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
      <path d='m11.813 5.773-.301.301a8.5 8.5 0 0 1-5.824 2.489v3.527c2.187.027 4.265.93 5.824 2.488l.3.3zM4.375 7.25h1.094a7.2 7.2 0 0 0 5.113-2.105l1.04-1.04c.546-.546 1.503-.164 1.503.63v3.937c.492.246.875.902.875 1.64 0 .766-.383 1.422-.875 1.668v3.938c0 .793-.957 1.176-1.504.629l-1.039-1.04C9.27 14.196 7.52 13.43 5.687 13.403v2.817c0 .847-.71 1.531-1.53 1.531H3.28a1.53 1.53 0 0 1-1.531-1.531v-2.844c-.984 0-1.75-.766-1.75-1.75V9c0-.957.766-1.75 1.75-1.75zm-1.312 6.125v2.844c0 .136.082.218.218.218h.875c.11 0 .219-.082.219-.218v-2.844zM1.75 8.563A.45.45 0 0 0 1.313 9v2.625c0 .246.19.438.437.438h2.625v-3.5z' />
    </g>
    <defs>
      <clipPath id='e1faf331c1d71173426a386ca5d63b9f__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornSmBoldIcon);
export default ForwardRef;
