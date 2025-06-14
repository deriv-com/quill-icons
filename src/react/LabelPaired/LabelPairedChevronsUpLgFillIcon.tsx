import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.86 7.14 7.5 7.5c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L10 9.797l-6.64 6.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l7.5-7.5a1.205 1.205 0 0 1 1.757 0m7.5 15c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L10 17.297l-6.64 6.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l7.5-7.5a1.205 1.205 0 0 1 1.757 0z' />
    </g>
    <defs>
      <clipPath id='7385926c2171c8d96f3c4c7d359fdfbf__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgFillIcon);
export default ForwardRef;
