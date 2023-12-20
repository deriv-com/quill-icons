import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopLossCaptionRegularIcon = (
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
        d='M5.11 12.758c-.54 0-.985-.094-1.36-.281a2.725 2.725 0 0 1-.937-.774l.703-.656c.21.258.468.469.726.61.258.14.563.21.914.21.399 0 .703-.094.914-.281.211-.188.305-.422.305-.727 0-.234-.07-.445-.21-.586-.142-.14-.4-.257-.774-.328l-.563-.093c-.61-.118-1.055-.305-1.36-.61C3.142 8.961 3 8.562 3 8.07c0-.28.047-.539.14-.75.118-.234.258-.422.446-.562a2.01 2.01 0 0 1 .703-.375c.258-.07.563-.117.914-.117.469 0 .867.07 1.219.257.351.141.656.399.89.704l-.703.632a2.065 2.065 0 0 0-.586-.515 2.004 2.004 0 0 0-.89-.188c-.352 0-.633.07-.82.211-.211.14-.305.352-.305.633s.094.469.234.61c.164.117.422.21.774.28l.562.118c.61.117 1.078.328 1.36.61.304.28.445.679.445 1.194 0 .282-.047.563-.14.797-.118.235-.259.446-.47.61-.187.187-.421.304-.703.398a3.07 3.07 0 0 1-.96.14m3.492-.117V6.359h1.007v5.391h2.555v.89z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossCaptionRegularIcon);
export default ForwardRef;
