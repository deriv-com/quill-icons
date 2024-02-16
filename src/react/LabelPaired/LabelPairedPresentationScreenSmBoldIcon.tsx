import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.781 3.75H15.22q.601.054.656.656-.055.601-.656.657H.78Q.18 5.007.125 4.406q.054-.601.656-.656M1 5.938h1.313v5.906q.026.19.218.219H13.47q.19-.028.219-.22V5.939H15v5.906q-.027.656-.437 1.094-.438.41-1.094.437H8.656v1.258l1.996 1.996q.384.465 0 .93-.465.383-.93 0L8 15.836l-1.723 1.723q-.465.383-.93 0-.382-.465 0-.93l1.997-1.996v-1.258H2.53q-.656-.027-1.094-.437-.41-.438-.437-1.094z' />
    </g>
    <defs>
      <clipPath id='55862b7f35b0af5aa5b51d39a6556d56__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenSmBoldIcon);
export default ForwardRef;
