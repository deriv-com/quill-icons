import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedTrashCaptionBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.398 4.625c-.062 0-.109.031-.14.094l-.446.656h3.399l-.445-.656c-.047-.063-.102-.094-.164-.094H4.398Zm4.149.75h1.641c.343.031.53.219.562.563-.031.343-.219.53-.563.562h-.28l-.563 7.617a1.47 1.47 0 0 1-.469.985c-.281.25-.617.382-1.008.398H3.133a1.564 1.564 0 0 1-1.008-.398 1.47 1.47 0 0 1-.469-.985L1.094 6.5H.812C.47 6.469.282 6.281.25 5.937c.031-.343.219-.53.563-.562H2.453l.867-1.29c.266-.374.625-.57 1.078-.585h2.204c.453.016.82.21 1.101.586l.844 1.289ZM8.78 6.5H2.22l.539 7.523c.047.22.172.336.375.352h4.734c.203-.016.328-.133.375-.352l.54-7.523Z'
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
