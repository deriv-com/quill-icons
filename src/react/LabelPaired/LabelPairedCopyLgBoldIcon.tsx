import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.25 18.625a.64.64 0 0 0 .625-.625v-7.969l-2.656-2.656H7.75A.64.64 0 0 0 7.125 8v10c0 .352.273.625.625.625zM7.75 20.5a2.47 2.47 0 0 1-2.5-2.5V8c0-1.367 1.094-2.5 2.5-2.5h5.469c.469 0 .976.234 1.328.586l2.617 2.617c.352.352.586.86.586 1.328V18c0 1.406-1.133 2.5-2.5 2.5zm-5-10H4v1.875H2.75a.64.64 0 0 0-.625.625v10c0 .352.273.625.625.625h7.5a.64.64 0 0 0 .625-.625v-1.25h1.875V23c0 1.406-1.133 2.5-2.5 2.5h-7.5A2.47 2.47 0 0 1 .25 23V13c0-1.367 1.094-2.5 2.5-2.5' />
    </g>
    <defs>
      <clipPath id='a02fd5012d688f7a80067a9883d660f6__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyLgBoldIcon);
export default ForwardRef;
