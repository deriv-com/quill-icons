import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraMdRegularIcon = (
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
      <path d='M5.969 5h4.062q1.032.063 1.438 1.031L11.78 7H14q.844.03 1.406.594Q15.97 8.156 16 9v8q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17V9q.03-.843.594-1.406Q1.157 7.032 2 7h2.219l.343-.969Q4.939 5.061 5.97 5M5.5 6.344l-.437 1.312a.52.52 0 0 1-.47.344H2a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 9v8q0 .438.281.719A.97.97 0 0 0 2 18h12a.97.97 0 0 0 .719-.281A.97.97 0 0 0 15 17V9a.97.97 0 0 0-.281-.719A.97.97 0 0 0 14 8h-2.594a.52.52 0 0 1-.469-.344L10.5 6.344A.52.52 0 0 0 10.031 6H5.97a.52.52 0 0 0-.469.344M8 16.5a3.44 3.44 0 0 1-1.75-.469 3.44 3.44 0 0 1-1.281-1.281A3.44 3.44 0 0 1 4.5 13q0-.937.469-1.75T6.25 9.969A3.44 3.44 0 0 1 8 9.5q.937 0 1.75.469t1.281 1.281q.47.813.469 1.75 0 .937-.469 1.75T9.75 16.031A3.44 3.44 0 0 1 8 16.5M5.5 13q.031 1.407 1.25 2.156 1.25.688 2.5 0 1.22-.75 1.25-2.156-.03-1.406-1.25-2.156-1.25-.688-2.5 0-1.219.75-1.25 2.156' />
    </g>
    <defs>
      <clipPath id='2463450c56bc26017630ff16db5eec94__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraMdRegularIcon);
export default ForwardRef;
