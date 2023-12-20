import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPhoneCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m8.813 9.945 2.624 1.125c.204.094.36.242.47.446.093.187.116.39.07.609l-.563 2.625c-.125.469-.43.719-.914.75h-.422a2.32 2.32 0 0 0-.328-.023c-1.828-.157-3.477-.711-4.945-1.665a10.508 10.508 0 0 1-3.492-3.726C.453 8.57.016 6.875 0 5c.031-.484.281-.79.75-.914l2.625-.563a.826.826 0 0 1 .61.094.884.884 0 0 1 .445.446l1.125 2.625c.156.421.062.789-.282 1.101l-.937.774a7.162 7.162 0 0 0 2.601 2.601l.774-.937c.312-.344.68-.438 1.101-.282M10.5 14.75c.094 0 .156-.047.188-.14l.562-2.626c.016-.109-.023-.18-.117-.21l-2.625-1.126c-.078-.03-.149-.015-.211.047l-.774.961c-.28.281-.601.336-.96.164A7.735 7.735 0 0 1 3.68 8.937c-.172-.359-.118-.68.164-.96l.96-.774c.063-.062.079-.133.048-.21L3.727 4.366c-.047-.094-.118-.133-.211-.117L.89 4.813C.797 4.843.75 4.906.75 5c.016 1.813.46 3.453 1.336 4.922a9.596 9.596 0 0 0 3.492 3.492c1.469.875 3.11 1.32 4.922 1.336'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPhoneCaptionRegularIcon);
export default ForwardRef;
