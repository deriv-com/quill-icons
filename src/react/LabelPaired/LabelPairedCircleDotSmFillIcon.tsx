import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedCircleDotSmFillIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M7 17.75c-1.276-.018-2.443-.328-3.5-.93-1.057-.62-1.914-1.476-2.57-2.57-.62-1.112-.93-2.279-.93-3.5s.31-2.388.93-3.5C1.586 6.156 2.443 5.3 3.5 4.68c1.057-.602 2.224-.912 3.5-.93 1.276.018 2.443.328 3.5.93 1.057.62 1.914 1.476 2.57 2.57.62 1.112.93 2.279.93 3.5s-.31 2.388-.93 3.5c-.656 1.094-1.513 1.95-2.57 2.57-1.057.602-2.224.912-3.5.93Zm0-9.625c-.474 0-.911.118-1.313.355a2.63 2.63 0 0 0-1.313 2.27 2.631 2.631 0 0 0 1.313 2.27c.402.237.839.355 1.313.355s.911-.118 1.313-.355a2.631 2.631 0 0 0 1.313-2.27 2.63 2.63 0 0 0-1.313-2.27A2.534 2.534 0 0 0 7 8.125Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDotSmFillIcon);
export default ForwardRef;
