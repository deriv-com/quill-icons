import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsMdBoldIcon = (
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
      <path d='M8 4q.687.063.75.75v1.313q2.063.281 3.5 1.687 1.406 1.437 1.719 3.5h1.281q.687.063.75.75-.063.687-.75.75h-1.281q-.313 2.063-1.719 3.5-1.437 1.406-3.5 1.719v1.281q-.063.687-.75.75-.687-.063-.75-.75v-1.281q-2.063-.313-3.5-1.719-1.406-1.437-1.687-3.5H.75Q.063 12.687 0 12q.063-.687.75-.75h1.313q.281-2.063 1.687-3.5 1.437-1.406 3.5-1.687V4.75Q7.313 4.063 8 4m-4.5 8q0 1.22.594 2.25a4.5 4.5 0 0 0 1.656 1.656A4.54 4.54 0 0 0 8 16.5q1.188 0 2.25-.594a4.5 4.5 0 0 0 1.656-1.656A4.43 4.43 0 0 0 12.5 12a4.43 4.43 0 0 0-.594-2.25 4.5 4.5 0 0 0-1.656-1.656A4.54 4.54 0 0 0 8 7.5q-1.188 0-2.25.594A4.5 4.5 0 0 0 4.094 9.75 4.43 4.43 0 0 0 3.5 12m6 0q-.03-.844-.75-1.312-.75-.375-1.5 0-.72.469-.75 1.312.03.844.75 1.313.75.375 1.5 0 .72-.469.75-1.313M5 12q0-.813.406-1.5T6.5 9.406Q7.22 9.001 8 9a3.01 3.01 0 0 1 2.594 1.5Q11 11.187 11 12t-.406 1.5T9.5 14.594Q8.78 15 8 15a3.01 3.01 0 0 1-2.594-1.5A2.9 2.9 0 0 1 5 12' />
    </g>
    <defs>
      <clipPath id='279d6f36bfccc1187e1a8b74e41c0704__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsMdBoldIcon);
export default ForwardRef;
