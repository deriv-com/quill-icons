import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayMdFillIcon = (
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
      <path d='m2.281 5.219 9 5.5C11.72 11 12 11.5 12 12c0 .531-.281 1.031-.719 1.281l-9 5.5c-.469.282-1.062.313-1.531.032-.469-.25-.75-.75-.75-1.313v-11c0-.531.281-1.031.75-1.281a1.5 1.5 0 0 1 1.531 0' />
    </g>
    <defs>
      <clipPath id='c24b6ab7b484ed17c722bc27f6458584__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayMdFillIcon);
export default ForwardRef;
