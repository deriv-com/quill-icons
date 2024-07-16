import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToLineLgFillIcon = (
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
      <path d='M1.25 24.25C.547 24.25 0 23.703 0 23c0-.664.547-1.25 1.25-1.25h12.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25zm7.11-5.352a1.205 1.205 0 0 1-1.758 0l-5-5a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l2.891 2.851V8c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v6.992l2.852-2.851a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757z' />
    </g>
    <defs>
      <clipPath id='b0eab1d3b43b92e639d081999077d5ab__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToLineLgFillIcon);
export default ForwardRef;
