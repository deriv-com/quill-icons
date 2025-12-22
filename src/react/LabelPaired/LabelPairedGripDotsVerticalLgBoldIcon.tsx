import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 10.5c-.703 0-1.25-.547-1.25-1.25C1.25 8.586 1.797 8 2.5 8c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25m0 6.25c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25m1.25 5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25M7.5 10.5c-.703 0-1.25-.547-1.25-1.25C6.25 8.586 6.797 8 7.5 8c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25m1.25 5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25M7.5 23c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25' />
    </g>
    <defs>
      <clipPath id='de6ca964e5c666aaa374f36eb67a7dbb__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalLgBoldIcon);
export default ForwardRef;
