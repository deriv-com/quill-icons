import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleCaretDownCaptionFillIcon = (
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
      <path d='M6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3 5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5m0 8.625c.14 0 .305-.047.398-.164l2.438-2.625c.164-.164.187-.399.117-.61a.59.59 0 0 0-.515-.351H3.561a.54.54 0 0 0-.515.352c-.094.21-.07.445.094.609l2.437 2.625a.56.56 0 0 0 .422.164' />
    </g>
    <defs>
      <clipPath id='2e325de3bc27c065f9e799c9490b6d41__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleCaretDownCaptionFillIcon);
export default ForwardRef;
