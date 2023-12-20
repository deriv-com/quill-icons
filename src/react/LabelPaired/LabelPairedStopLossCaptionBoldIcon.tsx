import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedStopLossCaptionBoldIcon = (
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
        d='M5.016 12.758c-.563 0-1.032-.094-1.407-.281-.398-.188-.703-.446-.984-.727l.89-.914c.446.469.962.726 1.594.726.329 0 .586-.07.727-.21a.713.713 0 0 0 .258-.563.654.654 0 0 0-.14-.422c-.095-.117-.306-.21-.587-.234l-.633-.094c-.656-.094-1.148-.281-1.453-.61-.304-.304-.469-.726-.469-1.265 0-.281.047-.539.165-.773.117-.235.257-.422.468-.586.188-.188.446-.305.727-.399.305-.093.633-.14 1.008-.14.468 0 .89.07 1.242.234.351.14.68.352.937.656l-.914.914a1.428 1.428 0 0 0-.562-.422 1.602 1.602 0 0 0-.797-.187c-.305 0-.54.07-.68.164a.577.577 0 0 0-.234.469c0 .21.07.351.187.469.118.093.305.164.563.187l.633.117c.633.094 1.125.281 1.43.586.327.305.468.727.468 1.266 0 .304-.047.586-.164.82a1.617 1.617 0 0 1-.469.656c-.21.188-.468.328-.773.422-.305.094-.656.14-1.031.14m3.586-.117V6.359H9.96v5.086h2.39v1.196z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossCaptionBoldIcon);
export default ForwardRef;
