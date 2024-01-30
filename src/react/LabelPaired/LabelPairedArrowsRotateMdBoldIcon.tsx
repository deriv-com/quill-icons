import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowsRotateMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.5 10.25q-.063.687-.75.75h-4.5q-.687-.063-.75-.75.063-.687.75-.75h2.688l-1.626-1.625Q9.939 6.531 8 6.5q-1.72.03-3.062.938a5.5 5.5 0 0 0-2 2.406q-.313.625-.97.406-.624-.344-.405-1a6.86 6.86 0 0 1 2.53-3.062Q5.814 5.032 8 5q2.532.03 4.375 1.813L14 8.438V5.75q.063-.687.75-.75.687.063.75.75zM1.25 13h3.5q.687.063.75.75-.063.687-.75.75H3.063l1.624 1.625Q6.063 17.469 8 17.5q1.719-.03 3.063-.937a5.5 5.5 0 0 0 2-2.407q.311-.593.968-.375.625.313.406.969a7.14 7.14 0 0 1-2.53 3.063Q10.186 18.968 8 19q-2.531-.03-4.375-1.812L2 15.563v1.687q-.063.687-.75.75-.687-.063-.75-.75v-3.5q.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='5e167550cf0c333f3f6a73bff7d0f0d3__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowsRotateMdBoldIcon);
export default ForwardRef;
