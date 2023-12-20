import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStarCaptionRegularIcon = (
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
        d='M5.57 7.46a.785.785 0 0 1-.586.423l-3.21.469 2.343 2.32c.172.172.242.39.211.656l-.562 3.258 2.882-1.524a.706.706 0 0 1 .704 0l2.882 1.524-.562-3.258c-.031-.265.039-.484.21-.656l2.345-2.32-3.235-.47a.774.774 0 0 1-.562-.421L7 4.484zm4.64 7.97L7 13.719l-3.21 1.71a.507.507 0 0 1-.587-.046c-.187-.14-.265-.32-.234-.54l.61-3.655L.976 8.609a.535.535 0 0 1-.141-.562.538.538 0 0 1 .469-.375l3.586-.54 1.593-3.304A.595.595 0 0 1 7 3.5a.595.595 0 0 1 .516.328l1.593 3.305 3.586.515c.235.047.39.18.47.399a.535.535 0 0 1-.142.562l-2.601 2.579.61 3.656c.03.219-.048.398-.235.539a.507.507 0 0 1-.586.047'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarCaptionRegularIcon);
export default ForwardRef;
