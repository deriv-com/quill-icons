import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedSterlingSignCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M2.5 7.227V8.75h3.188c.343.031.53.219.562.563-.031.343-.219.53-.563.562H2.5v1.477c0 .609-.148 1.18-.445 1.71l-.305.563h5.438c.343.031.53.219.562.563-.031.343-.219.53-.563.562H.813c-.203 0-.367-.094-.492-.281a.552.552 0 0 1 0-.54l.75-1.406c.203-.359.305-.75.305-1.171V9.875H.812C.47 9.844.282 9.656.25 9.312c.031-.343.219-.53.563-.562h.562V7.227c.016-.844.305-1.547.867-2.11.563-.562 1.266-.851 2.11-.867.328 0 .648.055.96.164l1.875.61c.313.14.43.382.352.726-.14.313-.383.43-.726.352l-1.875-.633a1.84 1.84 0 0 0-.586-.094 1.917 1.917 0 0 0-1.313.54c-.344.358-.523.796-.539 1.312Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignCaptionBoldIcon);
export default ForwardRef;
