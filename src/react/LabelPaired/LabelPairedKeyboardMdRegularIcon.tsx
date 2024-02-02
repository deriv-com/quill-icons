import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardMdRegularIcon = (
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
      <path d='M2 7a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 8v8q0 .438.281.719A.97.97 0 0 0 2 17h14a.97.97 0 0 0 .719-.281A.97.97 0 0 0 17 16V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 16 7zM0 8q.03-.843.594-1.406Q1.157 6.032 2 6h14q.844.03 1.406.594Q17.97 7.156 18 8v8q-.03.844-.594 1.406-.562.563-1.406.594H2q-.843-.03-1.406-.594Q.032 16.844 0 16zm2.75.25h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m-.5 3.5q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5 2.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m2.5-5.5q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5 2.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m2.5-2.5q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5 2.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m2.5-2.5q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5 2.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m2.5-2.5q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zm.5 2.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5v-.5q.031-.469.5-.5m-.5 3.5q.031-.469.5-.5h.5q.47.031.5.5v.5q-.03.47-.5.5h-.5q-.469-.03-.5-.5zM5.5 14.5h7q.47.031.5.5-.03.47-.5.5h-7q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='9ba749ba7eedefeb__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardMdRegularIcon);
export default ForwardRef;
