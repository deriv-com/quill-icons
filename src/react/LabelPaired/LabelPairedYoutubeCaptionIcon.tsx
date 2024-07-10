import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.117 6.43c.281.984.281 3.093.281 3.093s0 2.086-.28 3.094c-.141.563-.587.985-1.126 1.125C10.984 14 7 14 7 14s-4.008 0-5.016-.258A1.56 1.56 0 0 1 .86 12.617C.58 11.61.58 9.523.58 9.523s0-2.109.28-3.093A1.6 1.6 0 0 1 1.984 5.28C2.992 5 7 5 7 5s3.984 0 4.992.281c.54.14.985.586 1.125 1.149m-7.43 4.992 3.329-1.899-3.328-1.898z' />
    </g>
    <defs>
      <clipPath id='b800596a63736babf3ef49f48bb3dd7c__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeCaptionIcon);
export default ForwardRef;
