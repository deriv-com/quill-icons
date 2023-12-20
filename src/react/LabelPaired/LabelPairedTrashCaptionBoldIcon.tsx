import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedTrashCaptionBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 11 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.398 4.625c-.062 0-.109.031-.14.094l-.445.656H7.21l-.445-.656c-.047-.063-.102-.094-.164-.094zm4.149.75h1.641c.343.031.53.219.562.563-.031.343-.219.53-.562.562h-.282l-.562 7.617a1.47 1.47 0 0 1-.469.985c-.281.25-.617.382-1.008.398H3.133a1.564 1.564 0 0 1-1.008-.398 1.47 1.47 0 0 1-.469-.985L1.094 6.5H.812C.47 6.469.283 6.281.25 5.938c.031-.344.219-.532.563-.563H2.453l.867-1.29c.266-.374.625-.57 1.078-.585h2.204c.453.016.82.21 1.101.586zM8.78 6.5H2.22l.539 7.523c.047.22.172.336.375.352h4.734c.203-.016.328-.133.375-.352z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashCaptionBoldIcon);
export default ForwardRef;
