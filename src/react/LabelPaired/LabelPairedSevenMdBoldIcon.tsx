import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 5.75A.74.74 0 0 1 .75 5h8.5c.25 0 .5.156.625.406.156.219.156.5 0 .75l-7.5 12.5a.75.75 0 0 1-1.031.25c-.344-.218-.469-.687-.25-1.031L7.906 6.5H.75A.72.72 0 0 1 0 5.75' />
    </g>
    <defs>
      <clipPath id='5bd04132af4e3e9a2501f9c6bb512d4d__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenMdBoldIcon);
export default ForwardRef;
