import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M22.5 5.5c.664 0 1.25.586 1.25 1.25v17.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V6.75c0-.664.547-1.25 1.25-1.25m-5 3.75c.664 0 1.25.586 1.25 1.25v13.75c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V10.5c0-.664.547-1.25 1.25-1.25m-3.75 5v10c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-10c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-6.25 2.5c.664 0 1.25.586 1.25 1.25v6.25c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V18c0-.664.547-1.25 1.25-1.25m-3.75 5v2.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25' />
    </g>
    <defs>
      <clipPath id='69d53c95b4f482883413ef5bea11343f__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalLgFillIcon);
export default ForwardRef;
