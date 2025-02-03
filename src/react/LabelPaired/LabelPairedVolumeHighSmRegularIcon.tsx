import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.379 8.89a.4.4 0 0 1-.274.11H1.781c-.383 0-.656.3-.656.656v2.188c0 .383.273.656.656.656h2.324c.082 0 .192.055.274.11l3.746 3.335V5.582zm3.8-4.265c.438 0 .821.383.821.82v10.637c0 .438-.383.793-.82.793-.22 0-.41-.055-.547-.191l.3-.329-.3.329-3.719-3.309H1.781A1.53 1.53 0 0 1 .25 11.844V9.656c0-.82.684-1.531 1.531-1.531h2.133l3.719-3.281a.76.76 0 0 1 .547-.219m3.255 4.047c.629.465 1.066 1.23 1.066 2.078 0 .875-.437 1.64-1.066 2.105a.41.41 0 0 1-.602-.082.41.41 0 0 1 .082-.601c.438-.328.711-.848.711-1.422 0-.547-.273-1.066-.71-1.395a.41.41 0 0 1-.083-.601.41.41 0 0 1 .602-.082m1.148-1.914a.496.496 0 0 1 .629-.055c1.148.984 1.914 2.434 1.914 4.047 0 1.64-.766 3.09-1.914 4.047a.44.44 0 0 1-.629-.055.46.46 0 0 1 .055-.601 4.35 4.35 0 0 0 1.613-3.391c0-1.34-.629-2.57-1.613-3.363-.192-.164-.192-.438-.055-.63m2.379-1.996c1.695 1.449 2.789 3.582 2.789 5.988a7.91 7.91 0 0 1-2.79 6.016.44.44 0 0 1-.628-.055c-.164-.191-.137-.465.055-.602a7.02 7.02 0 0 0 2.46-5.359 7 7 0 0 0-2.46-5.332c-.192-.164-.219-.438-.055-.602a.44.44 0 0 1 .629-.054' />
    </g>
    <defs>
      <clipPath id='6362221ca31c3ed3d3a60724c418ca1e__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighSmRegularIcon);
export default ForwardRef;
