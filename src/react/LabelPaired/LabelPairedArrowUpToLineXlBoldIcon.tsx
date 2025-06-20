import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineXlBoldIcon = (
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
      <path d='M1.125 7.5h15.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 9.75 0 9.281 0 8.625 0 8.015.469 7.5 1.125 7.5m8.672 6.375 6 6.375c.422.469.422 1.172-.047 1.594s-1.172.422-1.594-.047l-4.031-4.313v9.891A1.11 1.11 0 0 1 9 28.5c-.656 0-1.125-.469-1.125-1.125v-9.89l-4.078 4.312c-.422.469-1.125.469-1.594.047s-.469-1.125-.047-1.594l6-6.375c.235-.234.516-.375.844-.375.281 0 .61.14.797.375' />
    </g>
    <defs>
      <clipPath id='7747774bd0bac2f1d8ac48887f1948d7__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineXlBoldIcon);
export default ForwardRef;
