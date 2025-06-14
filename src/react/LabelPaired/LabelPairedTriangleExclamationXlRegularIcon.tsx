import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationXlRegularIcon = (
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
      <path d='M1.594 25.734c-.094.141-.094.282-.094.422 0 .469.375.89.844.89h19.265c.47 0 .891-.421.891-.89a.76.76 0 0 0-.14-.422L12.937 9.562C12.75 9.235 12.375 9 12 9c-.422 0-.797.234-.984.563zm-1.313-.75L9.703 8.812A2.7 2.7 0 0 1 12 7.5c.89 0 1.781.516 2.25 1.313l9.422 16.171c.187.328.328.75.328 1.172 0 1.313-1.078 2.344-2.39 2.344H2.343A2.32 2.32 0 0 1 0 26.156c0-.422.094-.843.281-1.172M12 13.5c.375 0 .75.375.75.75v6c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75M10.875 24c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12 25.125c-.656 0-1.125-.469-1.125-1.125' />
    </g>
    <defs>
      <clipPath id='3cb25378acb3f54c37f68b50c053100a__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationXlRegularIcon);
export default ForwardRef;
