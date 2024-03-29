import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodBanxaBlackIcon = (
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
    <g fill='#000'>
      <path
        fillRule='evenodd'
        d='M21.369 39.732A6.033 6.033 0 0 0 16.602 30H5.928a.93.93 0 0 0-.928.928v18.564c0 .512.416.928.928.928H17.53a6.033 6.033 0 0 0 3.839-10.688M9.64 33.712a.93.93 0 0 0-.928.929v2.784c0 .513.415.929.928.929h6.961a2.32 2.32 0 0 0 0-4.641zM8.713 45.78c0 .513.415.928.928.928h7.89a2.32 2.32 0 1 0 0-4.64H9.64a.93.93 0 0 0-.928.928zM38.879 30c.674 0 1.295.366 1.622.955l9.282 16.707a1.856 1.856 0 0 1-1.623 2.758H29.597a1.856 1.856 0 0 1-1.623-2.758l9.282-16.707c.327-.59.948-.955 1.623-.955m6.127 16.707L38.878 35.68l-6.127 11.028z'
        clipRule='evenodd'
      />
      <path d='M55.122 50.42a.93.93 0 0 1-.928-.928V30.928c0-.512.415-.928.928-.928h1.328c.255 0 .5.105.675.29l12.848 13.605V30.928c0-.512.415-.928.928-.928h1.856c.513 0 .928.416.928.928v18.564a.93.93 0 0 1-.928.928H71.43a.93.93 0 0 1-.675-.29L57.906 36.525v12.966a.93.93 0 0 1-.928.928zM85.752 40.21l-6.734-8.714A.928.928 0 0 1 79.752 30H82.3c.295 0 .572.14.747.377l5.159 6.993 5.158-6.993A.93.93 0 0 1 94.11 30h2.547a.928.928 0 0 1 .734 1.496l-6.734 8.714 6.734 8.714a.928.928 0 0 1-.734 1.496H94.11a.93.93 0 0 1-.747-.377l-5.158-6.993-5.159 6.993a.93.93 0 0 1-.747.377h-2.546a.928.928 0 0 1-.735-1.496z' />
      <path
        fillRule='evenodd'
        d='M113.485 30.955a1.858 1.858 0 0 0-3.246 0l-9.282 16.707a1.856 1.856 0 0 0 1.623 2.758h18.564a1.858 1.858 0 0 0 1.622-2.758zm-1.623 4.724 6.127 11.028h-12.254z'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodBanxaBlackIcon);
export default ForwardRef;
