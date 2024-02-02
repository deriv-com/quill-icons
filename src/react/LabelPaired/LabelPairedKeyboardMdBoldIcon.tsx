import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 7.5q-.469.031-.5.5v8q.031.47.5.5h14q.47-.03.5-.5V8q-.03-.469-.5-.5zM0 8q.03-.843.594-1.406Q1.157 6.032 2 6h14q.844.03 1.406.594Q17.97 7.156 18 8v8q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 16.844 0 16zm5.5 6h7q.47.031.5.5v.5q-.03.47-.5.5h-7q-.469-.03-.5-.5v-.5q.031-.469.5-.5m-2.25-2.25q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5-3h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m2 3q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5-3h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m2 3q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5-3h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m2 3q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5-3h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m2 3q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5-3h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='8b55db5e08b5b8fd5afe2154a9036a5b__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardMdBoldIcon);
export default ForwardRef;
