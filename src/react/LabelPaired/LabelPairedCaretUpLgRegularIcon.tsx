import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretUpLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.266 11.828-4.688 4.453a.27.27 0 0 0-.078.196.305.305 0 0 0 .273.273h9.454a.305.305 0 0 0 .273-.273.27.27 0 0 0-.078-.196l-4.688-4.453a.4.4 0 0 0-.234-.078.4.4 0 0 0-.234.078m-.86-.898q.469-.43 1.094-.43t1.094.43l4.687 4.453q.47.428.469 1.094 0 .663-.43 1.093-.429.43-1.093.43H1.773q-.663 0-1.093-.43-.43-.429-.43-1.093t.469-1.133z' />
    </g>
    <defs>
      <clipPath id='49cab852c5ac5c58a2142575bb2875d4__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretUpLgRegularIcon);
export default ForwardRef;
