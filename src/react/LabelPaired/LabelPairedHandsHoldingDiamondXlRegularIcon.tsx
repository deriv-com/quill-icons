import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m16.031 6.469 4.5 4.5c.61.562.61 1.547 0 2.11l-4.5 4.5c-.562.608-1.547.608-2.11 0l-4.5-4.5a1.445 1.445 0 0 1 0-2.11l4.5-4.5a1.445 1.445 0 0 1 2.11 0M10.5 12l4.5 4.5 4.5-4.5L15 7.5zM3 9c1.64 0 3 1.36 3 3v5.86c0 .187 0 .421.047.609.094-.14.187-.282.328-.422a2.603 2.603 0 0 1 3.703 0l4.266 4.265c.234.282.469.516.656.797.14-.28.375-.515.61-.797l4.265-4.265a2.603 2.603 0 0 1 3.703 0c.14.14.235.281.328.422.047-.188.094-.422.094-.61V12c0-1.64 1.313-3 3-3 1.64 0 3 1.36 3 3v10.172c0 1.36-.562 2.719-1.547 3.703l-3.937 3.938c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l3.937-3.937c.703-.703 1.125-1.64 1.125-2.625V12c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5v5.86a4.8 4.8 0 0 1-1.406 3.374l-.516.516-2.062 2.063-.75.75c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l.75-.75 2.062-2.062a1.103 1.103 0 0 0 0-1.547 1.103 1.103 0 0 0-1.547 0l-4.265 4.266a3.16 3.16 0 0 0-.938 2.25v3.609c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-3.61c0-.843-.375-1.64-.937-2.25L9 19.126a1.103 1.103 0 0 0-1.547 0 1.104 1.104 0 0 0 0 1.547l2.063 2.062.75.75c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0l-.75-.75-2.063-2.062-.469-.516C4.97 20.344 4.5 19.125 4.5 17.86V12c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5v10.172c0 .984.375 1.922 1.078 2.625l3.938 3.937c.28.282.28.797 0 1.078-.282.282-.797.282-1.078 0L1.5 25.876C.516 24.891 0 23.531 0 22.172V12c0-1.64 1.313-3 3-3' />
    </g>
    <defs>
      <clipPath id='7a9945247fc19f40d9914be60ada715b__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondXlRegularIcon);
export default ForwardRef;
