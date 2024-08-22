import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownLeftLgFillIcon = (
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
      <path d='M1.25 20.5v-8.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v5.742l7.852-7.851a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757L5.508 19.25h5.742c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H2.5c-.703 0-1.25-.547-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='82bade58e74a76db35248e8edc3aa1c2__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownLeftLgFillIcon);
export default ForwardRef;
