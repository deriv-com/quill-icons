import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedClapperboardPlayXlBoldIcon = (
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
      <path d='M2.25 25.5c0 .422.328.75.75.75h18c.375 0 .75-.328.75-.75v-9.75H2.25zm13.5-12h3l3-3c0-.375-.375-.75-.75-.75h-1.5zm-4.5 0L15 9.75h-3L8.25 13.5zm-7.5 0L7.5 9.75h-3L2.25 12v1.5zm20.25-3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3m-13.875 6.844c.234-.094.563-.094.75.047l4.5 3c.234.14.375.375.375.609 0 .281-.14.516-.375.656l-4.5 3c-.187.14-.516.14-.75.047-.234-.14-.375-.422-.375-.703v-6c0-.234.14-.516.375-.656' />
    </g>
    <defs>
      <clipPath id='c5d9f55aa9d226928e072d46981dc745__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedClapperboardPlayXlBoldIcon);
export default ForwardRef;
