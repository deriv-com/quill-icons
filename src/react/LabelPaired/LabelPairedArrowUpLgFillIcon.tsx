import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLgFillIcon = (
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
      <path d='m8.36 7.14 6.25 6.25c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L8.75 11.047V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V11.047l-4.14 4.101a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l6.25-6.25a1.205 1.205 0 0 1 1.757 0' />
    </g>
    <defs>
      <clipPath id='02c914de1e87d6894630e463ed8f010a__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLgFillIcon);
export default ForwardRef;
