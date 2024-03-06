import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderMdRegularIcon = (
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
      <path d='M1.5 4h3q.47.031.5.5-.03.47-.5.5h-3q-.469.031-.5.5v3q-.03.47-.5.5-.469-.03-.5-.5v-3q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 4m13 0q.624.03 1.063.438.405.436.437 1.062v3q-.03.47-.5.5-.469-.03-.5-.5v-3q-.03-.469-.5-.5h-3q-.469-.03-.5-.5.031-.469.5-.5zM0 18.5v-3q.031-.469.5-.5.47.031.5.5v3q.031.47.5.5h3q.47.031.5.5-.03.47-.5.5h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 18.5M14.5 20h-3q-.469-.03-.5-.5.031-.469.5-.5h3q.47-.03.5-.5v-3q.031-.469.5-.5.47.031.5.5v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 14.5 20m-7-9.25q-.063.687-.75.75-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75m1.75.75q-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75-.063.687-.75.75M8 8q-1.094 0-2 .531A4.13 4.13 0 0 0 4.531 10 4 4 0 0 0 4 12q0 1.062.531 2A4.13 4.13 0 0 0 6 15.469Q6.906 16 8 16q1.095 0 2-.531A4.13 4.13 0 0 0 11.469 14 4 4 0 0 0 12 12q0-1.062-.531-2A4.13 4.13 0 0 0 10 8.531 3.9 3.9 0 0 0 8 8m0 9q-1.344 0-2.5-.656A5.2 5.2 0 0 1 3.656 14.5 5.1 5.1 0 0 1 3 12q0-1.312.656-2.5A5.2 5.2 0 0 1 5.5 7.656 5 5 0 0 1 8 7q1.345 0 2.5.656A5.2 5.2 0 0 1 12.344 9.5Q13 10.688 13 12t-.656 2.5a5.2 5.2 0 0 1-1.844 1.844A5 5 0 0 1 8 17m-1.312-4.25q.437.72 1.312.75.874-.03 1.313-.75.249-.375.687-.187.344.28.156.687Q9.47 14.438 8 14.5q-1.47-.062-2.156-1.25-.22-.406.187-.687.406-.188.657.187' />
    </g>
    <defs>
      <clipPath id='35a7d9dd6928c53e3ec09255a9e1a220__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderMdRegularIcon);
export default ForwardRef;
