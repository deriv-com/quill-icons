import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBackwardSmBoldIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7.875 6.32v2.707l4.84-3.39a.779.779 0 0 1 .465-.137c.237 0 .428.082.574.246A.731.731 0 0 1 14 6.32v8.86a.731.731 0 0 1-.246.574.731.731 0 0 1-.574.246.863.863 0 0 1-.465-.137l-4.84-3.39v2.707a.731.731 0 0 1-.246.574.731.731 0 0 1-.574.246.8.8 0 0 1-.492-.164L.272 11.27A.602.602 0 0 1 0 10.75c0-.219.091-.392.273-.52l6.29-4.566a.8.8 0 0 1 .492-.164c.237 0 .428.082.574.246a.732.732 0 0 1 .246.574Zm0 4.32v.22l4.813 3.39V7.277l-4.813 3.364Zm-6.098.11 4.785 3.473V7.277L1.777 10.75Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardSmBoldIcon);
export default ForwardRef;
