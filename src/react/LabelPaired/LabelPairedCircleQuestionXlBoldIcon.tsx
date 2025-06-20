import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleQuestionXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.75 18c0-3.469-1.875-6.656-4.875-8.437-3.047-1.735-6.75-1.735-9.75 0C4.078 11.343 2.25 14.53 2.25 18c0 3.516 1.828 6.703 4.875 8.484 3 1.735 6.703 1.735 9.75 0 3-1.78 4.875-4.968 4.875-8.484M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m7.922-4.219A2.62 2.62 0 0 1 10.406 12h2.719c1.64 0 3 1.36 3 3 0 1.031-.61 2.016-1.5 2.531l-1.5.89c-.047.61-.516 1.079-1.125 1.079-.656 0-1.125-.469-1.125-1.125v-.61c0-.421.188-.796.563-.984L13.5 15.61c.234-.14.375-.375.375-.609 0-.422-.328-.703-.75-.703h-2.719a.35.35 0 0 0-.328.234l-.047.047c-.187.61-.844.89-1.406.703a1.17 1.17 0 0 1-.703-1.453zM10.5 22.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5' />
    </g>
    <defs>
      <clipPath id='f3573a0ba0306ec4c6b76595f338fe3c__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleQuestionXlBoldIcon);
export default ForwardRef;
