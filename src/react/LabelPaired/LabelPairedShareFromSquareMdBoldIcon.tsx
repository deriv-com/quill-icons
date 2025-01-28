import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.5 12 3.313-3L12.5 6.031V7.5c0 .281-.25.5-.5.5H9c-1.937 0-3.5 1.594-3.5 3.5 0 .375.031.719.156 1A3.535 3.535 0 0 1 9.031 10H12c.25 0 .5.25.5.5V12m-2-.5H9.031C7.906 11.5 7 12.438 7 13.563c0 .28.031.5.125.687.063.094.094.188.156.281.032.031.063.063.063.094.031.031.062.031.093.063a.6.6 0 0 0 .157.124c0 .032.031.032.031.032.188.156.375.375.375.625 0 .281-.25.531-.562.531h-.094c-.063 0-.157 0-.219-.031s-.156-.063-.25-.125a2 2 0 0 0-.375-.188c-.156-.125-.344-.219-.531-.375C5.062 14.625 4 13.406 4 11.5c0-2.75 2.219-5 5-5h2V5.094C11 4.5 11.469 4 12.063 4c.28 0 .53.125.718.281l4.344 3.907c.219.218.375.5.375.812 0 .344-.156.625-.375.844l-4.344 3.906c-.187.188-.437.25-.687.25H12c-.562 0-1-.437-1-1v-1.5zM2.25 5h2a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2a.74.74 0 0 0-.75.75v10.5c0 .438.313.75.75.75h10.5a.74.74 0 0 0 .75-.75v-2a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v2A2.26 2.26 0 0 1 12.75 20H2.25C1 20 0 19 0 17.75V7.25C0 6.031 1 5 2.25 5' />
    </g>
    <defs>
      <clipPath id='6c04cfbdec3f4616fe971604967c9175__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareMdBoldIcon);
export default ForwardRef;
