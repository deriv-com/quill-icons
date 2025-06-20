import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyLgFillIcon = (
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
      <path d='M8.375 5.5h4.844c.469 0 .976.234 1.328.586l2.617 2.617c.352.352.586.86.586 1.328v8.594c0 1.055-.86 1.875-1.875 1.875h-7.5A1.85 1.85 0 0 1 6.5 18.625V7.375c0-1.016.82-1.875 1.875-1.875m-6.25 5H5.25V13h-2.5v10h7.5v-1.25h2.5v1.875c0 1.055-.86 1.875-1.875 1.875h-8.75A1.85 1.85 0 0 1 .25 23.625v-11.25c0-1.016.82-1.875 1.875-1.875' />
    </g>
    <defs>
      <clipPath id='ee3f7b94361799acb50fa7b6a80392f3__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyLgFillIcon);
export default ForwardRef;
