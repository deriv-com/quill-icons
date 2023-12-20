import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopwatchCaptionRegularIcon = (
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
        d='M3.25 3.875c.016-.234.14-.36.375-.375h3.75c.234.016.36.14.375.375-.016.234-.14.36-.375.375h-1.5v1.523c1.188.11 2.188.555 3 1.336l.867-.867c.172-.156.344-.156.516 0 .156.172.156.344 0 .516l-.89.89c.655.844.991 1.836 1.007 2.977-.031 1.375-.508 2.523-1.43 3.445-.922.922-2.07 1.399-3.445 1.43-1.375-.031-2.523-.508-3.445-1.43-.922-.922-1.399-2.07-1.43-3.445.031-1.312.469-2.422 1.313-3.328.843-.89 1.906-1.399 3.187-1.524V4.25h-1.5c-.234-.016-.36-.14-.375-.375m-1.875 6.75c0 .75.188 1.438.563 2.063.359.624.859 1.124 1.5 1.5a4.098 4.098 0 0 0 2.062.562c.719 0 1.406-.187 2.063-.562a4.063 4.063 0 0 0 1.5-1.5 3.934 3.934 0 0 0 .562-2.063c0-.75-.187-1.437-.562-2.062a4.063 4.063 0 0 0-1.5-1.5A4.098 4.098 0 0 0 5.5 6.5c-.719 0-1.406.188-2.062.563-.641.375-1.141.875-1.5 1.5a3.934 3.934 0 0 0-.563 2.062m4.5-2.25V11c-.016.234-.14.36-.375.375-.234-.016-.36-.14-.375-.375V8.375c.016-.234.14-.36.375-.375.234.016.36.14.375.375'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopwatchCaptionRegularIcon);
export default ForwardRef;
