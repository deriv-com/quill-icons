import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStarXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m14.813 6.844 3.046 6.234 6.703.985a1.53 1.53 0 0 1 1.22 1.03 1.39 1.39 0 0 1-.376 1.5l-4.875 4.829 1.172 6.844a1.47 1.47 0 0 1-.61 1.453c-.468.375-1.077.375-1.593.14l-6-3.234-6.047 3.234c-.469.235-1.078.235-1.547-.14a1.47 1.47 0 0 1-.61-1.453l1.126-6.844-4.875-4.828c-.375-.375-.516-.985-.375-1.5a1.53 1.53 0 0 1 1.219-1.031l6.75-.985 3-6.234C12.375 6.328 12.89 6 13.5 6c.563 0 1.078.328 1.313.844' />
    </g>
    <defs>
      <clipPath id='6910989fc9264d130cf8a5a0e640ea84__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStarXlFillIcon);
export default ForwardRef;
