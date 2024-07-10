import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSevenMdFillIcon = (
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
      <path d='M0 6c0-.531.438-1 1-1h8c.344 0 .688.219.844.531a.96.96 0 0 1 0 1l-7 12c-.281.469-.875.625-1.375.344C1 18.594.844 18 1.125 17.5L7.25 7H1c-.562 0-1-.437-1-1' />
    </g>
    <defs>
      <clipPath id='f3aa527d59bf2f332e42f8cf5cc6f8a0__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSevenMdFillIcon);
export default ForwardRef;
