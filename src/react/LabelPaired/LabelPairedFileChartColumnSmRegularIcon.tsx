import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 16.875a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629V9H6.813a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V4.626H2a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V16q0 .383.246.629a.85.85 0 0 0 .629.246zm-2.187-8.75h3.062a.7.7 0 0 0-.137-.191L6.566 4.762a.4.4 0 0 0-.191-.11v3.036q.027.41.438.437M2 3.75h4.266q.546 0 .93.383l3.171 3.172q.383.383.383.93V16q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52Q.277 16.739.25 16V5.5q.027-.738.52-1.23.492-.493 1.23-.52m3.938 6.563v5.25q-.029.41-.438.437-.41-.027-.437-.437v-5.25q.027-.411.437-.438.41.027.438.438m2.625 1.75v3.5q-.028.41-.438.437-.41-.027-.437-.437v-3.5q.027-.411.437-.438.41.027.438.438m-5.25 1.75v1.75q-.029.41-.438.437-.41-.027-.437-.437v-1.75q.027-.411.437-.438.41.027.438.438' />
    </g>
    <defs>
      <clipPath id='af747c12c44b6dd59e13fdd8c8b97881__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnSmRegularIcon);
export default ForwardRef;
