import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightLgFillIcon = (
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
      <path d='M13.75 10.5v8.75c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-5.703l-7.89 7.851a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l7.851-7.891H3.75c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h8.75c.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='ef9d928352583dde1843b911084f5af5__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightLgFillIcon);
export default ForwardRef;
