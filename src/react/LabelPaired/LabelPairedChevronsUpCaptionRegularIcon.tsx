import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.258 4.742 4.5 4.5q.234.258 0 .516-.258.234-.516 0L6 5.539 1.758 9.758q-.258.234-.516 0-.234-.258 0-.516l4.5-4.5q.258-.234.516 0m4.5 9q.234.258 0 .516-.258.234-.516 0L6 10.039l-4.242 4.219q-.258.234-.516 0-.234-.258 0-.516l4.5-4.5q.258-.234.516 0z' />
    </g>
    <defs>
      <clipPath id='7729dbfdc09f91346fe262d38248f745__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionRegularIcon);
export default ForwardRef;
