import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 11.25c-.422 0-.75.375-.75.75v1.078l8.063 6.61a2.615 2.615 0 0 0 3.328 0l8.109-6.61V12c0-.375-.375-.75-.75-.75zm-.75 4.734V24c0 .422.328.75.75.75h18c.375 0 .75-.328.75-.75v-8.016l-6.656 5.438c-1.828 1.5-4.406 1.5-6.188 0zM0 12c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3z' />
    </g>
    <defs>
      <clipPath id='784c3be3d84ad1d8b5c9692730ca8a6b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeXlBoldIcon);
export default ForwardRef;
