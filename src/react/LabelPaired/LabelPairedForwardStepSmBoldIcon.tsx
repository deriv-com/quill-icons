import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedForwardStepSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 9 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.688 6.156c.036-.4.255-.62.656-.656.4.036.62.255.656.656V15.343c-.036.402-.255.62-.656.657-.401-.037-.62-.255-.657-.656v-2.871l-4.84 3.39a.863.863 0 0 1-.464.137.731.731 0 0 1-.574-.246.731.731 0 0 1-.247-.574V6.32c0-.237.083-.428.247-.574a.731.731 0 0 1 .574-.246c.182 0 .337.046.465.137l4.84 3.39zm0 4.703v-.218L1.875 7.277v6.973z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepSmBoldIcon);
export default ForwardRef;
