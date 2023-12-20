import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedYoutubeIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M17.188 7.875a14.8 14.8 0 0 1 .25 1.656c.041.646.072 1.219.093 1.719V12.781c-.02.5-.052 1.063-.093 1.688a14.708 14.708 0 0 1-.25 1.687c-.25.771-.76 1.271-1.532 1.5-.5.104-1.27.188-2.312.25-1.042.042-2.01.073-2.906.094H7.563c-.896-.02-1.865-.052-2.907-.094-1.041-.062-1.812-.146-2.312-.25-.771-.229-1.281-.729-1.531-1.5a14.715 14.715 0 0 1-.25-1.687 68.451 68.451 0 0 1-.094-1.688V11.25c.02-.5.052-1.073.094-1.719.062-.625.145-1.177.25-1.656.25-.77.76-1.281 1.53-1.531.5-.104 1.272-.188 2.313-.25C5.698 6.052 6.666 6.02 7.563 6h2.875c.895.02 1.864.052 2.906.094 1.041.062 1.812.146 2.312.25.771.25 1.281.76 1.531 1.531M7.25 14.563 11.719 12 7.25 9.469z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeIcon);
export default ForwardRef;
