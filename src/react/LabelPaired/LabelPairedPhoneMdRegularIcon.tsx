import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneMdRegularIcon = (
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
      <path d='m11.719 12.625 3.5 1.5c.562.219.875.813.75 1.406l-.75 3.5c-.125.563-.625 1-1.219 1-.219 0-.406-.031-.594-.031-.125 0-.281 0-.406-.031C5.719 19.469 0 13.406 0 6c0-.562.406-1.094.969-1.219l3.5-.75a1.23 1.23 0 0 1 1.406.75l1.5 3.5c.219.5.094 1.094-.344 1.438L5.75 10.78a9.7 9.7 0 0 0 3.469 3.469l1.062-1.281a1.206 1.206 0 0 1 1.438-.344M13.969 19c.125 0 .219-.062.25-.187l.75-3.5c.031-.126-.031-.22-.125-.282l-3.5-1.5a.36.36 0 0 0-.313.063L10 14.875a1 1 0 0 1-1.281.219 10.15 10.15 0 0 1-3.813-3.813A1 1 0 0 1 5.125 10l1.281-1.031a.36.36 0 0 0 .063-.313l-1.5-3.5c-.063-.093-.157-.156-.282-.125l-3.5.75C1.063 5.781 1 5.906 1 6c0 7.188 5.813 13 12.969 13' />
    </g>
    <defs>
      <clipPath id='f5772077e92fcb96c1fcc4f91f468692__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneMdRegularIcon);
export default ForwardRef;
