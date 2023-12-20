import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFiatOfframpCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 15 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M1.5 6.5c0-1.64 1.336-3 3-3 1.64 0 3 1.36 3 3 0 .305-.047.586-.14.867l2.273 2.274A2.69 2.69 0 0 1 10.5 9.5c1.64 0 3 1.36 3 3 0 1.664-1.36 3-3 3H3.375A1.851 1.851 0 0 1 1.5 13.625zm.75 1.992v5.133a1.11 1.11 0 0 0 1.125 1.125h5.133C7.875 14.21 7.5 13.414 7.5 12.5c0-1.078.563-2.016 1.406-2.531L7.031 8.094A2.954 2.954 0 0 1 4.5 9.5c-.914 0-1.71-.375-2.25-1.008M4.5 4.25c-.82 0-1.57.445-1.969 1.125a2.311 2.311 0 0 0 0 2.273 2.284 2.284 0 0 0 1.946 1.125c.82 0 1.546-.445 1.968-1.125a2.267 2.267 0 0 0 0-2.25A2.307 2.307 0 0 0 4.5 4.25m3.844 1.617c.14-.14.398-.14.539 0L10.5 7.484v-.609c0-.187.164-.375.375-.375.188 0 .375.188.375.375v1.5a.36.36 0 0 1-.234.352c-.141.07-.305.023-.422-.07l-2.25-2.25a.397.397 0 0 1 0-.54M10.5 10.25c-.305 0-.562.07-.82.164h-.024a2.25 2.25 0 1 0 .844-.164M4.102 4.742v.516h.515v-.516h.492v.516c.188 0 .352.07.493.187.304.282.328.75.046 1.055.141.14.211.328.211.516 0 .422-.351.75-.75.75v.492h-.492v-.492h-.515v.492h-.493v-.492h-.492V7.25h.492v-1.5h-.492v-.492h.492v-.516zm1.007 2.016H4.102v.492h1.007a.26.26 0 0 0 .258-.258c0-.117-.117-.234-.258-.234m0-1.008H4.102v.516h1.007a.26.26 0 0 0 .258-.258.26.26 0 0 0-.258-.258m5.696 4.875v.281c.398.117.656.492.656.914v.094h-.61v-.094c0-.187-.164-.351-.374-.351a.36.36 0 0 0-.352.351c0 .211.164.375.352.375a.99.99 0 0 1 .984.985c0 .422-.258.797-.656.914v.281h-.633v-.281c-.399-.117-.656-.492-.656-.914v-.094h.609v.094a.36.36 0 0 0 .352.351c.21 0 .375-.164.375-.351a.37.37 0 0 0-.375-.375.97.97 0 0 1-.961-.985c0-.422.257-.797.656-.914v-.281z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpCaptionRegularIcon);
export default ForwardRef;
