import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m10.719 4.281 3 3q.28.313.281.719 0 .405-.281.719l-3 3A1.04 1.04 0 0 1 10 12q-.405 0-.719-.281l-3-3A1.04 1.04 0 0 1 6 8q0-.405.281-.719l3-3Q9.594 4.001 10 4q.405 0 .719.281M7 8l3 3 3-3-3-3zM2 6q.844.03 1.406.594Q3.97 7.156 4 8v3.875q0 .219.031.438.094-.157.25-.282.53-.531 1.219-.531.688 0 1.219.531l2.875 2.844q.219.25.406.531.187-.28.406-.531l2.875-2.844q.53-.531 1.219-.531.688 0 1.219.531.156.126.25.281.03-.218.031-.437V8q.03-.843.594-1.406Q17.156 6.032 18 6q.844.03 1.406.594Q19.97 7.156 20 8v6.75a3.54 3.54 0 0 1-1.031 2.469l-2.625 2.625q-.345.312-.688 0-.312-.345 0-.688l2.625-2.625q.72-.75.719-1.781V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 18 7a.97.97 0 0 0-.719.281A.97.97 0 0 0 17 8v3.875a3.35 3.35 0 0 1-.937 2.281l-.344.313-1.375 1.375-.5.5q-.345.312-.688 0-.312-.345 0-.688l.5-.5 1.375-1.375q.438-.531 0-1.062-.531-.407-1.062 0l-2.844 2.875a2.05 2.05 0 0 0-.625 1.5V19.5q-.03.47-.5.5-.469-.03-.5-.5v-2.406q0-.876-.625-1.5l-2.844-2.875q-.531-.438-1.062 0-.406.531 0 1.062l1.375 1.375.5.5q.312.345 0 .688-.345.312-.688 0l-.5-.5-1.375-1.375-.343-.313A3.35 3.35 0 0 1 3 11.875V8a.97.97 0 0 0-.281-.719A.97.97 0 0 0 2 7a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 8v6.75q0 1.031.719 1.781l2.625 2.625q.312.345 0 .688-.345.312-.688 0l-2.625-2.625A3.54 3.54 0 0 1 0 14.75V8q.03-.843.594-1.406Q1.157 6.032 2 6' />
    </g>
    <defs>
      <clipPath id='2adc7b43eecdd8c5__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondMdRegularIcon);
export default ForwardRef;
