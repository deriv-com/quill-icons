import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQrcodeMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.5 6.5h-3v3h3zM1.5 5h3q.624.03 1.063.438.405.436.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 4.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 9.5v-3q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 5m3 9.5h-3v3h3zm-3-1.5h3q.624.03 1.063.438.405.437.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 4.5 19h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 0 17.5v-3q.03-.625.438-1.062A1.63 1.63 0 0 1 1.5 13m8-6.5v3h3v-3zM8 6.5q.03-.625.438-1.062A1.63 1.63 0 0 1 9.5 5h3q.624.03 1.063.438.405.436.437 1.062v3a1.63 1.63 0 0 1-.437 1.063A1.63 1.63 0 0 1 12.5 11h-3a1.63 1.63 0 0 1-1.062-.437A1.63 1.63 0 0 1 8 9.5zM2.25 7.75q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5 7.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m7.5-7.5q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zM8 13.5q.031-.469.5-.5h2q.47.031.5.5.031.47.5.5h1q.47-.03.5-.5.031-.469.5-.5.47.031.5.5v3q-.03.47-.5.5h-2q-.469-.03-.5-.5-.03-.469-.5-.5-.469.031-.5.5v2q-.03.47-.5.5h-1q-.469-.03-.5-.5zm3.5 4.5q.47.031.5.5-.03.47-.5.5-.469-.03-.5-.5.031-.469.5-.5m2 0q.47.031.5.5-.03.47-.5.5-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='cc4fe4f67d35e20aa700f1160dafd786__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQrcodeMdBoldIcon);
export default ForwardRef;
