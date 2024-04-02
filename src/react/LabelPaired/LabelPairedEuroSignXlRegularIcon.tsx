import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.594 16.5H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.172C3.188 10.688 7.219 7.5 12 7.5h2.297c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H12c-3.937 0-7.266 2.531-8.531 6h9.281c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.094C3 17.016 3 17.531 3 18c0 .516.047 1.031.094 1.5h9.656c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.469c1.265 3.516 4.594 6 8.531 6h2.297c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H12c-4.781 0-8.812-3.14-10.078-7.5H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h.844C1.5 19.031 1.5 18.516 1.5 18c0-.469 0-.984.094-1.5' />
    </g>
    <defs>
      <clipPath id='e4e193222aeed35ab1805b0cd93731fb__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignXlRegularIcon);
export default ForwardRef;
