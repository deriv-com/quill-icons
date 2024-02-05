import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalMdBoldIcon = (
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
      <path d='M18 4q.687.063.75.75v14.5q-.063.687-.75.75-.687-.063-.75-.75V4.75q.063-.687.75-.75m-4 3q.687.063.75.75v11.5q-.063.687-.75.75-.687-.063-.75-.75V7.75q.063-.687.75-.75m-4 3q.687.063.75.75v8.5q-.063.687-.75.75-.687-.063-.75-.75v-8.5q.063-.687.75-.75m-4 3q.687.063.75.75v5.5q-.063.687-.75.75-.687-.063-.75-.75v-5.5q.063-.687.75-.75m-4 3q.687.063.75.75v2.5q-.063.687-.75.75-.687-.063-.75-.75v-2.5q.063-.687.75-.75' />
    </g>
    <defs>
      <clipPath id='d70a01d0c9371ee2f1198c518bd4fb28__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalMdBoldIcon);
export default ForwardRef;
