import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedBoxArchiveCircleArrowUpCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M0 5c0-.398.328-.75.75-.75h10.5c.398 0 .75.352.75.75v1.875c0 .422-.352.75-.75.75H.75a.74.74 0 0 1-.75-.75zm.75 3.375h1.125v4.875c0 .21.164.375.375.375h5.531c.14.422.375.797.657 1.125H2.25a1.48 1.48 0 0 1-1.5-1.5zm.375-3V6.5h9.75V5.375zM3.75 9.313c0-.305.234-.563.563-.563h3.375a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H4.313a.542.542 0 0 1-.563-.562m4.5 2.812a3.32 3.32 0 0 1 1.688-2.906 3.344 3.344 0 0 1 3.374 0A3.367 3.367 0 0 1 15 12.125c0 1.219-.656 2.32-1.687 2.93a3.344 3.344 0 0 1-3.376 0 3.356 3.356 0 0 1-1.687-2.93m1.781-.445a.397.397 0 0 0 0 .539c.14.14.399.14.54 0 .21-.235.445-.446.679-.68v2.086c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375v-2.086c.21.234.445.445.656.68.14.14.399.14.54 0a.397.397 0 0 0 0-.54l-1.313-1.312a.397.397 0 0 0-.54 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBoxArchiveCircleArrowUpCaptionBoldIcon);
export default ForwardRef;
