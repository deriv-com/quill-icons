import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.875 28.5H1.125C.469 28.5 0 28.031 0 27.375c0-.61.469-1.125 1.125-1.125h15.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125m-8.719-6.328-6-6.375a1.16 1.16 0 0 1 .047-1.594c.469-.422 1.172-.422 1.594.047l4.078 4.313V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v9.938l4.031-4.313c.422-.469 1.125-.469 1.594-.047s.469 1.125.047 1.594l-6 6.375A1.1 1.1 0 0 1 9 22.5c-.328 0-.61-.094-.844-.328' />
    </g>
    <defs>
      <clipPath id='4144994050a1529f59f1dd53952cbd43__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineXlBoldIcon);
export default ForwardRef;
