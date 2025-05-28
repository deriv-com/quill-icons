import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.156 5.031 10.22 8.97 10.188 9H7.28l4-3.969.031-.031H14c.063 0 .094.031.156.031M12.281 9l3.281-3.25c.25.344.438.781.438 1.25v2zm-6-4h2.907l-3.97 3.969-.03.031H2.28l4-3.969L6.313 5zM4.188 5 .217 8.969.189 9H0V7c0-1.094.875-2 2-2zM0 10h16v7c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2zm6.75 2.063a.54.54 0 0 0-.25.437v4c0 .188.094.375.25.469.156.062.375.062.5-.032l3-2a.5.5 0 0 0 .25-.437.49.49 0 0 0-.25-.406l-3-2c-.125-.094-.344-.094-.5-.031' />
    </g>
    <defs>
      <clipPath id='8e63665b2c086fc00dfb654599558b56__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayMdFillIcon);
export default ForwardRef;
