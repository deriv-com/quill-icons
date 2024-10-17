import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankMdFillIcon = (
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
      <path d='M17.969 12c0 .563-.469 1-1 1h-1L16 18c0 1.125-.875 2.031-2 2.031H4c-1.125 0-2-.906-2-2V13H1c-.562 0-1-.437-1-1 0-.281.094-.531.313-.75l8-7C8.53 4.031 8.78 4 9 4s.469.063.656.219l7.969 7.031c.25.219.375.469.344.75' />
    </g>
    <defs>
      <clipPath id='790458bdb0aa57736ce8bb9479e8e897__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankMdFillIcon);
export default ForwardRef;
