import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFolderOpenLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.25 24.25H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h4.57c.664 0 1.29.273 1.758.742l1.055 1.055c.469.469 1.094.703 1.758.703H16.5c1.367 0 2.5 1.133 2.5 2.5V13h-1.875v-1.25c0-.312-.312-.625-.625-.625h-4.61c-1.171 0-2.265-.43-3.085-1.25L7.75 8.82a.63.63 0 0 0-.43-.195H2.75a.64.64 0 0 0-.625.625v10.234l2.656-4.609c.235-.39.625-.625 1.094-.625H21.5c.43 0 .86.234 1.055.625.234.39.234.898 0 1.29l-4.375 7.5a1.28 1.28 0 0 1-1.055.585z' />
    </g>
    <defs>
      <clipPath id='47694049a0a49fb5e91d447a215b6a55__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFolderOpenLgBoldIcon);
export default ForwardRef;
