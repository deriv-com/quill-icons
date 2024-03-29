import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodSkrillBrandIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#6C2556'
      fillRule='evenodd'
      d='M82.618 32.736c1.884 0 3.411-1.508 3.411-3.368S84.502 26 82.62 26c-1.885 0-3.412 1.508-3.412 3.368s1.527 3.368 3.411 3.368m-26.084 1.809a24.1 24.1 0 0 1-3.937 6.666V27.54l-7.086 1.39v24.785h7.086v-7.666a26.5 26.5 0 0 1 3.036 7.666h8.533c-.84-3.468-4.535-9.864-4.535-9.864a30.8 30.8 0 0 0 5-9.305zm18.736-.26c-6.387.21-9.626 2.998-9.626 8.655v10.774h6.954v-8.785c0-3.368.445-4.807 4.494-4.997v-5.597a10 10 0 0 0-1.832-.1zm-41.753 2.998c-.88-.05-2.895-.18-2.895-1.998 0-2.17 2.905-2.17 3.998-2.17 2.101.094 4.18.46 6.185 1.09 0 0 1.012.34 1.832.69h.07v-5.887h-.1a25.1 25.1 0 0 0-9.05-1.419C25.773 27.54 23 32.007 23 35.854c0 2.209.962 7.416 9.879 7.996.76 0 2.763.16 2.763 1.998 0 1.54-1.64 2.439-4.403 2.439a21.8 21.8 0 0 1-7.753-1.49v6.197a36.6 36.6 0 0 0 9.21 1c7.613 0 11.024-4.238 11.024-8.435 0-4.768-3.816-7.856-10.213-8.286zm45.64 16.43h6.913V34.566h-6.913zm19.92-24.985v24.986H106V27.539l-6.913 1.22zm-10.122 0 6.923-1.189v26.175h-6.883V28.728z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodSkrillBrandIcon);
export default ForwardRef;
