import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperclipMdBoldIcon = (
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
      <path d='M11.719 6.281a2.113 2.113 0 0 0-2.969 0l-5.969 6c-1.375 1.375-1.375 3.594 0 4.938 1.344 1.375 3.563 1.375 4.938 0l4.75-4.75a.736.736 0 0 1 1.031 0c.313.312.313.781 0 1.062l-4.719 4.75c-1.969 1.969-5.125 1.969-7.062 0-1.969-1.937-1.969-5.093 0-7.062l6-6c1.375-1.375 3.656-1.375 5.062 0 1.375 1.406 1.375 3.687 0 5.062l-5.75 5.75c-1 1-2.625.907-3.5-.187a2.346 2.346 0 0 1 .188-3.125l4.75-4.75a.736.736 0 0 1 1.031 0c.313.312.313.781 0 1.062l-4.719 4.75a.823.823 0 0 0-.062 1.125c.312.375.875.438 1.25.063l5.75-5.75a2.075 2.075 0 0 0 0-2.938' />
    </g>
    <defs>
      <clipPath id='04cc031ec8bf92620e9232313b0c96cc__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperclipMdBoldIcon);
export default ForwardRef;
