import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSterlingCaptionBoldIcon = (
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
      <path d='M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.117-2.25a.71.71 0 0 0-.703.727v.773h.961c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.96v.234q0 .669-.212 1.266h2.484a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H4.313c-.211 0-.399-.094-.493-.258a.6.6 0 0 1-.023-.562l.234-.422c.188-.352.258-.75.258-1.125V9.5h-.164a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.164v-.773c0-1.008.82-1.852 1.828-1.852.235 0 .469.047.68.14l.726.282a.56.56 0 0 1 .305.726.553.553 0 0 1-.726.329l-.727-.282a.47.47 0 0 0-.258-.07' />
    </g>
    <defs>
      <clipPath id='cea80757f744f0d7fabfa6cccdb6a4a4__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSterlingCaptionBoldIcon);
export default ForwardRef;
