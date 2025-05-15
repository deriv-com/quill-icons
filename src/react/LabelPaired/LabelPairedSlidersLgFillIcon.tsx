import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSlidersLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 21.75c0-.664.547-1.25 1.25-1.25h2.11c.507-1.094 1.6-1.875 2.89-1.875 1.25 0 2.383.781 2.852 1.875h9.648c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H9.102c-.47 1.133-1.602 1.875-2.852 1.875A3.14 3.14 0 0 1 3.36 23H1.25C.547 23 0 22.453 0 21.75m5 0c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25m7.5-6.25c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25m1.25-3.125c1.25 0 2.383.781 2.852 1.875h2.148c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-2.148c-.47 1.133-1.602 1.875-2.852 1.875a3.13 3.13 0 0 1-2.89-1.875H1.25C.547 16.75 0 16.203 0 15.5c0-.664.547-1.25 1.25-1.25h9.61c.507-1.094 1.6-1.875 2.89-1.875M7.5 10.5c.664 0 1.25-.547 1.25-1.25C8.75 8.586 8.164 8 7.5 8c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25M10.352 8h8.398c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-8.398c-.47 1.133-1.602 1.875-2.852 1.875A3.14 3.14 0 0 1 4.61 10.5H1.25C.547 10.5 0 9.953 0 9.25 0 8.586.547 8 1.25 8h3.36c.507-1.094 1.6-1.875 2.89-1.875 1.25 0 2.383.781 2.852 1.875' />
    </g>
    <defs>
      <clipPath id='92d594d2c6292c835cc5f46b99986b58__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSlidersLgFillIcon);
export default ForwardRef;
