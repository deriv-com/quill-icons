import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedArrowDownAZXlRegularIcon = (
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
        d='m12.516 23.766-4.5 4.5c-.344.312-.688.312-1.032 0l-4.5-4.5c-.312-.344-.312-.688 0-1.032.344-.312.688-.312 1.032 0l3.234 3.188V8.25c.031-.469.281-.719.75-.75.469.031.719.281.75.75v17.672l3.234-3.188c.344-.312.688-.312 1.032 0 .312.344.312.688 0 1.032m7.64-15.844 3 5.953v.047l.75 1.5c.188.406.078.734-.328.984-.437.188-.765.078-.984-.328L22.03 15H16.97l-.563 1.078c-.25.406-.578.516-.984.328-.406-.218-.516-.547-.328-.984l.703-1.5h.047l3-6c.125-.281.343-.422.656-.422s.531.14.656.422M19.5 9.938 17.719 13.5h3.562zm-3 9.562h6c.313 0 .531.14.656.422a.805.805 0 0 1-.047.797L18.047 27H22.5c.469.031.719.281.75.75-.031.469-.281.719-.75.75h-6c-.312 0-.531-.14-.656-.422a.742.742 0 0 1 .094-.797L20.953 21H16.5c-.469-.031-.719-.281-.75-.75.031-.469.281-.719.75-.75'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownAZXlRegularIcon);
export default ForwardRef;
