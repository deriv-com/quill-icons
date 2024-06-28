import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.328 18.844C.094 18.609 0 18.328 0 18c0-.281.094-.562.328-.797l8.25-7.875c.469-.422 1.172-.422 1.594.047a1.12 1.12 0 0 1-.047 1.594l-6.234 5.906h15.984c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H3.891l6.234 5.953c.469.422.469 1.125.047 1.594s-1.125.469-1.594.047z' />
    </g>
    <defs>
      <clipPath id='1b247521e5749ecf316d8a8daccf2cf7__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftXlBoldIcon);
export default ForwardRef;
