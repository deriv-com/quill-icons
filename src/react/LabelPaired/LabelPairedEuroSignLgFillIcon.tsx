import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEuroSignLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 14.875H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h1.094C3.727 9.133 6.89 6.75 10.563 6.75h.937c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.937a5.96 5.96 0 0 0-5.235 3.125h4.922c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H4.625v1.25h5.625c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H5.328c.977 1.875 2.969 3.125 5.235 3.125h.937c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.937c-3.672 0-6.836-2.344-7.97-5.625H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.625v-1.25' />
    </g>
    <defs>
      <clipPath id='1bbc9851090fab19053d3e5f174e6136__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEuroSignLgFillIcon);
export default ForwardRef;
