import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleFourMdFillIcon = (
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
      <path d='M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m6.969-3.937c-.375-.157-.813.062-.938.468l-1.5 4.5c-.093.219-.031.469.094.656A.73.73 0 0 0 5.25 14H8.5v1.25c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75V14h.25a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H10v-1.75a.76.76 0 0 0-.75-.75.74.74 0 0 0-.75.75v1.75H6.281L7.438 9c.156-.406-.063-.812-.47-.937' />
    </g>
    <defs>
      <clipPath id='2013e9b29fbfc50dad838f1cfe40c81e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleFourMdFillIcon);
export default ForwardRef;
