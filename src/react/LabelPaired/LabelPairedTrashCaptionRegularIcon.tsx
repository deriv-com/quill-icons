import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashCaptionRegularIcon = (
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
        d='M4.422 4.25c-.14 0-.25.063-.328.188L3.742 5h3.516l-.352-.562a.367.367 0 0 0-.328-.188zM8.148 5H10.375c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-.422l-.61 8.367a1.47 1.47 0 0 1-.468.985c-.281.25-.625.382-1.031.398H3.156a1.594 1.594 0 0 1-1.031-.398 1.47 1.47 0 0 1-.469-.985l-.61-8.367H.626c-.234-.016-.36-.14-.375-.375.016-.234.14-.36.375-.375H2.852l.609-.96c.234-.345.555-.524.96-.54h2.157c.406.016.727.195.961.54zm1.055.75H1.797l.61 8.297a.704.704 0 0 0 .234.492c.14.14.312.211.515.211h4.688c.203 0 .375-.07.515-.21a.704.704 0 0 0 .235-.493z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashCaptionRegularIcon);
export default ForwardRef;
