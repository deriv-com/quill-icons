import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M7 3.5a.595.595 0 0 1 .516.328l1.593 3.305 3.586.515c.235.047.39.18.47.399a.535.535 0 0 1-.142.562l-2.601 2.579.61 3.656c.03.219-.048.406-.235.562a.532.532 0 0 1-.586.024L7 13.719l-3.21 1.71a.507.507 0 0 1-.587-.046c-.187-.14-.265-.32-.234-.54l.61-3.655L.976 8.609a.535.535 0 0 1-.141-.562.587.587 0 0 1 .469-.399l3.586-.515 1.593-3.305A.595.595 0 0 1 7 3.5m0 1.852-1.242 2.53a.575.575 0 0 1-.422.329l-2.766.398 2.016 1.993c.125.14.18.304.164.492l-.492 2.812 2.484-1.312a.508.508 0 0 1 .516 0l2.46 1.312-.468-2.812a.538.538 0 0 1 .164-.492l2.016-1.993-2.766-.398a.575.575 0 0 1-.422-.328z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionBoldIcon);
export default ForwardRef;
