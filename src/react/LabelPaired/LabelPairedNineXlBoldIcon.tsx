import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedNineXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 15a5.24 5.24 0 0 0 5.25 5.25c1.5 0 2.86-.61 3.797-1.64l.281-.282A5.33 5.33 0 0 0 12.75 15c0-2.86-2.39-5.25-5.25-5.25-2.906 0-5.25 2.39-5.25 5.25m5.906 7.5H7.5A7.46 7.46 0 0 1 0 15c0-4.125 3.328-7.5 7.5-7.5 4.125 0 7.5 3.375 7.5 7.5 0 1.969-.75 3.75-1.969 5.063L6.47 28.124c-.375.469-1.078.516-1.594.14-.469-.374-.516-1.078-.14-1.593z' />
    </g>
    <defs>
      <clipPath id='d90b5f72384b4da2a85d665da90473eb__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedNineXlBoldIcon);
export default ForwardRef;
