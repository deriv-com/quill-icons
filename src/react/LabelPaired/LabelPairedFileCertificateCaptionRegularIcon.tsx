import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCertificateCaptionRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 12 18'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M11.25 14V8H8.625a1.223 1.223 0 0 1-.797-.328 1.223 1.223 0 0 1-.328-.797V4.25h-3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v1.5a1.253 1.253 0 0 0-.586.094l-.14.047c0 .015-.008.023-.024.023V5c.016-.422.164-.773.445-1.055.282-.28.633-.43 1.055-.445h3.656c.313 0 .578.11.797.328l2.719 2.719c.219.219.328.484.328.797V14a1.515 1.515 0 0 1-.445 1.055c-.282.28-.633.43-1.055.445H5.18c.047-.125.07-.25.07-.375v-.375h5.25a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54m0-6.75a.624.624 0 0 0-.117-.164L8.414 4.367a.348.348 0 0 0-.164-.094v2.602c.016.234.14.36.375.375zm-9.61 4.664a.88.88 0 0 1 .61.352l.164.187.234-.094a.914.914 0 0 1 .704 0l.234.094.164-.187a.88.88 0 0 1 .61-.352l.257-.047.047-.258.727.118-.047.375c-.047.28-.211.445-.492.492l-.352.047v2.484c0 .14-.062.25-.187.328a.402.402 0 0 1-.399-.023L3 14.82l-.914.61a.362.362 0 0 1-.375.023c-.14-.078-.211-.187-.211-.328v-2.484l-.352-.047c-.28-.047-.445-.211-.492-.492l-.047-.399a.294.294 0 0 0-.07-.117l-.328-.234c-.203-.188-.258-.407-.164-.657l.14-.375a.217.217 0 0 0 0-.14l-.14-.375c-.094-.25-.04-.47.164-.657l.328-.234.445.586-.187.164.094.234a.914.914 0 0 1 0 .704l-.094.234.187.164-.445.586L.984 11a.97.97 0 0 1 .375.61l.024.257zl-.047.352zm-1.1-3a.294.294 0 0 0 .07-.117l.046-.399c.047-.28.211-.445.492-.492l.399-.047a.294.294 0 0 0 .117-.07l.234-.328c.188-.203.407-.258.657-.164l.375.14a.217.217 0 0 0 .14 0l.375-.14c.25-.094.47-.04.657.164l.234.328a.297.297 0 0 0 .14.07l.399.047c.266.047.422.211.469.492l.047.399c.015.047.039.086.07.117l.328.234c.203.188.258.407.164.657l-.14.375a.217.217 0 0 0 0 .14l.14.375c.094.25.04.47-.164.657l-.328.234a.294.294 0 0 0-.07.117l-.727-.094A.88.88 0 0 1 5.016 11l.187-.164-.094-.234a.914.914 0 0 1 0-.704l.094-.234-.187-.164a.88.88 0 0 1-.352-.61l-.047-.257-.258-.024a.97.97 0 0 1-.609-.375l-.164-.187-.234.094-.258-.657.258.657a.914.914 0 0 1-.704 0l-.234-.094-.164.187a.97.97 0 0 1-.61.375l-.257.024-.024.258-.68-.094.68.094a.97.97 0 0 1-.375.609zm3.21 5.508V13.25c-.11.016-.21 0-.305-.047l-.375-.14a.117.117 0 0 0-.14 0l-.375.14a.506.506 0 0 1-.305.047v1.172l.54-.352a.352.352 0 0 1 .42 0z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateCaptionRegularIcon);
export default ForwardRef;
