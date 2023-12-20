import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardXlRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 36'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M22.219 18 12 10.594v14.812zM11.906 9c.313 0 .594.094.844.281l10.781 7.828c.313.22.469.516.469.891s-.156.672-.469.89L12.75 26.72c-.25.187-.531.281-.844.281-.406 0-.734-.14-.984-.422-.281-.25-.422-.578-.422-.984v-4.828l-8.25 5.953c-.25.187-.531.281-.844.281-.406 0-.734-.14-.984-.422C.14 26.328 0 26 0 25.594V10.406c0-.406.14-.734.422-.984C.672 9.14 1 9 1.406 9c.313 0 .594.094.844.281l8.25 5.953v-4.828c0-.406.14-.734.422-.984.25-.281.578-.422.984-.422M10.5 18.89v-1.78l-9-6.516v14.812z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardXlRegularIcon);
export default ForwardRef;
