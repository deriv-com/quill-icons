import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.5 17.5 9-5.5-9-5.5zM.75 5.219a1.5 1.5 0 0 1 1.531 0l9 5.5C11.72 11 12 11.5 12 12c0 .531-.281 1.031-.719 1.281l-9 5.5a1.43 1.43 0 0 1-1.531.032c-.469-.25-.75-.75-.75-1.313v-11c0-.531.281-1.031.75-1.281' />
    </g>
    <defs>
      <clipPath id='bb99810b7f9a11ae66d5d16902a8bbb9__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayMdBoldIcon);
export default ForwardRef;
