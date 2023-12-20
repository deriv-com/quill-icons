import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedPenLineSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='m.48 15.754.63-2.133c.127-.4.337-.738.628-1.012l8.313-8.34a1.729 1.729 0 0 1 1.23-.492c.456 0 .866.164 1.23.493l1.095 1.093a1.75 1.75 0 0 1 .492 1.395c-.037.4-.2.756-.492 1.066l-8.313 8.313-.11.11a2.6 2.6 0 0 1-.93.519l-2.132.629-1.148.328a.625.625 0 0 1-.657-.164c-.164-.183-.218-.401-.164-.657zm1.723-1.121-.465 1.504 1.504-.438.656-.191c.164-.055.32-.146.465-.274l6.235-6.261-1.696-1.696-6.234 6.235-.055.054c-.11.128-.191.265-.246.41zm4.703 1.805h8.313c.4.036.62.255.656.656-.037.4-.255.62-.656.656H6.906c-.4-.037-.62-.255-.656-.656.036-.401.255-.62.656-.657'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineSmBoldIcon);
export default ForwardRef;
