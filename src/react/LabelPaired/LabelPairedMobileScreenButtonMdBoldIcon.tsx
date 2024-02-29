import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonMdBoldIcon = (
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
      <path d='M2 18q.031.47.5.5h7q.47-.03.5-.5v-2.5H2zm0-4h8V6q-.03-.469-.5-.5h-7q-.469.031-.5.5zM.5 6q.03-.843.594-1.406Q1.656 4.032 2.5 4h7q.844.03 1.406.594.563.562.594 1.406v12q-.03.844-.594 1.406-.563.563-1.406.594h-7q-.843-.03-1.406-.594Q.532 18.844.5 18zM5 16.5h2q.47.031.5.5-.03.47-.5.5H5q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='3e76f6869114e4d7c11e6b77c81d554a__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonMdBoldIcon);
export default ForwardRef;
