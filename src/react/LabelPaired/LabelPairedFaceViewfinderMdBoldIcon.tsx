import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderMdBoldIcon = (
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
      <path d='M0 5.75Q.031 5 .5 4.5 1 4.031 1.75 4h2.5q.687.063.75.75-.063.687-.75.75h-2.5q-.22.03-.25.25v2.5q-.063.687-.75.75-.687-.063-.75-.75zm11-1q.063-.687.75-.75h2.5q.75.031 1.25.5.47.5.5 1.25v2.5q-.063.687-.75.75-.687-.063-.75-.75v-2.5q-.03-.22-.25-.25h-2.5q-.687-.063-.75-.75M.75 15q.687.063.75.75v2.5q.03.22.25.25h2.5q.687.063.75.75-.063.687-.75.75h-2.5Q1 19.97.5 19.5.031 19 0 18.25v-2.5q.063-.687.75-.75m14.5 0q.687.063.75.75v2.5q-.03.75-.5 1.25-.5.47-1.25.5h-2.5q-.687-.063-.75-.75.063-.687.75-.75h2.5q.22-.03.25-.25v-2.5q.063-.687.75-.75M7.5 10.75q-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75m1.75.75q-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75-.063.687-.75.75M8 8.5q-.937 0-1.75.469T4.969 10.25A3.44 3.44 0 0 0 4.5 12q0 .937.469 1.75t1.281 1.281A3.44 3.44 0 0 0 8 15.5q.937 0 1.75-.469t1.281-1.281A3.44 3.44 0 0 0 11.5 12q0-.937-.469-1.75A3.44 3.44 0 0 0 9.75 8.969 3.44 3.44 0 0 0 8 8.5M8 17q-1.344 0-2.5-.656A5.2 5.2 0 0 1 3.656 14.5 5.1 5.1 0 0 1 3 12q0-1.312.656-2.5A5.2 5.2 0 0 1 5.5 7.656 5 5 0 0 1 8 7q1.345 0 2.5.656A5.2 5.2 0 0 1 12.344 9.5Q13 10.688 13 12t-.656 2.5a5.2 5.2 0 0 1-1.844 1.844A5 5 0 0 1 8 17m-1.312-4.25q.437.72 1.312.75.874-.03 1.313-.75.249-.375.687-.187.344.28.156.687Q9.47 14.438 8 14.5q-1.47-.062-2.156-1.25-.22-.406.187-.687.406-.188.657.187' />
    </g>
    <defs>
      <clipPath id='53ebfd27a4451b70d167a895aa1b80b5__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderMdBoldIcon);
export default ForwardRef;
