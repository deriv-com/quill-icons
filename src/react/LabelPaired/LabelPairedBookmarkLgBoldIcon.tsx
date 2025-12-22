import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 7.375C0 6.359.82 5.5 1.875 5.5v17.265l5.078-3.632c.313-.235.742-.235 1.094 0l5.078 3.633V7.375H1.875V5.5h11.25C14.141 5.5 15 6.36 15 7.375v17.188c0 .351-.195.703-.508.859a.97.97 0 0 1-.976-.078L7.5 21.047l-6.055 4.297a.9.9 0 0 1-.937.078c-.313-.156-.508-.508-.508-.86z' />
    </g>
    <defs>
      <clipPath id='663509ddcbf161186b865ff447ef4e70__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkLgBoldIcon);
export default ForwardRef;
