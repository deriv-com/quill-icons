import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlayMdRegularIcon = (
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
      <path d='M1.75 6.094a.57.57 0 0 0-.5-.032c-.156.094-.281.282-.281.438v11a.49.49 0 0 0 .281.438.48.48 0 0 0 .5 0l9-5.5A.5.5 0 0 0 11 12a.49.49 0 0 0-.25-.406zm-1-.875a1.5 1.5 0 0 1 1.531 0l9 5.5C11.72 11 12 11.5 12 12c0 .531-.281 1.031-.719 1.281l-9 5.5a1.43 1.43 0 0 1-1.531.032c-.469-.25-.75-.75-.75-1.313v-11c0-.531.281-1.031.75-1.281' />
    </g>
    <defs>
      <clipPath id='d01f09c0a9fb99c85553952df5a5e7ac__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlayMdRegularIcon);
export default ForwardRef;
