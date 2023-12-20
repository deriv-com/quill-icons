import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowUpAZXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 27 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.016 7.734 4.5 4.5c.312.344.312.688 0 1.032-.344.312-.688.312-1.032 0L8.25 10.078V27.75c-.031.469-.281.719-.75.75-.469-.031-.719-.281-.75-.75V10.078l-3.234 3.188c-.344.312-.688.312-1.032 0-.312-.344-.312-.688 0-1.032l4.5-4.5c.344-.312.688-.312 1.032 0M16.5 19.5h6c.313 0 .531.14.656.422a.805.805 0 0 1-.047.797L18.047 27H22.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-6c-.312 0-.531-.14-.656-.422a.742.742 0 0 1 .094-.797L20.953 21H16.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75m3-12c.313 0 .531.14.656.422l3 6h.047l.703 1.5c.188.437.078.765-.328.984-.406.188-.734.078-.984-.328L22.03 15H16.97l-.563 1.078c-.218.406-.547.516-.984.328-.406-.218-.516-.547-.328-.984l.75-1.5 3-6c.125-.281.343-.422.656-.422m-1.781 6h3.562L19.5 9.938z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZXlRegularIcon);
export default ForwardRef;
