import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedMicrosoftStoreSmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 17 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.752 7.25V5.691c0-.957.492-1.257 1.422-1.476 1.394-.328 1.476.574 1.476 1.148v1.313l.356-.055v-1.23c0-1.094-.356-1.887-1.887-1.532-.848.164-1.695.383-1.695 1.805v1.668zm3.582-2.16c-.027-.137-.055-.246-.055-.356 1.067-.136 1.258.164 1.258 1.368v.218l-.328.055v-.328c0-.738 0-1.094-.875-.957m-2.05 1.34c0-1.094.437-1.258.984-1.45.027.11.054.22.054.356-.492.219-.683.355-.683 1.094v.465l-.356.054zm-4.43 1.832 9.378-1.887 1.887.684v9.187l-1.887.684-9.378-1.86zm2.023 5.113 2.078.273v-1.996H4.877zm0-1.996h2.078V9.492l-2.078.301zm2.352 2.297 2.625.383v-2.407H7.229zm0-2.297h2.625v-2.27l-2.625.383z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h17v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrosoftStoreSmIcon);
export default ForwardRef;
