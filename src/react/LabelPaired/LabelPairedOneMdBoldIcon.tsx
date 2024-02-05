import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={24}
    viewBox='0 0 8 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.75 5.75V17.5h2.5q.687.063.75.75-.063.687-.75.75H.75q-.687-.063-.75-.75.063-.687.75-.75h2.5V7.094L1.125 8.375q-.594.312-1.031-.219-.281-.624.25-1.031l3.25-2a.8.8 0 0 1 .781-.031q.375.218.375.656' />
    </g>
    <defs>
      <clipPath id='563ac580593490a49bf0d553ffa37692__a'>
        <path d='M0 0h8v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneMdBoldIcon);
export default ForwardRef;
