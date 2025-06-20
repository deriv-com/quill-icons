import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGooglePlayLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.695 14.68 2.344-2.344L4.063 6.008zM1.835 5.5l10 10-10 10a1.48 1.48 0 0 1-.858-1.367V6.906c0-.625.351-1.133.859-1.406m16.603 8.828c.742.547.742 1.836.039 2.383l-2.344 1.328-2.578-2.539 2.578-2.5zM4.063 24.992l8.632-8.633 2.344 2.344z' />
    </g>
    <defs>
      <clipPath id='5865cc1ef7d8671597025b42b9af1d2d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayLgIcon);
export default ForwardRef;
