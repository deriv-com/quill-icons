import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.219 4.156 5.78 7.75Q7.188 6.344 9.25 6.063V4.75q.063-.687.75-.75.687.063.75.75v1.313q2.063.281 3.5 1.687 1.406 1.437 1.719 3.5h1.281q.687.063.75.75-.063.687-.75.75h-1.281a6.4 6.4 0 0 1-.813 2.344l4.563 3.562q.5.47.125 1.063-.47.5-1.063.125l-18.5-14.5q-.5-.47-.125-1.063.47-.5 1.063-.125m5.75 4.532 1.218.937Q8.938 9.031 10 9q1.281.031 2.125.875T13 12q0 .657-.25 1.219l1.219.937A4.4 4.4 0 0 0 14.5 12q-.063-1.906-1.312-3.187Q11.906 7.563 10 7.5q-1.781.03-3.031 1.188m4.531 3.53h-.031A1 1 0 0 0 11.5 12a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 10 10.5a1.6 1.6 0 0 0-.562.094zm1.469 5a6.5 6.5 0 0 1-2.219.75v1.282q-.063.687-.75.75-.687-.063-.75-.75v-1.281q-2.063-.313-3.5-1.719-1.406-1.406-1.687-3.5H2.75Q2.063 12.687 2 12q.063-.687.75-.75h1.313q.03-.469.187-.906l1.281 1.031q-.03.313-.031.625.063 1.905 1.313 3.188Q8.092 16.468 10 16.5q.875 0 1.656-.312z' />
    </g>
    <defs>
      <clipPath id='9065264873c28e2d58228939de8e5573__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashMdBoldIcon);
export default ForwardRef;
