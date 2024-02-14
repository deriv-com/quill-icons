import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGlobeCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 14.75q.305 0 .68-.305t.773-1.03a7.2 7.2 0 0 0 .563-1.665H3.984q.212.96.563 1.664.399.726.773 1.031.375.305.68.305M3.844 11h4.312q.094-.703.094-1.5T8.156 8H3.844q-.094.703-.094 1.5t.094 1.5m.14-3.75h4.032a7.2 7.2 0 0 0-.563-1.664q-.399-.726-.773-1.031Q6.305 4.25 6 4.25t-.68.305-.773 1.03a7.2 7.2 0 0 0-.563 1.665M8.906 8Q9 8.726 9 9.5T8.906 11h2.133q.21-.726.211-1.5 0-.774-.21-1.5zm1.852-.75a5.38 5.38 0 0 0-3.07-2.719q.75 1.008 1.101 2.719zm-7.547 0q.352-1.71 1.125-2.719a5.3 5.3 0 0 0-1.828 1.055A5 5 0 0 0 1.266 7.25zM.96 8Q.75 8.726.75 9.5q0 .774.21 1.5h2.134A12 12 0 0 1 3 9.5q0-.774.094-1.5zm6.727 6.469a5.4 5.4 0 0 0 1.804-1.055 5 5 0 0 0 1.242-1.664H8.79q-.351 1.71-1.101 2.719m-3.352 0Q3.563 13.46 3.21 11.75H1.266q.445.96 1.242 1.664.796.703 1.828 1.055M6 15.5a6.14 6.14 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.1 6.1 0 0 1 0 9.5q0-1.57.797-3A6.2 6.2 0 0 1 3 4.297 6.14 6.14 0 0 1 6 3.5a6.14 6.14 0 0 1 3 .797A6.2 6.2 0 0 1 11.203 6.5Q12 7.93 12 9.5a6.1 6.1 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.14 6.14 0 0 1-3 .797' />
    </g>
    <defs>
      <clipPath id='8f3bc32140661524e506672e1c053074__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGlobeCaptionRegularIcon);
export default ForwardRef;
