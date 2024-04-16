import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPhoneMdBoldIcon = (
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
      <path d='m11.719 12.625 3.5 1.5c.562.219.875.813.75 1.406l-.75 3.5c-.125.563-.656 1-1.219 1-.219 0-.406-.031-.594-.031-.312 0-.625-.031-.906-.062A14 14 0 0 1 0 6c0-.562.406-1.094.969-1.219l3.5-.75a1.23 1.23 0 0 1 1.406.75l1.5 3.5c.219.5.094 1.094-.344 1.438L5.75 10.78a9.7 9.7 0 0 0 3.469 3.469l1.062-1.281a1.206 1.206 0 0 1 1.438-.344M13.78 18.5l.656-3.094-3.124-1.344-.907 1.126a1.53 1.53 0 0 1-1.937.343 11.15 11.15 0 0 1-4-4 1.53 1.53 0 0 1 .343-1.937l1.125-.906-1.343-3.126L1.5 6.22A12.447 12.447 0 0 0 13.781 18.5' />
    </g>
    <defs>
      <clipPath id='e369b7ac38c552460421a59214d99912__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneMdBoldIcon);
export default ForwardRef;
