import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedInfoSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 6 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.906 5.719c.018-.42.2-.739.547-.957.365-.183.73-.183 1.094 0 .346.218.529.537.547.957-.018.419-.2.738-.547.957-.365.182-.73.182-1.094 0-.346-.219-.529-.538-.547-.957m-1.093 3.5c.036-.401.255-.62.656-.656H3c.401.036.62.255.656.656v7.219H4.97c.4.036.62.255.656.656-.036.4-.255.62-.656.656H1.03c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.657h1.313V9.875h-.875c-.401-.036-.62-.255-.657-.656'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h6v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedInfoSmBoldIcon);
export default ForwardRef;
