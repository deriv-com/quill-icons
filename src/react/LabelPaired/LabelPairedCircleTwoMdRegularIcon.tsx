import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTwoMdRegularIcon = (
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
      <path d='M8 5a6.98 6.98 0 0 0-6.062 3.5c-1.282 2.188-1.282 4.844 0 7C3.188 17.688 5.467 19 8 19c2.5 0 4.781-1.312 6.031-3.5 1.281-2.156 1.281-4.812 0-7C12.781 6.344 10.5 5 8 5m0 15c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20M6.781 9.469l-.468.406a.465.465 0 0 1-.688-.031.465.465 0 0 1 .031-.688l.438-.406c.468-.469 1.125-.719 1.812-.719A2.607 2.607 0 0 1 9.72 12.5L7.188 15H10.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H6c-.219 0-.406-.125-.469-.281-.093-.188-.031-.406.094-.563L9 11.781c.313-.312.5-.719.5-1.156a1.6 1.6 0 0 0-1.594-1.594c-.437 0-.843.156-1.125.438' />
    </g>
    <defs>
      <clipPath id='2a0b445dcd6730752b58a275617b778b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTwoMdRegularIcon);
export default ForwardRef;
