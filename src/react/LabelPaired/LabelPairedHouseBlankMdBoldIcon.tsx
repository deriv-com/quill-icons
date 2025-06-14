import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.469 4.188 8.25 7a.78.78 0 0 1 .093 1.062.78.78 0 0 1-1.062.094l-.75-.656V17.5c0 1.406-1.125 2.5-2.5 2.5h-9A2.47 2.47 0 0 1 2 17.5v-5.812l-.781.656a.78.78 0 0 1-1.063-.094.78.78 0 0 1 .094-1.062l8.25-7a.8.8 0 0 1 .969 0m5.031 6.218L9 5.75l-5.5 4.656V17.5c0 .563.438 1 1 1h9c.531 0 1-.437 1-1z' />
    </g>
    <defs>
      <clipPath id='bb52dcce9fc5a83d76959afb9a318d73__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankMdBoldIcon);
export default ForwardRef;
