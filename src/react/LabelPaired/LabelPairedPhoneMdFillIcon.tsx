import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneMdFillIcon = (
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
      <path d='m5.125 4.781 1.25 3c.219.5.094 1.094-.344 1.438L4.5 10.5a10.5 10.5 0 0 0 5 5l1.281-1.531a1.206 1.206 0 0 1 1.438-.344l3 1.25c.594.219.875.875.719 1.469l-.75 2.75A1.24 1.24 0 0 1 14 20C6.25 20 0 13.75 0 6c0-.562.375-1.031.906-1.187l2.75-.75c.594-.157 1.25.125 1.469.718' />
    </g>
    <defs>
      <clipPath id='b8a82bd1f09fd17e92ec90f663a999d2__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneMdFillIcon);
export default ForwardRef;
