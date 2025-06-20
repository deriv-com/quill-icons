import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaybackSpeedMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 12c0 3.969-2.969 7.219-6.75 7.688v-1.5c2.969-.47 5.25-3.063 5.25-6.188A6.25 6.25 0 0 0 9 5.844V4.312c3.781.5 6.75 3.75 6.75 7.688M4.344 6.938 3.25 5.875A7.9 7.9 0 0 1 7 4.313v1.53C6 6 5.094 6.376 4.344 6.939M2.906 8.344A6.24 6.24 0 0 0 1.812 11h-1.5c.157-1.375.72-2.656 1.532-3.719zm0 7.312L1.844 16.75A7.55 7.55 0 0 1 .313 13h1.5c.156 1 .53 1.906 1.093 2.656m1.438 1.438c.75.531 1.656.937 2.656 1.093v1.5a7.55 7.55 0 0 1-3.75-1.53zm1.781-9.25a.78.78 0 0 1 .781.062l5 3.5c.219.125.313.375.313.594 0 .25-.094.5-.313.625l-5 3.5a.78.78 0 0 1-.781.063c-.219-.125-.375-.407-.375-.688v-7c0-.25.156-.531.375-.656' />
    </g>
    <defs>
      <clipPath id='4071f4a88c111eacc6bb8f2e0a389a04__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaybackSpeedMdFillIcon);
export default ForwardRef;
