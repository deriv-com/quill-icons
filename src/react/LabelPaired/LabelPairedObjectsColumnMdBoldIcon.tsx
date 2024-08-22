import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.5 6.5v5h3v-5zM0 6.5A1.5 1.5 0 0 1 1.5 5h3C5.313 5 6 5.688 6 6.5v5A1.5 1.5 0 0 1 4.5 13h-3A1.48 1.48 0 0 1 0 11.5zm9.5 6v5h3v-5zm-1.5 0A1.5 1.5 0 0 1 9.5 11h3c.813 0 1.5.688 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 17.5zm-3.5 3h-3v2h3zm-3-1.5h3c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 4.5 19h-3A1.48 1.48 0 0 1 0 17.5v-2A1.5 1.5 0 0 1 1.5 14m8-7.5v2h3v-2zM8 6.5A1.5 1.5 0 0 1 9.5 5h3c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 8.5z' />
    </g>
    <defs>
      <clipPath id='5172e143e912724d7310a713422c406b__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnMdBoldIcon);
export default ForwardRef;
