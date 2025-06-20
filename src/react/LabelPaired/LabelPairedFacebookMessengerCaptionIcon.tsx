import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookMessengerCaptionIcon = (
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
      <path d='M6 3.688c3.281 0 5.813 2.414 5.813 5.648 0 4.102-3.915 6.398-7.5 5.414-.211-.047-.235 0-1.454.54-.164.046-.328.046-.445-.048-.14-.07-.21-.21-.21-.375-.048-1.078 0-1.172-.188-1.36C.867 12.5.188 11.024.188 9.337c0-3.234 2.53-5.648 5.812-5.648m3.492 4.359c.164-.258-.14-.563-.398-.375L7.266 9.055c-.141.093-.305.093-.422 0l-1.36-1.008c-.21-.14-.445-.211-.68-.164a.82.82 0 0 0-.585.398l-1.711 2.696c-.164.257.14.562.398.375l1.828-1.383c.141-.094.305-.094.422 0l1.36 1.008c.21.14.445.21.703.164a.82.82 0 0 0 .562-.399z' />
    </g>
    <defs>
      <clipPath id='26a0d80f2b954fe0afe9c6df95fc80eb__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookMessengerCaptionIcon);
export default ForwardRef;
