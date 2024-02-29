import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckSmRegularIcon = (
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
      <path d='M5.223 5.691v.028a.45.45 0 0 1-.52.191q-1.121-.3-2.023.52-.82.902-.52 2.023.083.328-.219.52Q.93 9.52.875 10.75q.054 1.23 1.094 1.805.273.164.191.492-.3 1.121.52 2.023.902.82 2.023.52.328-.082.52.219Q5.769 16.82 7 16.875q1.23-.055 1.805-1.094.164-.273.492-.191 1.121.3 2.023-.52.82-.902.52-2.023-.082-.328.219-.52 1.011-.547 1.066-1.777-.055-1.23-1.094-1.777a.45.45 0 0 1-.191-.52q.3-1.121-.52-2.023-.902-.82-2.023-.52-.328.082-.52-.219Q8.231 4.68 7 4.625q-1.23.055-1.777 1.066M7 3.75q1.53.055 2.379 1.258 1.45-.246 2.57.793 1.04 1.12.793 2.57Q13.945 9.22 14 10.75q-.055 1.53-1.258 2.379.246 1.45-.793 2.57-1.12 1.04-2.57.793Q8.53 17.695 7 17.75q-1.53-.055-2.379-1.258-1.45.246-2.57-.793-1.04-1.12-.793-2.57Q.055 12.28 0 10.75q.055-1.53 1.258-2.379-.246-1.45.793-2.57 1.12-1.04 2.57-.793Q5.47 3.805 7 3.75M9.926 9.3l-3.5 3.5q-.3.274-.602 0l-1.75-1.75q-.273-.3 0-.6.3-.274.602 0l1.449 1.421 3.2-3.172q.3-.273.6 0 .274.3 0 .602' />
    </g>
    <defs>
      <clipPath id='01e68c9facd0eaa97ef7e06e0541157d__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckSmRegularIcon);
export default ForwardRef;
