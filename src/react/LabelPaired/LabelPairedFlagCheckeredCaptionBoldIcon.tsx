import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFlagCheckeredCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M.813 3.5c.343.031.53.219.562.563v.656l1.992-.492a3.948 3.948 0 0 1 2.672.28 3.694 3.694 0 0 0 1.711.423c.594 0 1.172-.14 1.734-.422l.211-.094c.266-.125.5-.117.703.024.22.125.336.328.352.609v6.562c-.016.329-.18.563-.492.704l-.797.304c-1.14.406-2.25.344-3.328-.187a4.268 4.268 0 0 0-2.883-.305l-1.875.469v2.344c-.031.343-.219.53-.562.562-.344-.031-.532-.219-.563-.562V4.063c.031-.344.219-.532.563-.563m.562 3.54 1.875-.423V5.422l-1.875.469zm0 1.148v1.101l1.875-.422V7.79zm0 2.25v1.007l1.617-.422c.078-.015.164-.03.258-.046v-.938zm3 .445a5.41 5.41 0 0 1 2.25.539v-1.149l-1.29-.398a2.215 2.215 0 0 0-.96-.07zm3.375.867a3.19 3.19 0 0 0 1.313-.187l.562-.211V10.25l-.61.14a4.33 4.33 0 0 1-1.265.094zm1.875-2.648V8l-.61.14a4.33 4.33 0 0 1-1.265.094V9.36c.344.032.688.008 1.031-.07zm0-2.25V5.68c-.61.25-1.234.375-1.875.375v1.054c.344.032.688.008 1.031-.07zm-3-.938a4.248 4.248 0 0 1-1.102-.398 2.89 2.89 0 0 0-1.148-.282v1.172c.438-.015.86.032 1.266.14l.984.306zm0 2.11-1.29-.399a2.215 2.215 0 0 0-.96-.07V8.68c.438-.032.86.008 1.266.117l.984.305z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFlagCheckeredCaptionBoldIcon);
export default ForwardRef;
