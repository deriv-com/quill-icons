import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 7a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 6 5.5a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 4.5 7v5q.03.624.438 1.063.436.405 1.062.437a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 7.5 12zM3 7q.031-1.28.875-2.125Q4.718 4.032 6 4q1.282.031 2.125.875Q8.969 5.718 9 7v5q-.03 1.281-.875 2.125Q7.282 14.969 6 15q-1.28-.03-2.125-.875Q3.032 13.282 3 12zm-1 3.75V12q.03 1.688 1.156 2.844Q4.312 15.969 6 16q1.688-.03 2.844-1.156Q9.969 13.687 10 12v-1.25q.063-.687.75-.75.687.063.75.75V12q-.031 2.125-1.375 3.625-1.312 1.5-3.375 1.813V18.5h1.5q.687.063.75.75-.063.687-.75.75h-4.5q-.687-.063-.75-.75.063-.687.75-.75h1.5v-1.062q-2.062-.313-3.375-1.813Q.531 14.125.5 12v-1.25q.063-.687.75-.75.687.063.75.75' />
    </g>
    <defs>
      <clipPath id='341e8de9277f14d0e4c562dbe1888437__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneMdBoldIcon);
export default ForwardRef;
