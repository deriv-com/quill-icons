import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 23.625h1.25V25.5H2.5A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v5.195h-1.875v-5H10c-.703 0-1.25-.547-1.25-1.25V7.375H2.5A.64.64 0 0 0 1.875 8v15c0 .352.273.625.625.625m4.375-4.375h1.25c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-1.25a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m.625 5h.625a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625H7.5zm10.313-5h.625c.859 0 1.562.703 1.562 1.563v.312a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.312a.336.336 0 0 0-.312-.313h-.625a.31.31 0 0 0-.313.313v3.125c0 .195.117.312.313.312h.625a.31.31 0 0 0 .312-.312v-.313c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.313c0 .898-.703 1.562-1.562 1.562h-.625c-.899 0-1.563-.664-1.563-1.562v-3.125c0-.86.664-1.563 1.563-1.563m-6.563 1.563c0-.86.664-1.563 1.563-1.563h.624c.86 0 1.563.703 1.563 1.563v3.125c0 .898-.703 1.562-1.562 1.562h-.626c-.898 0-1.562-.664-1.562-1.562zm1.563-.313a.31.31 0 0 0-.313.313v3.125c0 .195.117.312.313.312h.624a.31.31 0 0 0 .313-.312v-3.125a.336.336 0 0 0-.312-.313z' />
    </g>
    <defs>
      <clipPath id='b055a2cc9ea1afb197eb22c36b40ae7c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocLgBoldIcon);
export default ForwardRef;
