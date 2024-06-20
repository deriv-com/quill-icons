import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.164 3.57 5.461 3.07c.234.141.375.376.375.633a.735.735 0 0 1-.75.727H.727A.73.73 0 0 1 0 7.273a.77.77 0 0 1 .352-.632l5.46-3.07c.118-.071.258-.071.352 0m1.008 3.68h4.008L6 4.32.797 7.25h4.008c-.094-.164-.117-.352-.117-.562 0-.704.585-1.313 1.312-1.313.703 0 1.313.61 1.313 1.313q0 .315-.141.562M6 6.125a.555.555 0 0 0-.562.563c0 .328.234.562.562.562a.555.555 0 0 0 .563-.562A.57.57 0 0 0 6 6.125M1.5 11.75v-3h.75v3h1.875v-3h.75v3h2.25v-3h.75v3H9.75v-3h.75v3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375m-.562 1.5h10.125c.187 0 .374.188.374.375 0 .21-.187.375-.374.375H.938a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375m-.563 1.5h11.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.375A.37.37 0 0 1 0 15.125c0-.187.164-.375.375-.375' />
    </g>
    <defs>
      <clipPath id='520d38a02264bfcfa03bcc40dc7fe0cf__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankCaptionRegularIcon);
export default ForwardRef;
