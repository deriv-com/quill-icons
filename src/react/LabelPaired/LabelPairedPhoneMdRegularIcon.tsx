import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneMdRegularIcon = (
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
      <path d='m11.75 12.594 3.5 1.5q.406.187.625.594.187.375.094.812l-.75 3.5q-.25.937-1.219 1h-.562a3 3 0 0 0-.438-.031q-3.655-.313-6.594-2.219a14 14 0 0 1-4.656-4.969Q.03 9.751 0 6q.063-.969 1-1.219l3.5-.75q.438-.093.813.125.405.188.593.594l1.5 3.5q.313.844-.375 1.469l-1.25 1.031a9.55 9.55 0 0 0 3.469 3.469l1.031-1.25q.625-.688 1.469-.375M14 19q.187 0 .25-.187l.75-3.5q.03-.219-.156-.282l-3.5-1.5q-.156-.062-.281.063l-1.032 1.281q-.562.563-1.281.219a10.3 10.3 0 0 1-3.844-3.844q-.344-.72.219-1.281l1.281-1.031q.125-.126.063-.282l-1.5-3.5Q4.874 4.97 4.687 5l-3.5.75Q1 5.813 1 6q.031 3.625 1.781 6.563a12.8 12.8 0 0 0 4.656 4.656Q10.376 18.969 14 19' />
    </g>
    <defs>
      <clipPath id='aac628ae329d1abf9d2947d892afebd4__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneMdRegularIcon);
export default ForwardRef;
