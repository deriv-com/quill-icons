import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 19c.531 0 1-.437 1-1v-8H7.5A1.48 1.48 0 0 1 6 8.5V5H2c-.562 0-1 .469-1 1v12c0 .563.438 1 1 1zM7.5 9h3.469c-.031-.062-.063-.156-.125-.219L7.219 5.156c-.063-.062-.157-.093-.219-.125V8.5c0 .281.219.5.5.5M2 4h4.875c.375 0 .781.188 1.063.469l3.593 3.593c.281.282.469.688.469 1.063V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m2.656 7.719L6 13.656l1.313-1.937c.187-.219.5-.281.718-.125a.53.53 0 0 1 .125.719L6.594 14.5l1.562 2.219c.156.25.094.531-.125.718-.25.157-.531.094-.719-.125L6 15.376l-1.344 1.938a.53.53 0 0 1-.718.125c-.22-.188-.282-.5-.126-.72L5.376 14.5l-1.562-2.187a.53.53 0 0 1 .124-.72.53.53 0 0 1 .72.126' />
    </g>
    <defs>
      <clipPath id='a205555b63aa89203541c6a7b3f3f053__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelMdRegularIcon);
export default ForwardRef;
