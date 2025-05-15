import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareMdFillIcon = (
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
      <path d='M11 11H9.531C8.125 11 7 12.156 7 13.563c0 .687.313 1.062.594 1.25.218.156.406.374.406.656a.56.56 0 0 1-.562.562h-.094a.6.6 0 0 1-.219-.062C6.563 15.719 4 14.438 4 11.5 4 9.031 6 7 8.5 7H11V5.094C11 4.5 11.469 4 12.063 4c.28 0 .53.125.718.281l4.344 3.907c.219.218.375.5.375.812 0 .344-.156.625-.375.844l-4.344 3.906c-.187.188-.437.25-.687.25H12c-.562 0-1-.437-1-1zM2.5 7c-.281 0-.5.25-.5.5v10c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5V16c0-.531.438-1 1-1 .531 0 1 .469 1 1v1.5c0 1.406-1.125 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 17.5v-10C0 6.125 1.094 5 2.5 5H4c.531 0 1 .469 1 1 0 .563-.469 1-1 1z' />
    </g>
    <defs>
      <clipPath id='99d58ea9e8457f40d432cc259a92ac2d__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareMdFillIcon);
export default ForwardRef;
