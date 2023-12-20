import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedEllipsisSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 13 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.188 10.75c-.019.492-.238.875-.657 1.148a1.394 1.394 0 0 1-1.312 0c-.42-.273-.638-.656-.656-1.148.018-.492.236-.875.656-1.148a1.394 1.394 0 0 1 1.312 0c.42.273.638.656.656 1.148m-4.376 0c-.018.492-.236.875-.656 1.148a1.394 1.394 0 0 1-1.312 0c-.42-.273-.638-.656-.657-1.148.019-.492.237-.875.657-1.148a1.395 1.395 0 0 1 1.312 0c.42.273.638.656.657 1.148m-5.687 1.313c-.492-.019-.875-.238-1.148-.657a1.394 1.394 0 0 1 0-1.312c.273-.42.656-.638 1.148-.656.492.018.875.236 1.148.656.22.437.22.875 0 1.312-.273.42-.656.638-1.148.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisSmBoldIcon);
export default ForwardRef;
