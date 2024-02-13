import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 8.75V12h5q.47.031.5.5-.03.47-.5.5h-5a12.2 12.2 0 0 1-1.187 5H9.5q.47.031.5.5-.03.47-.5.5h-9a.49.49 0 0 1-.437-.25.53.53 0 0 1 0-.5l.03-.062A11.64 11.64 0 0 0 1.5 13h-1q-.469-.03-.5-.5.031-.469.5-.5h1V8.75q.03-1.594 1.094-2.656Q3.657 5.03 5.25 5h.219q.624 0 1.187.188l2.5.843q.406.188.313.625-.188.438-.625.313l-2.5-.813A2.6 2.6 0 0 0 5.469 6H5.25q-1.156.03-1.937.813-.781.78-.813 1.937' />
    </g>
    <defs>
      <clipPath id='294c0d5707bbc627c5e69dfd51bcdcb3__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignMdRegularIcon);
export default ForwardRef;
