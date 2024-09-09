import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.75 8.25V27h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.5V9.656l-3.375 2.25c-.328.235-.797.14-1.031-.234-.235-.328-.14-.797.234-1.031l4.5-3a.85.85 0 0 1 .75-.047c.234.14.422.422.422.656' />
    </g>
    <defs>
      <clipPath id='3f5307118eac244f146d5f421a9ff9ec__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneXlRegularIcon);
export default ForwardRef;
