import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardSmBoldIcon = (
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
      <path d='M7.875 6.32v2.735l4.813-3.39c.136-.11.3-.165.464-.165.465 0 .848.383.848.848v8.832c0 .465-.383.82-.82.82-.192 0-.356-.027-.492-.137l-4.84-3.39v2.707c0 .465-.356.82-.82.82a.9.9 0 0 1-.465-.137L.245 11.297A.69.69 0 0 1 0 10.75c0-.191.082-.383.246-.52l6.317-4.566q.204-.165.492-.164c.437 0 .82.383.82.82m0 4.32v.247l4.813 3.363V7.277zm-6.125.11 4.813 3.473V7.305z' />
    </g>
    <defs>
      <clipPath id='67f5b10eeb9c330b8435d0e16f292395__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmBoldIcon);
export default ForwardRef;
