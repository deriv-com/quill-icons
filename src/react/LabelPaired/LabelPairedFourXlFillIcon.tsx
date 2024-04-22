import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFourXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.86 9.656 3.843 20.25H12V13.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v6.75h1.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H15V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 12 27v-3.75H1.5c-.516 0-1.031-.234-1.312-.656-.235-.469-.282-.985-.047-1.453l6-12.75c.328-.75 1.218-1.078 1.968-.75.75.375 1.079 1.265.75 2.015' />
    </g>
    <defs>
      <clipPath id='5b1a61a97cfd5183f982bb00ba936d02__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFourXlFillIcon);
export default ForwardRef;
