import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeXlIcon = (
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
      <path d='M25.734 11.86c.563 1.968.563 6.187.563 6.187s0 4.172-.563 6.187a3.13 3.13 0 0 1-2.25 2.25C21.47 27 13.5 27 13.5 27s-8.016 0-10.031-.516a3.13 3.13 0 0 1-2.25-2.25C.656 22.22.656 18.047.656 18.047s0-4.219.563-6.188c.281-1.125 1.172-2.015 2.25-2.296C5.484 9 13.5 9 13.5 9s7.969 0 9.984.563c1.078.28 1.97 1.171 2.25 2.296m-14.859 9.984 6.656-3.797-6.656-3.797z' />
    </g>
    <defs>
      <clipPath id='d1d29c7d258ac9d0df681345aab95f3e__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeXlIcon);
export default ForwardRef;
